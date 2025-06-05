"use client"

import { useState } from "react"
import { EnhancedStudentSidebar } from "./enhanced-student-sidebar"
import { StudentDashboardContent } from "./student-dashboard-content"
import { StudentQuizzes } from "./student-quizzes"
import { StudentAssignments } from "./student-assignments"
import { StudentCalendar } from "./student-calendar"
import { StudentAchievements } from "./student-achievements"
import { StudentProfile } from "./student-profile"
import { StudentSettings } from "./student-settings"
import { Navbar } from "../navbar"
import { ThemeCustomizer } from "../theme-switcher"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

interface EnhancedStudentDashboardProps {
  onLogout: () => void
}

export function EnhancedStudentDashboard({ onLogout }: EnhancedStudentDashboardProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <EnhancedStudentSidebar activeView={activeView} setActiveView={setActiveView} />

          <SidebarInset className="flex-1">
            <Navbar
              userRole="student"
              userName="John Doe"
              userEmail="john.doe@example.com"
              onProfileClick={() => setActiveView("profile")}
              onSettingsClick={() => setActiveView("settings")}
              onLogout={onLogout}
            />

            <main className="flex-1 p-6 bg-gradient-to-br from-background to-muted/10">
              <div className="max-w-7xl mx-auto">{renderContent()}</div>
            </main>
          </SidebarInset>
        </div>

        <ThemeCustomizer />
      </SidebarProvider>
    </div>
  )
}
