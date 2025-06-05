"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Trophy,
  User,
  ChevronRight,
  Star,
  Clock,
  Target,
} from "lucide-react"

interface EnhancedStudentSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function EnhancedStudentSidebar({ activeView, setActiveView }: EnhancedStudentSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      id: "dashboard",
      badge: null,
      description: "Overview & Stats",
    },
    {
      title: "Quizzes",
      icon: BookOpen,
      id: "quizzes",
      badge: "3 New",
      description: "Test Knowledge",
    },
    {
      title: "Assignments",
      icon: FileText,
      id: "assignments",
      badge: "2 Due",
      description: "Submit Work",
    },
    {
      title: "Calendar",
      icon: Calendar,
      id: "calendar",
      badge: null,
      description: "Schedule & Events",
    },
    {
      title: "Achievements",
      icon: Trophy,
      id: "achievements",
      badge: "8",
      description: "Badges & Rewards",
    },
    {
      title: "Profile",
      icon: User,
      id: "profile",
      badge: null,
      description: "Personal Info",
    },
    {
      title: "Settings",
      icon: Settings,
      id: "settings",
      badge: null,
      description: "Preferences",
    },
  ]

  const stats = [
    { label: "Courses", value: "6", icon: BookOpen, color: "text-blue-500" },
    { label: "Hours", value: "42", icon: Clock, color: "text-green-500" },
    { label: "Score", value: "87%", icon: Target, color: "text-purple-500" },
  ]

  return (
    <Sidebar className="border-r-0 shadow-lg">
      <SidebarHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LMS Portal
            </h1>
            <p className="text-xs text-muted-foreground">Student Dashboard</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <stat.icon className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
                <p className="text-xs font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-background to-muted/20">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id} className="mb-2">
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                    className={`group relative w-full justify-start px-3 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                      activeView === item.id
                        ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
                        : "hover:bg-muted/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <item.icon
                        className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                          activeView === item.id ? "text-white" : "text-muted-foreground"
                        }`}
                      />
                      <div className="flex-1 text-left">
                        <p
                          className={`font-medium text-sm ${activeView === item.id ? "text-white" : "text-foreground"}`}
                        >
                          {item.title}
                        </p>
                        <p className={`text-xs ${activeView === item.id ? "text-white/70" : "text-muted-foreground"}`}>
                          {item.description}
                        </p>
                      </div>
                      {item.badge && (
                        <Badge
                          variant={activeView === item.id ? "secondary" : "default"}
                          className="text-xs px-2 py-0.5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      {activeView === item.id && <ChevronRight className="h-4 w-4 text-white" />}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Progress Section */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <div className="mx-4 mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Learning Progress</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Overall Progress</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t bg-gradient-to-r from-muted/50 to-muted/30">
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="relative">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                  JD
                </AvatarFallback>
              </Avatar>
              {/* Online Status Indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
            <Badge variant="outline" className="text-xs">
              Student
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
