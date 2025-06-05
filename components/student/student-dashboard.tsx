"use client"

import { useState } from "react"
import { StudentSidebar } from "./student-sidebar"
import { StudentDashboardContent } from "./student-dashboard-content"
import { StudentQuizzes } from "./student-quizzes"
import { StudentAssignments } from "./student-assignments"
import { StudentCalendar } from "./student-calendar"
import { StudentAchievements } from "./student-achievements"
import { StudentProfile } from "./student-profile"
import { StudentSettings } from "./student-settings"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

interface StudentDashboardProps {
  onLogout: () => void
}

export function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeView, setActiveView] = useState("dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <StudentDashboardContent />
      case "quizzes":
        return <StudentQuizzes />
      case "assignments":
        return <StudentAssignments />
      case "calendar":
        return <StudentCalendar />
      case "achievements":
        return <StudentAchievements />
      case "profile":
        return <StudentProfile />
      case "settings":
        return <StudentSettings />
      default:
        return <StudentDashboardContent />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <StudentSidebar activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} />

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="capitalize">{activeView}</span>
            </div>
          </header>

          <main className="flex-1 p-6">{renderContent()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
