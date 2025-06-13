"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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

interface AssignmentsManagementProps {
  setActiveView: (view: string) => void
}

export function AssignmentsManagement({ setActiveView }: AssignmentsManagementProps) {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Component Project",
      subject: "React Development",
      dueDate: "2024-01-15",
      submissions: 25,
      fileType: "PDF",
      fileName: "Assignment_Instructions.pdf",
    },
    {
      id: 2,
      title: "Database Schema Design",
      subject: "Database Design",
      dueDate: "2024-01-18",
      submissions: 18,
      fileType: "Link",
      fileName: "https://example.com/db-assignment",
    },
    {
      id: 3,
      title: "API Integration Task",
      subject: "JavaScript Advanced",
      dueDate: "2024-01-20",
      submissions: 30,
      fileType: "PDF",
      fileName: "API_Integration_Guide.pdf",
    },
  ])

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    subject: "",
    description: "",
    type: "PDF Upload",
    file: "",
    dueDate: "",
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateAssignment = () => {
    const assignment = {
      id: assignments.length + 1,
      title: newAssignment.title,
      subject: newAssignment.subject,
      dueDate: newAssignment.dueDate,
      submissions: 0,
      fileType: newAssignment.type === "PDF Upload" ? "PDF" : "Link",
      fileName: newAssignment.file,
    }
    setAssignments([...assignments, assignment])
    setNewAssignment({ title: "", subject: "", description: "", type: "PDF Upload", file: "", dueDate: "" })
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assignments Management</h1>
          <p className="text-muted-foreground">Create and manage student assignments</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Assignment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
              <DialogDescription>Add a new assignment for students</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Assignment Title</label>
                <Input
                  placeholder="Enter assignment title"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAssignment.subject}
                  onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                >
                  <option value="">Select Subject</option>
                  <option>Web Development Fundamentals</option>
                  <option>React Development</option>
                  <option>Database Design</option>
                  <option>JavaScript Advanced</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Enter assignment description"
                  value={newAssignment.description}
                  onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Assignment Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAssignment.type}
                  onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
                >
                  <option>PDF Upload</option>
                  <option>External Link</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">File/Link</label>
                <Input
                  placeholder="Upload PDF or enter link URL"
                  value={newAssignment.file}
                  onChange={(e) => setNewAssignment({ ...newAssignment, file: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Due Date</label>
                <Input
                  type="datetime-local"
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateAssignment}>Create Assignment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Assignments</CardTitle>
          <CardDescription>Manage student assignments and submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">{assignment.title}</TableCell>
                  <TableCell>{assignment.subject}</TableCell>
                  <TableCell>
                    <Badge variant={assignment.fileType === "PDF" ? "default" : "secondary"}>
                      {assignment.fileType}
                    </Badge>
                  </TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>{assignment.submissions}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setActiveView("assignment-submissions")}>
                        View Submissions
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
