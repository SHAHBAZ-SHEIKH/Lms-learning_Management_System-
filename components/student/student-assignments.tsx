"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export function StudentAssignments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Assignments</h1>
        <p className="text-muted-foreground">View and submit your assignments</p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>React Component Project</span>
              <Badge variant="destructive">Due Tomorrow</Badge>
            </CardTitle>
            <CardDescription>Create a responsive dashboard component using React and Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="text-blue-600 hover:underline">
                  Assignment_Instructions.pdf
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Deadline: January 15, 2024 at 11:59 PM</p>
                <p>Subject: Web Development</p>
              </div>
              <Button>Submit Assignment</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Database Schema Design</span>
              <Badge variant="secondary">Due in 3 days</Badge>
            </CardTitle>
            <CardDescription>Design a normalized database schema for an e-commerce application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="text-blue-600 hover:underline">
                  Database_Project_Guidelines.pdf
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Deadline: January 18, 2024 at 11:59 PM</p>
                <p>Subject: Database Design</p>
              </div>
              <Button variant="outline">Start Assignment</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
