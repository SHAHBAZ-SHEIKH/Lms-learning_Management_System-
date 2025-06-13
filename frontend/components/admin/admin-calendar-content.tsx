"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText } from "lucide-react"

export function AdminCalendarContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar Management</h1>
        <p className="text-muted-foreground">Manage schedules and events</p>
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
              <h3 className="font-medium">React Workshop - Batch A</h3>
              <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
            </div>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Assignment Review Session</h3>
              <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM</p>
            </div>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
