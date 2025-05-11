"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
        <Menu className="h-6 w-6" />
        </SidebarTrigger>
        <h1 className="text-xl font-bold">Travel Adventures</h1>
      </div>
      <div>
        <Button variant="outline" size="sm">
        Subscribe
        </Button>
      </div>
    </header>
  )
}
