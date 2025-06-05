"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, FileText, Home, LogOut, Settings, Shield, Users, BarChart3, Calendar } from "lucide-react"

interface AdminSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
  onLogout: () => void
}

export function AdminSidebar({ activeView, setActiveView, onLogout }: AdminSidebarProps) {
  const menuItems = [
    { title: "Dashboard", icon: Home, id: "dashboard" },
    { title: "Students", icon: Users, id: "students" },
    { title: "Content Management", icon: BookOpen, id: "content" },
    { title: "Quiz Management", icon: FileText, id: "quizzes" },
    { title: "Assignments", icon: FileText, id: "assignments" },
    { title: "Analytics", icon: BarChart3, id: "analytics" },
    { title: "Calendar", icon: Calendar, id: "calendar" },
    { title: "Settings", icon: Settings, id: "settings" },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Admin Portal
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => setActiveView(item.id)} isActive={activeView === item.id}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span>Admin User</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem onClick={() => setActiveView("settings")}>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
