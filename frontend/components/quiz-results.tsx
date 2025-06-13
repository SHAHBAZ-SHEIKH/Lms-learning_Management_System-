"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, FileSpreadsheet, FileText } from "lucide-react"

interface QuizResultsProps {
  onBack: () => void
}

export function QuizResults({ onBack }: QuizResultsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const [quizResults] = useState([
    {
      id: 1,
      studentName: "John Doe",
      campus: "Main Campus",
      email: "john@example.com",
      quiz: "HTML Fundamentals",
      score: 8,
      totalQuestions: 10,
      percentage: 80,
      timeSpent: "8:45",
      attemptDate: "2024-01-10",
      status: "Passed",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      campus: "North Campus",
      email: "jane@example.com",
      quiz: "CSS Styling",
      score: 9,
      totalQuestions: 10,
      percentage: 90,
      timeSpent: "7:30",
      attemptDate: "2024-01-11",
      status: "Passed",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      campus: "Main Campus",
      email: "mike@example.com",
      quiz: "JavaScript Basics",
      score: 6,
      totalQuestions: 10,
      percentage: 60,
      timeSpent: "9:15",
      attemptDate: "2024-01-12",
      status: "Failed",
    },
    {
      id: 4,
      studentName: "Sarah Wilson",
      campus: "South Campus",
      email: "sarah@example.com",
      quiz: "HTML Fundamentals",
      score: 10,
      totalQuestions: 10,
      percentage: 100,
      timeSpent: "6:20",
      attemptDate: "2024-01-13",
      status: "Passed",
    },
    {
      id: 5,
      studentName: "David Brown",
      campus: "North Campus",
      email: "david@example.com",
      quiz: "CSS Styling",
      score: 7,
      totalQuestions: 10,
      percentage: 70,
      timeSpent: "8:50",
      attemptDate: "2024-01-14",
      status: "Passed",
    },
  ])

  const filteredResults = quizResults.filter(
    (result) =>
      result.campus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.quiz.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const downloadExcel = () => {
    // Create CSV content
    const headers = [
      "Student Name",
      "Campus",
      "Email",
      "Quiz",
      "Score",
      "Total Questions",
      "Percentage",
      "Time Spent",
      "Attempt Date",
      "Status",
    ]
    const csvContent = [
      headers.join(","),
      ...filteredResults.map((result) =>
        [
          result.studentName,
          result.campus,
          result.email,
          result.quiz,
          result.score,
          result.totalQuestions,
          result.percentage + "%",
          result.timeSpent,
          result.attemptDate,
          result.status,
        ].join(","),
      ),
    ].join("\n")

    // Download CSV file
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "quiz_results.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    // Create a simple HTML content for PDF
    const htmlContent = `
      <html>
        <head>
          <title>Quiz Results Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>Quiz Results Report</h1>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Campus</th>
                <th>Quiz</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${filteredResults
                .map(
                  (result) => `
                <tr>
                  <td>${result.studentName}</td>
                  <td>${result.campus}</td>
                  <td>${result.quiz}</td>
                  <td>${result.score}/${result.totalQuestions}</td>
                  <td>${result.percentage}%</td>
                  <td>${result.status}</td>
                  <td>${result.attemptDate}</td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `

    // Open in new window for printing/saving as PDF
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
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <p className="text-muted-foreground">View and manage student quiz attempts</p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Quiz Management
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by campus, student name, or quiz..."
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
            <CardTitle className="text-sm font-medium">Total Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredResults.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(filteredResults.reduce((acc, result) => acc + result.percentage, 0) / filteredResults.length)}
              %
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((filteredResults.filter((r) => r.status === "Passed").length / filteredResults.length) * 100)}
              %
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Campuses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(filteredResults.map((r) => r.campus)).size}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quiz Attempts</CardTitle>
          <CardDescription>
            {filteredResults.length} results found
            {searchTerm && ` for "${searchTerm}"`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Campus</TableHead>
                <TableHead>Quiz</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Time Spent</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{result.studentName}</div>
                      <div className="text-sm text-muted-foreground">{result.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{result.campus}</TableCell>
                  <TableCell>{result.quiz}</TableCell>
                  <TableCell>
                    {result.score}/{result.totalQuestions}
                  </TableCell>
                  <TableCell>{result.percentage}%</TableCell>
                  <TableCell>{result.timeSpent}</TableCell>
                  <TableCell>{result.attemptDate}</TableCell>
                  <TableCell>
                    <Badge variant={result.status === "Passed" ? "default" : "destructive"}>{result.status}</Badge>
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
