"use client"

import { useState } from "react"
import { EnhancedAdminSidebar } from "./enhanced-admin-sidebar"
import { AdminDashboardContent } from "./admin-dashboard-content"
import { StudentsManagement } from "./students-management"
import { ContentManagement } from "./content-management"
import { QuizManagement } from "./quiz-management"
import { AssignmentsManagement } from "./assignments-management"
import { AnalyticsContent } from "./analytics-content"
import { AdminCalendarContent } from "./admin-calendar-content"
import { AdminSettingsContent } from "./admin-settings-content"
import { QuizResults } from "../quiz-results"
import { AssignmentSubmissions } from "../assignment-submissions"
import { Navbar } from "../navbar"
import { ThemeCustomizer } from "../theme-switcher"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

interface EnhancedAdminDashboardProps {
  onLogout: () => void
}

export function EnhancedAdminDashboard({ onLogout }: EnhancedAdminDashboardProps) {
  const [activeView, setActiveView] = useState("dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <AdminDashboardContent />
      case "students":
        return <StudentsManagement />
      case "content":
        return <ContentManagement />
      case "quizzes":
        return <QuizManagement setActiveView={setActiveView} />
      case "quiz-results":
        return <QuizResults onBack={() => setActiveView("quizzes")} />
      case "assignments":
        return <AssignmentsManagement setActiveView={setActiveView} />
      case "assignment-submissions":
        return <AssignmentSubmissions onBack={() => setActiveView("assignments")} />
      case "analytics":
        return <AnalyticsContent />
      case "calendar":
        return <AdminCalendarContent />
      case "settings":
        return <AdminSettingsContent />
      default:
        return <AdminDashboardContent />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <EnhancedAdminSidebar activeView={activeView} setActiveView={setActiveView} />

          <SidebarInset className="flex-1">
            <Navbar
              userRole="admin"
              userName="Admin User"
              userEmail="admin@lms.com"
              onProfileClick={() => setActiveView("settings")}
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
