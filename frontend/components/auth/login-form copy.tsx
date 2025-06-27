"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { GraduationCap, Eye, EyeOff, Github, Mail } from "lucide-react"
import { z } from "zod"
import { loginFormSchema } from "@/lib/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import Link from "next/link"

type FormValues = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: ""
    },
    mode: "onChange"
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    // handle signup here
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <FormField
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
                />
                <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="relative text-center text-sm">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border"></span>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
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
                    Don't have an account? <Link href="/auth/register" className="text-blue-600 underline">Register</Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}
