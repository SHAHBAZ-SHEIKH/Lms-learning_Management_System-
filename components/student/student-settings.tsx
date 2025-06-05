"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StudentSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <select className="w-full p-2 border rounded-md">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Time Zone</label>
            <select className="w-full p-2 border rounded-md">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-6 (Central Time)</option>
              <option>UTC-7 (Mountain Time)</option>
              <option>UTC-8 (Pacific Time)</option>
            </select>
          </div>

          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}
