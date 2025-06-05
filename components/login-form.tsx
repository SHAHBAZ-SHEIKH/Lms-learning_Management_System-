"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Shield, Mail, Lock, Eye, EyeOff, BookOpen, Users, Award } from "lucide-react"

interface LoginFormProps {
  onLogin: (role: "student" | "admin") => void
  onSwitchToSignup: () => void
}

export function LoginForm({ onLogin, onSwitchToSignup }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (role: "student" | "admin") => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      onLogin(role)
      setIsLoading(false)
    }, 1500)
  }

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
      </div>

      {/* Left Side - Features */}
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
        </div>

        <div className="max-w-md text-white relative z-10">
          <h2 className="text-4xl font-bold mb-8 leading-tight">Welcome Back to Your Learning Journey</h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Interactive Learning</h3>
                <p className="text-sm opacity-80">Engage with dynamic content and quizzes</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Collaborative Environment</h3>
                <p className="text-sm opacity-80">Connect with peers and instructors</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Track Progress</h3>
                <p className="text-sm opacity-80">Monitor your learning achievements</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1K+</div>
              <div className="text-sm opacity-80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative z-10">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Sign in to access your learning dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-xl p-1">
                <TabsTrigger
                  value="student"
                  className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <GraduationCap className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="student-email" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="student@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="student-password" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="student-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-12 pr-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
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

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => handleSubmit("student")}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    "Login as Student"
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Admin Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="admin-password" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Admin Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-12 pr-12 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
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

                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => handleSubmit("admin")}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    "Login as Admin"
                  )}
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={onSwitchToSignup}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
