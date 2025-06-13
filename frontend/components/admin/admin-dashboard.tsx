"use client"

import { useState } from "react"
import { AdminSidebar } from "./admin-sidebar"
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
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
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
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} />

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
