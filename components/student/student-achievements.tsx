"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, BookOpen, CheckCircle } from "lucide-react"

export function StudentAchievements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Achievements</h1>
        <p className="text-muted-foreground">Your learning milestones and badges</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold">First Course Completed</h3>
            <p className="text-sm text-muted-foreground">Completed your first course</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold">Knowledge Seeker</h3>
            <p className="text-sm text-muted-foreground">Completed 5 lessons in a week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold">Assignment Master</h3>
            <p className="text-sm text-muted-foreground">Submitted 10 assignments on time</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
