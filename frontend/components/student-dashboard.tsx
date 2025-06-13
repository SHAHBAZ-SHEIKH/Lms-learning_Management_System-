"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
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
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  LogOut,
  Settings,
  Trophy,
  User,
  Clock,
  CheckCircle,
} from "lucide-react"

interface StudentDashboardProps {
  onLogout: () => void
}

interface QuizCardProps {
  title: string
  description: string
  duration: string
  questions: number
  quizType: string
}

export function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeView, setActiveView] = useState("dashboard")

  const menuItems = [
    { title: "Dashboard", icon: Home, id: "dashboard" },
    { title: "Quizzes", icon: BookOpen, id: "quizzes" },
    { title: "Assignments", icon: FileText, id: "assignments" },
    { title: "Calendar", icon: Calendar, id: "calendar" },
    { title: "Achievements", icon: Trophy, id: "achievements" },
    { title: "Profile", icon: User, id: "profile" },
    { title: "Settings", icon: Settings, id: "settings" },
  ]

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardContent />
      case "quizzes":
        return <QuizzesContent />
      case "assignments":
        return <AssignmentsContent />
      case "calendar":
        return <CalendarContent />
      case "achievements":
        return <AchievementsContent />
      case "profile":
        return <ProfileContent />
      case "settings":
        return <SettingsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LMS Portal
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                    <DropdownMenuItem onClick={() => setActiveView("profile")}>
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
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

function DashboardContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's what's happening with your learning today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Badges earned</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed: Introduction to React</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Started: Advanced JavaScript</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Assignment Due: Database Design</p>
                <p className="text-xs text-muted-foreground">Tomorrow</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Your current subject progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Web Development</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Data Science</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Mobile Development</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function LearningContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Learning</h1>
        <p className="text-muted-foreground">Continue your learning journey</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Web Development Fundamentals</CardTitle>
            <CardDescription>Learn HTML, CSS, and JavaScript basics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={75} />
              <div className="flex justify-between text-sm">
                <span>Progress: 75%</span>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <Button className="w-full">Continue Learning</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>React Development</CardTitle>
            <CardDescription>Build modern web applications with React</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={30} />
              <div className="flex justify-between text-sm">
                <span>Progress: 30%</span>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <Button className="w-full">Continue Learning</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Database Design</CardTitle>
            <CardDescription>Learn SQL and database fundamentals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={100} />
              <div className="flex justify-between text-sm">
                <span>Progress: 100%</span>
                <Badge variant="default">Completed</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AssignmentsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Assignments</h1>
        <p className="text-muted-foreground">View and submit your assignments</p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>React Component Project</span>
              <Badge variant="destructive">Due Tomorrow</Badge>
            </CardTitle>
            <CardDescription>Create a responsive dashboard component using React and Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="text-blue-600 hover:underline">
                  Assignment_Instructions.pdf
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Deadline: January 15, 2024 at 11:59 PM</p>
                <p>Subject: Web Development</p>
              </div>
              <Button>Submit Assignment</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Database Schema Design</span>
              <Badge variant="secondary">Due in 3 days</Badge>
            </CardTitle>
            <CardDescription>Design a normalized database schema for an e-commerce application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <a href="#" className="text-blue-600 hover:underline">
                  Database_Project_Guidelines.pdf
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Deadline: January 18, 2024 at 11:59 PM</p>
                <p>Subject: Database Design</p>
              </div>
              <Button variant="outline">Start Assignment</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>API Integration Task</span>
              <Badge variant="default">Submitted</Badge>
            </CardTitle>
            <CardDescription>Integrate a REST API into a React application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span className="text-muted-foreground">API_Integration_Guide.pdf</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Submitted: January 10, 2024 at 3:45 PM</p>
                <p>Subject: Advanced JavaScript</p>
              </div>
              <Button variant="outline">View Feedback</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CalendarContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">View your upcoming classes and deadlines</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">React Workshop</h3>
              <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Assignment Due: Database Project</h3>
              <p className="text-sm text-muted-foreground">Tomorrow, 11:59 PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">JavaScript Advanced Concepts</h3>
              <p className="text-sm text-muted-foreground">Friday, 10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AchievementsContent() {
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

function ProfileContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-muted-foreground">john.doe@example.com</p>
              <Button variant="outline" size="sm" className="mt-2">
                Change Photo
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <Input defaultValue="John" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <Input defaultValue="Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input defaultValue="+1 (555) 123-4567" />
            </div>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <select className="w-full p-2 border rounded-md">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Time Zone</label>
            <select className="w-full p-2 border rounded-md">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-6 (Central Time)</option>
              <option>UTC-7 (Mountain Time)</option>
              <option>UTC-8 (Pacific Time)</option>
            </select>
          </div>

          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}

import { QuizCard as QuizCardComponent } from "./quiz-card"

function QuizzesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground">Test your knowledge with interactive quizzes</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QuizCardComponent
          title="HTML Fundamentals"
          description="Test your HTML knowledge with 10 questions"
          duration="10 minutes"
          questions={10}
          quizType="html"
        />

        <QuizCardComponent
          title="CSS Styling"
          description="Challenge yourself with 10 CSS questions"
          duration="10 minutes"
          questions={10}
          quizType="css"
        />

        <QuizCardComponent
          title="JavaScript Basics"
          description="Evaluate your JavaScript skills with 10 questions"
          duration="10 minutes"
          questions={10}
          quizType="javascript"
        />
      </div>
    </div>
  )
}
