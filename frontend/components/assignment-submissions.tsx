"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Search, FileSpreadsheet, FileText, Eye } from "lucide-react"

interface AssignmentSubmissionsProps {
  onBack: () => void
}

export function AssignmentSubmissions({ onBack }: AssignmentSubmissionsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const [submissions] = useState([
    {
      id: 1,
      studentName: "John Doe",
      campus: "Main Campus",
      email: "john@example.com",
      assignment: "React Component Project",
      subject: "React Development",
      submissionDate: "2024-01-14",
      dueDate: "2024-01-15",
      status: "On Time",
      fileName: "john_react_project.zip",
      fileSize: "2.5 MB",
      grade: "A",
      feedback: "Excellent work!",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      campus: "North Campus",
      email: "jane@example.com",
      assignment: "Database Schema Design",
      subject: "Database Design",
      submissionDate: "2024-01-17",
      dueDate: "2024-01-18",
      status: "On Time",
      fileName: "jane_db_schema.pdf",
      fileSize: "1.8 MB",
      grade: "B+",
      feedback: "Good structure, minor improvements needed",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      campus: "Main Campus",
      email: "mike@example.com",
      assignment: "API Integration Task",
      subject: "JavaScript Advanced",
      submissionDate: "2024-01-21",
      dueDate: "2024-01-20",
      status: "Late",
      fileName: "mike_api_project.zip",
      fileSize: "3.2 MB",
      grade: "B-",
      feedback: "Late submission, but good implementation",
    },
    {
      id: 4,
      studentName: "Sarah Wilson",
      campus: "South Campus",
      email: "sarah@example.com",
      assignment: "React Component Project",
      subject: "React Development",
      submissionDate: "2024-01-13",
      dueDate: "2024-01-15",
      status: "Early",
      fileName: "sarah_react_components.zip",
      fileSize: "2.1 MB",
      grade: "A+",
      feedback: "Outstanding work with excellent documentation",
    },
    {
      id: 5,
      studentName: "David Brown",
      campus: "North Campus",
      email: "david@example.com",
      assignment: "Database Schema Design",
      subject: "Database Design",
      submissionDate: "2024-01-18",
      dueDate: "2024-01-18",
      status: "On Time",
      fileName: "david_database_design.pdf",
      fileSize: "1.5 MB",
      grade: "B",
      feedback: "Meets requirements, could be more detailed",
    },
  ])

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.campus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const downloadExcel = () => {
    const headers = [
      "Student Name",
      "Campus",
      "Email",
      "Assignment",
      "Subject",
      "Submission Date",
      "Due Date",
      "Status",
      "File Name",
      "Grade",
      "Feedback",
    ]
    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((submission) =>
        [
          submission.studentName,
          submission.campus,
          submission.email,
          submission.assignment,
          submission.subject,
          submission.submissionDate,
          submission.dueDate,
          submission.status,
          submission.fileName,
          submission.grade,
          `"${submission.feedback}"`,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "assignment_submissions.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Assignment Submissions Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 12px; }
            th { background-color: #f2f2f2; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>Assignment Submissions Report</h1>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Campus</th>
                <th>Assignment</th>
                <th>Subject</th>
                <th>Submission Date</th>
                <th>Status</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              ${filteredSubmissions
                .map(
                  (submission) => `
                <tr>
                  <td>${submission.studentName}</td>
                  <td>${submission.campus}</td>
                  <td>${submission.assignment}</td>
                  <td>${submission.subject}</td>
                  <td>${submission.submissionDate}</td>
                  <td>${submission.status}</td>
                  <td>${submission.grade}</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `

    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(htmlContent)
      newWindow.document.close()
      newWindow.print()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assignment Submissions</h1>
          <p className="text-muted-foreground">View and manage student assignment submissions</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Assignment Management
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by campus, student, assignment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button onClick={downloadExcel} variant="outline">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Download Excel
          </Button>
          <Button onClick={downloadPDF} variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredSubmissions.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {filteredSubmissions.filter((s) => s.status === "On Time" || s.status === "Early").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {filteredSubmissions.filter((s) => s.status === "Late").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Campuses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(filteredSubmissions.map((s) => s.campus)).size}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assignment Submissions</CardTitle>
          <CardDescription>
            {filteredSubmissions.length} submissions found
            {searchTerm && ` for "${searchTerm}"`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Campus</TableHead>
                <TableHead>Assignment</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{submission.studentName}</div>
                      <div className="text-sm text-muted-foreground">{submission.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{submission.campus}</TableCell>
                  <TableCell>{submission.assignment}</TableCell>
                  <TableCell>{submission.subject}</TableCell>
                  <TableCell>{submission.submissionDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        submission.status === "Late"
                          ? "destructive"
                          : submission.status === "Early"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{submission.grade}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
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
