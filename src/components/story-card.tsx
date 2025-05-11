"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface StoryCardProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
}

export function StoryCard({ title, content, imageSrc, imageAlt }: StoryCardProps) {
  return (
    <Card className="overflow-hidden" id="stories">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image (left half on desktop, full width on mobile) */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
            />
          </div>

          {/* Content (right half on desktop, below image on mobile) */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-700">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}