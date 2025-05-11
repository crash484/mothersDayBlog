"use client"

import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AuthorCard } from "./author-card"
import { Home, BookOpen, Book, Mail, X } from "lucide-react"
import { ContactCard } from "@/components/contact-card";
import Link from "next/link"

export function SiteSidebar() {

  const [showContact, setShowContact] = useState(false);


  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <SidebarTrigger className="md:hidden">
          <X className="h-5 w-5" />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#stories">
                    <BookOpen />
                    <span>Stories</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/articles">
                    <Book />
                    <span>Articles</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem >
                <SidebarMenuButton asChild onClick={() => setShowContact(!showContact)}>
                  <a >
                    <Mail />
                    <span>Contact</span>
                  </a>
                </SidebarMenuButton>
                {showContact && <ContactCard />}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* About the Author */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel>About the Author</SidebarGroupLabel>
          <SidebarGroupContent className="px-2 py-4">
            <AuthorCard
              name="Shashwat jain"
              bio="Aspiring developer with a passion for building thoughtful digital experiences and telling meaningful stories through code."
              imageSrc="/me photo.jpg"
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 text-xs text-center text-gray-500">
      </SidebarFooter>
    </Sidebar>
  )
}
