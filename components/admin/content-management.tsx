"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, BookOpen } from "lucide-react"

export function ContentManagement() {
  const [subjects] = useState([
    { id: 1, title: "Web Development Fundamentals", lessons: 12, students: 45 },
    { id: 2, title: "React Development", lessons: 8, students: 32 },
    { id: 3, title: "Database Design", lessons: 10, students: 28 },
    { id: 4, title: "JavaScript Advanced", lessons: 15, students: 38 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground">Manage subjects and learning materials</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
              <DialogDescription>Create a new learning subject</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Subject Title</label>
                <Input placeholder="Enter subject title" />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Enter subject description" />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Data Science</option>
                  <option>Business</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button>Create Subject</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle>{subject.title}</CardTitle>
              <CardDescription>
                {subject.lessons} lessons • {subject.students} students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Lessons
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
