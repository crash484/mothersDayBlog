import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AuthorCardProps {
  name: string
  bio: string
  imageSrc: string
}

export function AuthorCard({ name, bio, imageSrc }: AuthorCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {/* Circular profile picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
          <Image
            src={imageSrc || "/placeholder.svg?height=200&width=200&text=Author"}
            alt={`${name}'s profile picture`}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Author name */}
        <h3 className="text-xl font-bold mb-2">{name}</h3>

        {/* Author bio */}
        <p className="text-gray-700 text-sm">{bio}</p>
      </CardContent>
    </Card>
  )
}
