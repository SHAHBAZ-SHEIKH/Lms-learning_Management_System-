"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GraduationCap, Mail } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  // const handleGitHubSignUp = async () => {
  //   setIsLoading("github")
  //   try {
  //     // Add your GitHub OAuth logic here
  //     console.log("Signing up with GitHub...")
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //   } catch (error) {
  //     console.error("GitHub signup failed:", error)
  //   } finally {
  //     setIsLoading(null)
  //   }
  // }

  async function handleOAuth(provider: string): Promise<void> {
    setIsLoading(provider)
    try {
      const a = await signIn(provider, { callbackUrl: "/dashboard" })
      console.log(a)
    } catch (err) {
      console.error(`OAuth error (${provider}):`, err)
    } finally {
      setIsLoading(null)
    }
  }

  // const handleAuth = async (oAuth: string) => {
  //   setIsLoading(oAuth)
  //   try {
  //     // Add your OAuth logic here
  //     console.log(`Signing up with ${oAuth}...`)
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //   } catch (error) {
  //     console.error(`${oAuth} signup failed:`, error)
  //   } finally {
  //     setIsLoading(null)
  //   }
  // }

  // const handleGoogleSignUp = async () => {
  //   setIsLoading("google")
  //   try {
  //     // Add your Google OAuth logic here
  //     console.log("Signing up with Google...")
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //   } catch (error) {
  //     console.error("Google signup failed:", error)
  //   } finally {
  //     setIsLoading(null)
  //   }
  // }

  return (
    <Card className="max-w-md w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
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

      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">Choose your preferred method to create an account</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            type="button"
            className="w-full h-12 text-base font-medium hover:bg-gray-50 transition-colors bg-transparent"
            onClick={() => handleOAuth("github")}
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
            onClick={() => handleOAuth("github")}
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
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
