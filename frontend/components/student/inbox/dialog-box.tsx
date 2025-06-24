'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import React, { useState } from 'react'

interface User {
    id: number
    name: string
    email: string
    avatar: string
}

const users: User[] = [
    { id: 1, name: "Olivia Martin", email: "m@example.com", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Emma Wilson", email: "emma@example.com", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Jackson Lee", email: "lee@example.com", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 5, name: "William Kim", email: "will@email.com", avatar: "/placeholder.svg?height=32&width=32" },
]
interface DialogBoxProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export const DialogBox = ({ isOpen, setIsOpen }: DialogBoxProps) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedUsers, setSelectedUsers] = useState<number[]>([])

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const toggleUserSelection = (userId: number) => {
        setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
    }
    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md w-full sm:rounded-lg rounded-none sm:mx-auto mx-0 sm:my-8 my-0 h-screen sm:h-auto">
                    <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <DialogTitle className="text-lg font-semibold">New message</DialogTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogHeader>

                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">Invite a user to this thread. This will create a new group message.</p>

                        {/* Search Input */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search user..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* User List */}
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                            {filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 ${selectedUsers.includes(user.id) ? "bg-blue-50 border border-blue-200" : ""
                                        }`}
                                    onClick={() => toggleUserSelection(user.id)}
                                >
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                        <AvatarFallback>
                                            {user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t">
                            <p className="text-sm text-gray-500">Select users to add to this thread.</p>
                            <Button
                                className="bg-gray-400 hover:bg-gray-500"
                                disabled={selectedUsers.length === 0}
                                onClick={() => {
                                    // Handle continue action here
                                    console.log("Selected users:", selectedUsers)
                                    setIsOpen(false)
                                    setSelectedUsers([])
                                }}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
