"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Github, GraduationCap, Mail } from "lucide-react"
import { RegisterSchema } from "@/lib/schemas"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import Link from "next/link"

const campuses = ["Main Campus", "North Campus", "South Campus", "East Campus", "West Campus", "Online Campus"]
type FormValues = z.infer<typeof RegisterSchema>

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange"
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <CardContent className="space-y-4">
            {/* <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="campus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Campus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Campuses</SelectLabel>
                          {campuses.map((campus) => {
                            return (
                              <SelectItem value={campus} key={campus}>
                                {campus}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="••••••••" type={showPassword ? "text" : "password"} {...field} />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button> */}
            {/* <div className="relative text-center text-sm">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border"></span>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div> */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" type="button" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account? <Link href="/auth/login" className="text-blue-600 underline">Login</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}
