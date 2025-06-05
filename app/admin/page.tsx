"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { EnhancedAdminDashboard } from "@/components/admin/enhanced-admin-dashboard"

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ role: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in and has admin role
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      if (parsedUser.role === "admin") {
        setUser(parsedUser)
      } else {
        // If not admin, redirect to login
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <EnhancedAdminDashboard onLogout={handleLogout} />
}
