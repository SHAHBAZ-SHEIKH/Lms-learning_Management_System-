"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, FileText, Lock } from "lucide-react"
import { QuizInterface } from "./quiz-interface"

interface QuizCardProps {
  title: string
  description: string
  duration: string
  questions: number
  quizType: "html" | "css" | "javascript"
}

export function QuizCard({ title, description, duration, questions, quizType }: QuizCardProps) {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [password, setPassword] = useState("")
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [passwordError, setPasswordError] = useState("")

  // Mock passwords for each quiz (in real app, these would come from admin)
  const quizPasswords = {
    html: "html123",
    css: "css456",
    javascript: "js789",
  }

  const handleStartQuiz = () => {
    setShowPasswordDialog(true)
    setPassword("")
    setPasswordError("")
  }

  const handlePasswordSubmit = () => {
    if (password === quizPasswords[quizType]) {
      setShowPasswordDialog(false)
      setIsQuizStarted(true)
    } else {
      setPasswordError("Incorrect password. Please contact your instructor.")
    }
  }

  const handleQuizComplete = () => {
    setIsQuizStarted(false)
  }

  if (isQuizStarted) {
    return <QuizInterface quizType={quizType} onComplete={handleQuizComplete} />
  }

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            <Lock className="w-4 h-4 text-muted-foreground" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FileText className="w-4 h-4" />
                <span>{questions} questions</span>
              </div>
            </div>
            <Badge variant="outline" className="w-full justify-center">
              Password Protected
            </Badge>
            <Button className="w-full" onClick={handleStartQuiz}>
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Quiz Password</DialogTitle>
            <DialogDescription>
              Please enter the password provided by your instructor to access this quiz.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
              />
              {passwordError && <p className="text-sm text-red-500 mt-2">{passwordError}</p>}
            </div>
            <div className="flex space-x-2">
              <Button onClick={handlePasswordSubmit} className="flex-1">
                Start Quiz
              </Button>
              <Button variant="outline" onClick={() => setShowPasswordDialog(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
