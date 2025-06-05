"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Camera,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react"

interface SignupFormProps {
  onSignup: (userData: any) => void
  onSwitchToLogin: () => void
}

export function SignupForm({ onSignup, onSwitchToLogin }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "",
    password: "",
    image: null,
  })
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement

    if (files && name === "image") {
      const file = files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setPreviewUrl(result)
          setFormData((prev) => ({ ...prev, image: file }))
        }
        reader.readAsDataURL(file)
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      onSignup(formData)
      setIsLoading(false)
    }, 2000)
  }

  const features = [
    "Interactive Learning Platform",
    "Real-time Quiz System",
    "Assignment Management",
    "Progress Tracking",
    "Campus-wide Collaboration",
    "24/7 Learning Support",
  ]

  const campuses = ["Main Campus", "North Campus", "South Campus", "East Campus", "West Campus", "Online Campus"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 float-animation"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative z-10">
        <Card className="max-w-md w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our LMS
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Start your learning journey with thousands of students
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Image Upload */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div
                    className="w-28 h-28 rounded-3xl border-4 border-gray-200 overflow-hidden cursor-pointer hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl"
                    onClick={() => document.getElementById("image")?.click()}
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <User className="h-10 w-10 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="pl-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="pl-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="pl-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Campus Field */}
                <div>
                  <Label htmlFor="campus" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Campus
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="campus"
                      name="campus"
                      value={formData.campus}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select your campus</option>
                      {campuses.map((campus) => (
                        <option key={campus} value={campus}>
                          {campus}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="pl-12 pr-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>

              {/* Login Link */}
              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Sign In
                </button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 items-center justify-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <BookOpen className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-32 right-20">
            <Users className="h-12 w-12 text-white" />
          </div>
          <div className="absolute bottom-32 left-20">
            <Award className="h-14 w-14 text-white" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
        </div>

        <div className="max-w-md text-white relative z-10">
          <h2 className="text-4xl font-bold mb-8 leading-tight">Transform Your Learning Experience</h2>

          <div className="space-y-5 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                </div>
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⭐</span>
              </div>
              <div>
                <p className="font-semibold text-lg">4.9/5 Rating</p>
                <p className="text-sm opacity-80">From 10,000+ Students</p>
              </div>
            </div>
            <p className="text-lg italic leading-relaxed">
              "This LMS platform has completely revolutionized how I learn. The interactive quizzes and real-time
              feedback make studying engaging and effective!"
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Alex Johnson</p>
                <p className="text-sm opacity-80">Computer Science Student</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1K+</div>
              <div className="text-sm opacity-80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
