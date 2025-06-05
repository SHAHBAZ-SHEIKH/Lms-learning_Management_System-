"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit } from "lucide-react"

interface QuizManagementProps {
  setActiveView: (view: string) => void
}

export function QuizManagement({ setActiveView }: QuizManagementProps) {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: "HTML Fundamentals", questions: 10, password: "html123", duration: 10 },
    { id: 2, title: "CSS Styling", questions: 10, password: "css456", duration: 10 },
    { id: 3, title: "JavaScript Basics", questions: 10, password: "js789", duration: 10 },
  ])

  const [newQuiz, setNewQuiz] = useState({
    title: "",
    type: "HTML",
    questions: 10,
    duration: 30,
    password: "",
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateQuiz = () => {
    const quiz = {
      id: quizzes.length + 1,
      title: newQuiz.title,
      questions: newQuiz.questions,
      password: newQuiz.password,
      duration: newQuiz.duration,
    }
    setQuizzes([...quizzes, quiz])
    setNewQuiz({ title: "", type: "HTML", questions: 10, duration: 30, password: "" })
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Quiz Management</h1>
          <p className="text-muted-foreground">Create and manage student quizzes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Quiz
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Quiz</DialogTitle>
              <DialogDescription>Add a new quiz topic for students</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Quiz Title</label>
                <Input
                  placeholder="Enter quiz title"
                  value={newQuiz.title}
                  onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Quiz Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newQuiz.type}
                  onChange={(e) => setNewQuiz({ ...newQuiz, type: e.target.value })}
                >
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                  <option>React</option>
                  <option>Node.js</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Number of Questions</label>
                <Input
                  type="number"
                  placeholder="10"
                  min="1"
                  max="50"
                  value={newQuiz.questions}
                  onChange={(e) => setNewQuiz({ ...newQuiz, questions: Number.parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Duration (minutes)</label>
                <Input
                  type="number"
                  placeholder="30"
                  min="5"
                  max="120"
                  value={newQuiz.duration}
                  onChange={(e) => setNewQuiz({ ...newQuiz, duration: Number.parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Quiz Password</label>
                <Input
                  placeholder="Enter password for quiz access"
                  value={newQuiz.password}
                  onChange={(e) => setNewQuiz({ ...newQuiz, password: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateQuiz}>Create Quiz</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>All Quizzes</CardTitle>
            <CardDescription>Manage quiz topics and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizzes.map((quiz) => (
                  <TableRow key={quiz.id}>
                    <TableCell className="font-medium">{quiz.title}</TableCell>
                    <TableCell>{quiz.questions}</TableCell>
                    <TableCell>{quiz.duration} min</TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{quiz.password}</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setActiveView("quiz-results")}>
                          Results
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Total Quizzes:</span>
              <span className="font-semibold">{quizzes.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Attempts:</span>
              <span className="font-semibold">245</span>
            </div>
            <div className="flex justify-between">
              <span>Average Score:</span>
              <span className="font-semibold">78%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
