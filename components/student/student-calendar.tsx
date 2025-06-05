"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, BookOpen } from "lucide-react"

export function StudentCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">View your upcoming classes and deadlines</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">React Workshop</h3>
              <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Assignment Due: Database Project</h3>
              <p className="text-sm text-muted-foreground">Tomorrow, 11:59 PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">JavaScript Advanced Concepts</h3>
              <p className="text-sm text-muted-foreground">Friday, 10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
