import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { SiteSidebar } from "@/components/site-sidebar"
import { Children } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MothersDay Blog",
  description: "A blog about my mom",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
             <div className="flex min-h-screen w-full">
              <SiteSidebar />
              <SidebarInset className="flex-1 flex flex-col">
                <header className="border-b p-4 flex items-center">
                  <SidebarTrigger className="mr-4" />
                  <h1 className="text-xl font-bold">menu</h1>
                </header>
                <main className="flex-1 p-4">
                  {children}
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
