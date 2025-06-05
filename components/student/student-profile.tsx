"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function StudentProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-muted-foreground">john.doe@example.com</p>
              <Button variant="outline" size="sm" className="mt-2">
                Change Photo
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <Input defaultValue="John" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <Input defaultValue="Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input defaultValue="+1 (555) 123-4567" />
            </div>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
