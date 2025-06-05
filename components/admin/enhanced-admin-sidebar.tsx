"use client"
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
  FileText,
  Home,
  Settings,
  Shield,
  Users,
  BarChart3,
  Calendar,
  ChevronRight,
  TrendingUp,
  UserCheck,
  BookMarked,
} from "lucide-react"

interface EnhancedAdminSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function EnhancedAdminSidebar({ activeView, setActiveView }: EnhancedAdminSidebarProps) {
  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      id: "dashboard",
      badge: null,
      description: "Overview & Analytics",
    },
    {
      title: "Students",
      icon: Users,
      id: "students",
      badge: "1,234",
      description: "Manage Students",
    },
    {
      title: "Content Management",
      icon: BookOpen,
      id: "content",
      badge: "24",
      description: "Courses & Materials",
    },
    {
      title: "Quiz Management",
      icon: FileText,
      id: "quizzes",
      badge: "New",
      description: "Create & Monitor",
    },
    {
      title: "Assignments",
      icon: FileText,
      id: "assignments",
      badge: "42",
      description: "Review Submissions",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      id: "analytics",
      badge: null,
      description: "Performance Insights",
    },
    {
      title: "Calendar",
      icon: Calendar,
      id: "calendar",
      badge: null,
      description: "Schedule Events",
    },
    {
      title: "Settings",
      icon: Settings,
      id: "settings",
      badge: null,
      description: "System Config",
    },
  ]

  const stats = [
    { label: "Students", value: "1.2K", icon: UserCheck, color: "text-blue-500" },
    { label: "Courses", value: "24", icon: BookMarked, color: "text-green-500" },
    { label: "Growth", value: "+12%", icon: TrendingUp, color: "text-purple-500" },
  ]

  return (
    <Sidebar className="border-r-0 shadow-lg">
      <SidebarHeader className="border-b bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Admin Portal
            </h1>
            <p className="text-xs text-muted-foreground">Management Dashboard</p>
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
            Administration
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
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25"
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
      </SidebarContent>

      <SidebarFooter className="border-t bg-gradient-to-r from-muted/50 to-muted/30">
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="relative">
              <Avatar className="h-10 w-10 ring-2 ring-red-500/20">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium">
                  AD
                </AvatarFallback>
              </Avatar>
              {/* Online Status Indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@lms.com</p>
            </div>
            <Badge variant="destructive" className="text-xs">
              Admin
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
