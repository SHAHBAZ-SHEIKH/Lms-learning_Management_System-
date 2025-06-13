"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Monitor, Palette, Sunset, TreePine, Waves, Zap, Heart, Star } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { name: "light", label: "Light", icon: Sun, color: "bg-white" },
    { name: "dark", label: "Dark", icon: Moon, color: "bg-gray-900" },
    { name: "system", label: "System", icon: Monitor, color: "bg-gradient-to-r from-gray-100 to-gray-900" },
    { name: "blue", label: "Ocean Blue", icon: Waves, color: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "purple", label: "Purple Magic", icon: Star, color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { name: "green", label: "Forest Green", icon: TreePine, color: "bg-gradient-to-r from-green-400 to-green-600" },
    { name: "orange", label: "Sunset Orange", icon: Sunset, color: "bg-gradient-to-r from-orange-400 to-orange-600" },
    { name: "pink", label: "Pink Love", icon: Heart, color: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { name: "yellow", label: "Electric Yellow", icon: Zap, color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <h4 className="font-medium text-sm mb-2">Choose Theme</h4>
          <div className="grid grid-cols-1 gap-1">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon
              return (
                <DropdownMenuItem
                  key={themeOption.name}
                  onClick={() => setTheme(themeOption.name)}
                  className={`flex items-center gap-3 p-2 cursor-pointer rounded-md ${
                    theme === themeOption.name ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${themeOption.color} flex items-center justify-center`}>
                    <Icon className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm">{themeOption.label}</span>
                  {theme === themeOption.name && <div className="ml-auto w-2 h-2 bg-primary rounded-full" />}
                </DropdownMenuItem>
              )
            })}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { name: "light", label: "Light Mode", preview: "bg-white border-gray-200" },
    { name: "dark", label: "Dark Mode", preview: "bg-gray-900 border-gray-700" },
    { name: "blue", label: "Ocean Blue", preview: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200" },
    {
      name: "purple",
      label: "Purple Magic",
      preview: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    },
    { name: "green", label: "Forest Green", preview: "bg-gradient-to-br from-green-50 to-green-100 border-green-200" },
    {
      name: "orange",
      label: "Sunset Orange",
      preview: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
    },
    { name: "pink", label: "Pink Love", preview: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200" },
    {
      name: "yellow",
      label: "Electric Yellow",
      preview: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
    },
  ]

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-50 shadow-lg"
      >
        <Palette className="h-4 w-4 mr-2" />
        Themes
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Theme Customizer</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            ×
          </Button>
        </div>
        <CardDescription>Choose your preferred theme</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {themes.map((themeOption) => (
            <div
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className={`cursor-pointer rounded-lg border-2 p-3 transition-all hover:scale-105 ${
                theme === themeOption.name
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-full h-12 rounded-md ${themeOption.preview} mb-2`} />
              <p className="text-xs font-medium text-center">{themeOption.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
