"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "/mom photo1.jpg",
  "/mom and dad recent photo.jpg",
  "/mom photo 4.jpg",
  "/mom pic2.jpg"
]

export function ImageCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel className="w-full">
        <CarouselContent>
        {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <Image
                    src={src}
                    width={600}
                    height={400}
                    alt={`Slide ${index + 1}`}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}
