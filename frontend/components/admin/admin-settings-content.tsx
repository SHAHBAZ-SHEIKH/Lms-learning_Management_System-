"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AdminSettingsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">Configure platform settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Platform Name</label>
            <Input defaultValue="LMS Portal" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Admin Email</label>
            <Input defaultValue="admin@lms.com" />
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
