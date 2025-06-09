import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/student/dashboard/side-bar"
import { DashboardHeader } from "@/components/student/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar/>
      <div className="flex-1">
        <DashboardHeader />
        <main className="flex-1 space-y-4 p-4 md:p-8 w-full">
          <div className=" mx-auto max-w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
