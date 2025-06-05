"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"

export default function Home() {
  const router = useRouter()
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      const user = JSON.parse(userData)
      if (user.role === "admin") {
        router.push("/admin")
      } else if (user.role === "student") {
        router.push("/student")
      }
    }
  }, [router])

  const handleLogin = (role: "student" | "admin") => {
    const userData = { role, loginTime: new Date().toISOString() }
    localStorage.setItem("user", JSON.stringify(userData))

    if (role === "admin") {
      router.push("/admin")
    } else {
      router.push("/student")
    }
  }

  const handleSignup = (userData: any) => {
    console.log("User signed up:", userData)
    // In a real app, you would send this data to your backend
    const user = { role: "student", loginTime: new Date().toISOString() }
    localStorage.setItem("user", JSON.stringify(user))
    router.push("/student")
  }

  if (showSignup) {
    return <SignupForm onSignup={handleSignup} onSwitchToLogin={() => setShowSignup(false)} />
  }

  return <LoginForm onLogin={handleLogin} onSwitchToSignup={() => setShowSignup(true)} />
}
