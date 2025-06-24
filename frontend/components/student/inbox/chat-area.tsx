'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Send } from 'lucide-react'
import React, { useState } from 'react'
import { DialogBox } from './dialog-box'
import { ScrollArea } from '@radix-ui/react-scroll-area'

interface Message {
    id: number
    text: string
    isCustomer: boolean
    timestamp: Date
}

export const ChatArea = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi, how can I help you today?", isCustomer: false, timestamp: new Date() },
        { id: 2, text: "Hey, I'm having trouble with my account.", isCustomer: true, timestamp: new Date() },
        { id: 3, text: "What seems to be the problem?", isCustomer: false, timestamp: new Date() },
        { id: 4, text: "I can't log in.", isCustomer: true, timestamp: new Date() },
    ])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputValue,
                isCustomer: true,
                timestamp: new Date(),
            }
            setMessages([...messages, newMessage])
            setInputValue("")
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage()
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full relative flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sofia Davis" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold text-gray-900">Sofia Davis</h3>
                            <p className="text-sm text-gray-500">m@example.com</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsModalOpen(true)}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <ScrollArea>

                    <div className="p-4 space-y-4 overflow-y-auto flex-1">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.isCustomer ? "justify-end" : "items-start space-x-2"}`}>
                                {!message.isCustomer && (
                                    <Avatar className="h-8 w-8 flex-shrink-0">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sofia Davis" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={`rounded-lg px-3 py-2 max-w-xs ${message.isCustomer ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t">
                    <div className="flex items-center space-x-2">
                        <Input
                            placeholder="Type your message..."
                            className="flex-1 border-gray-300 focus:border-gray-400 focus:ring-0"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button
                            size="icon"
                            className="bg-gray-400 hover:bg-gray-500 h-10 w-10 rounded-full"
                            onClick={handleSendMessage}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

            </div>
            <DialogBox isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    )
}
