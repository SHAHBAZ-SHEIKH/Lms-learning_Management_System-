"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ThemeSwitcher } from "./theme-switcher"
import {
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  GraduationCap,
  Shield,
  ChevronDown,
  Edit,
  CreditCard,
  HelpCircle,
} from "lucide-react"

interface NavbarProps {
  userRole: "student" | "admin"
  userName: string
  userEmail: string
  onProfileClick: () => void
  onSettingsClick: () => void
  onLogout: () => void
  isOnline?: boolean
}

export function Navbar({
  userRole,
  userName,
  userEmail,
  onProfileClick,
  onSettingsClick,
  onLogout,
  isOnline = true,
}: NavbarProps) {
  const [notifications] = useState(3)

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left side - Logo and Role */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                userRole === "admin"
                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                  : "bg-gradient-to-r from-blue-500 to-purple-500"
              }`}
            >
              {userRole === "admin" ? (
                <Shield className="w-5 h-5 text-white" />
              ) : (
                <GraduationCap className="w-5 h-5 text-white" />
              )}
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                LMS Portal
              </h1>
              <Badge variant={userRole === "admin" ? "destructive" : "default"} className="text-xs capitalize">
                {userRole}
              </Badge>
            </div>
          </div>
        </div>

        {/* Center - Search (optional) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, assignments..."
              className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right side - Actions and Profile */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {notifications}
              </Badge>
            )}
          </Button>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 h-auto">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={userName} />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white">
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {/* Online Status Indicator */}
                  {isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full animate-pulse"></div>
                  )}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">{userEmail}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={userName} />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white">
                        {userName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {/* Online Status Indicator in Dropdown */}
                    {isOnline && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">{userEmail}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={userRole === "admin" ? "destructive" : "default"} className="text-xs capitalize">
                        {userRole}
                      </Badge>
                      {isOnline && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={onProfileClick} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>View Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={onProfileClick} className="cursor-pointer">
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={onSettingsClick} className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
