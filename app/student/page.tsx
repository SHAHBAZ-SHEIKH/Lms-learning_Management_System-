"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { EnhancedStudentDashboard } from "@/components/student/enhanced-student-dashboard"

export default function StudentPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ role: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in and has student role
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      if (parsedUser.role === "student") {
        setUser(parsedUser)
      } else {
        // If not student, redirect to login
        router.push("/")
      }
    } else {
      // If no user data, redirect to login
      router.push("/")
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <EnhancedStudentDashboard onLogout={handleLogout} />
}
