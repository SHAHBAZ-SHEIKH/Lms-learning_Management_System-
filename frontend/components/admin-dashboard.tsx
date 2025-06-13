"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BookOpen,
  FileText,
  Home,
  LogOut,
  Plus,
  Settings,
  Shield,
  Users,
  BarChart3,
  Calendar,
  Edit,
  Trash2,
} from "lucide-react"
import { QuizResults } from "./quiz-results"
import { AssignmentSubmissions } from "./assignment-submissions"

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeView, setActiveView] = useState("dashboard")

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

function AdminDashboardContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your LMS platform</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">42 pending review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New student registered: Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Assignment submitted: React Project</p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New content added: JavaScript Advanced</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start">
              <Plus className="w-4 h-4 mr-2" />
              Add New Student
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Create New Subject
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Add Assignment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StudentsManagement() {
  const [students] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", subjects: 6 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", subjects: 4 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Inactive", subjects: 2 },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", status: "Active", subjects: 8 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Students Management</h1>
          <p className="text-muted-foreground">Manage student accounts and progress</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Create a new student account</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Enter student name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter email address" />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter password" />
              </div>
            </div>
            <DialogFooter>
              <Button>Create Student</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <CardDescription>Manage your student database</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subjects</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === "Active" ? "default" : "secondary"}>{student.status}</Badge>
                  </TableCell>
                  <TableCell>{student.subjects}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function ContentManagement() {
  const [subjects] = useState([
    { id: 1, title: "Web Development Fundamentals", lessons: 12, students: 45 },
    { id: 2, title: "React Development", lessons: 8, students: 32 },
    { id: 3, title: "Database Design", lessons: 10, students: 28 },
    { id: 4, title: "JavaScript Advanced", lessons: 15, students: 38 },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground">Manage subjects and learning materials</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
              <DialogDescription>Create a new learning subject</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Subject Title</label>
                <Input placeholder="Enter subject title" />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Enter subject description" />
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Data Science</option>
                  <option>Business</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button>Create Subject</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle>{subject.title}</CardTitle>
              <CardDescription>
                {subject.lessons} lessons • {subject.students} students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Lessons
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function AssignmentsManagement({ setActiveView }: { setActiveView: (view: string) => void }) {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Component Project",
      subject: "React Development",
      dueDate: "2024-01-15",
      submissions: 25,
      fileType: "PDF",
      fileName: "Assignment_Instructions.pdf",
    },
    {
      id: 2,
      title: "Database Schema Design",
      subject: "Database Design",
      dueDate: "2024-01-18",
      submissions: 18,
      fileType: "Link",
      fileName: "https://example.com/db-assignment",
    },
    {
      id: 3,
      title: "API Integration Task",
      subject: "JavaScript Advanced",
      dueDate: "2024-01-20",
      submissions: 30,
      fileType: "PDF",
      fileName: "API_Integration_Guide.pdf",
    },
  ])

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    subject: "",
    description: "",
    type: "PDF Upload",
    file: "",
    dueDate: "",
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateAssignment = () => {
    const assignment = {
      id: assignments.length + 1,
      title: newAssignment.title,
      subject: newAssignment.subject,
      dueDate: newAssignment.dueDate,
      submissions: 0,
      fileType: newAssignment.type === "PDF Upload" ? "PDF" : "Link",
      fileName: newAssignment.file,
    }
    setAssignments([...assignments, assignment])
    setNewAssignment({ title: "", subject: "", description: "", type: "PDF Upload", file: "", dueDate: "" })
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assignments Management</h1>
          <p className="text-muted-foreground">Create and manage student assignments</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Assignment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
              <DialogDescription>Add a new assignment for students</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Assignment Title</label>
                <Input
                  placeholder="Enter assignment title"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAssignment.subject}
                  onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                >
                  <option value="">Select Subject</option>
                  <option>Web Development Fundamentals</option>
                  <option>React Development</option>
                  <option>Database Design</option>
                  <option>JavaScript Advanced</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Enter assignment description"
                  value={newAssignment.description}
                  onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Assignment Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newAssignment.type}
                  onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
                >
                  <option>PDF Upload</option>
                  <option>External Link</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">File/Link</label>
                <Input
                  placeholder="Upload PDF or enter link URL"
                  value={newAssignment.file}
                  onChange={(e) => setNewAssignment({ ...newAssignment, file: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Due Date</label>
                <Input
                  type="datetime-local"
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateAssignment}>Create Assignment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Assignments</CardTitle>
          <CardDescription>Manage student assignments and submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">{assignment.title}</TableCell>
                  <TableCell>{assignment.subject}</TableCell>
                  <TableCell>
                    <Badge variant={assignment.fileType === "PDF" ? "default" : "secondary"}>
                      {assignment.fileType}
                    </Badge>
                  </TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>{assignment.submissions}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setActiveView("assignment-submissions")}>
                        View Submissions
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function AnalyticsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Platform performance and insights</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,156</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Study Time</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2h</div>
            <p className="text-xs text-muted-foreground">Per week per student</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignment Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Average score</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Usage Trends</CardTitle>
          <CardDescription>Student engagement over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Analytics charts would be displayed here
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AdminCalendarContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar Management</h1>
        <p className="text-muted-foreground">Manage schedules and events</p>
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
              <h3 className="font-medium">React Workshop - Batch A</h3>
              <p className="text-sm text-muted-foreground">Today, 2:00 PM - 4:00 PM</p>
            </div>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Assignment Review Session</h3>
              <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM - 12:00 PM</p>
            </div>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AdminSettingsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">Configure platform settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Platform Name</label>
            <Input defaultValue="LMS Portal" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Admin Email</label>
            <Input defaultValue="admin@lms.com" />
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

function QuizManagement({ setActiveView }: { setActiveView: (view: string) => void }) {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: "HTML Fundamentals", questions: 10, password: "html123", duration: 10 },
    { id: 2, title: "CSS Styling", questions: 10, password: "css456", duration: 10 },
    { id: 3, title: "JavaScript Basics", questions: 10, password: "js789", duration: 10 },
  ])

  const [newQuiz, setNewQuiz] = useState({
    title: "",
    type: "HTML",
    questions: 10,
    duration: 30,
    password: "",
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateQuiz = () => {
    const quiz = {
      id: quizzes.length + 1,
      title: newQuiz.title,
      questions: newQuiz.questions,
      password: newQuiz.password,
      duration: newQuiz.duration,
    }
    setQuizzes([...quizzes, quiz])
    setNewQuiz({ title: "", type: "HTML", questions: 10, duration: 30, password: "" })
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Quiz Management</h1>
          <p className="text-muted-foreground">Create and manage student quizzes</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Quiz
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Quiz</DialogTitle>
              <DialogDescription>Add a new quiz topic for students</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Quiz Title</label>
                <Input
                  placeholder="Enter quiz title"
                  value={newQuiz.title}
                  onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Quiz Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={newQuiz.type}
                  onChange={(e) => setNewQuiz({ ...newQuiz, type: e.target.value })}
                >
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>
                  <option>React</option>
                  <option>Node.js</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Number of Questions</label>
                <Input
                  type="number"
                  placeholder="10"
                  min="1"
                  max="50"
                  value={newQuiz.questions}
                  onChange={(e) => setNewQuiz({ ...newQuiz, questions: Number.parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Duration (minutes)</label>
                <Input
                  type="number"
                  placeholder="30"
                  min="5"
                  max="120"
                  value={newQuiz.duration}
                  onChange={(e) => setNewQuiz({ ...newQuiz, duration: Number.parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Quiz Password</label>
                <Input
                  placeholder="Enter password for quiz access"
                  value={newQuiz.password}
                  onChange={(e) => setNewQuiz({ ...newQuiz, password: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateQuiz}>Create Quiz</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>All Quizzes</CardTitle>
            <CardDescription>Manage quiz topics and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizzes.map((quiz) => (
                  <TableRow key={quiz.id}>
                    <TableCell className="font-medium">{quiz.title}</TableCell>
                    <TableCell>{quiz.questions}</TableCell>
                    <TableCell>{quiz.duration} min</TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{quiz.password}</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setActiveView("quiz-results")}>
                          Results
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Total Quizzes:</span>
              <span className="font-semibold">{quizzes.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Attempts:</span>
              <span className="font-semibold">245</span>
            </div>
            <div className="flex justify-between">
              <span>Average Score:</span>
              <span className="font-semibold">78%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
