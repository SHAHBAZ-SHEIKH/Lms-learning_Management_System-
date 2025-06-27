"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { GraduationCap, Github, Mail } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import Link from "next/link"

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type FormValues = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  })

  const onEmailSubmit = async (values: FormValues) => {
    setIsLoading("email")
    try {
      console.log("Email login:", values)
      // Add your email login logic here (e.g., send magic link)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error("Email login failed:", error)
    } finally {
      setIsLoading(null)
    }
  }

  const handleGitHubLogin = async () => {
    setIsLoading("github")
    try {
      console.log("Logging in with GitHub...")
      // Add your GitHub OAuth logic here
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error("GitHub login failed:", error)
    } finally {
      setIsLoading(null)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading("google")
    try {
      console.log("Logging in with Google...")
      // Add your Google OAuth logic here
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error("Google login failed:", error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
          <GraduationCap className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          Enter your email or choose a social login method
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" className="h-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              disabled={isLoading !== null}
            >
              {isLoading === "email" ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending Magic Link...
                </div>
              ) : (
                "Continue with Email"
              )}
            </Button>
          </form>
        </Form>

        <div className="relative text-center text-sm">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            type="button"
            className="w-full h-12 text-base font-medium hover:bg-gray-50 transition-colors bg-transparent"
            onClick={handleGitHubLogin}
            disabled={isLoading !== null}
          >
            {isLoading === "github" ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                Connecting...
              </div>
            ) : (
              <>
                <Github className="mr-3 h-5 w-5" />
                Continue with GitHub
              </>
            )}
          </Button>

          <Button
            variant="outline"
            type="button"
            className="w-full h-12 text-base font-medium hover:bg-gray-50 transition-colors bg-transparent"
            onClick={handleGoogleLogin}
            disabled={isLoading !== null}
          >
            {isLoading === "google" ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                Connecting...
              </div>
            ) : (
              <>
                <Mail className="mr-3 h-5 w-5" />
                Continue with Google
              </>
            )}
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">We'll send you a magic link to sign in without a password</p>
        </div>
      </CardContent>
    </Card>
  )
}
