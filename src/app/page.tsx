import {ImageCarousel} from "@/carousels/image-carousel";
import Image from "next/image";
import { StoryCard } from "@/components/story-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-12">
      <section className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center"></h1>
        <ImageCarousel />
      </section>

      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Stories</h2>
        <div className="space-y-8">
          <StoryCard
            title=" Her World, While Ours Was Missing One"
            content="While Dad worked overseas in the US, Mom became our entire world.
She handled everything—school, meals, even fixing broken toys—with grace.
She never let us feel his absence, only her unshakable presence.
We never missed a hug, a story, or a reason to smile."
        imageSrc="/mom and dad old photo.jpg"
imageAlt="Mountain landscape with hiking trails"
          />

          <StoryCard
            title="Brains Behind the Home"
            content="My mom was a B.Com gold medalist, always top of her class.
Even after excelling academically, she chose to prioritize our upbringing over a career.
Her intelligence shaped how we learned, lived, and loved at home.
Every school project felt like teamwork with a genius."
            imageSrc="/mom kid photo.jpg"
            imageAlt="Underwater scene with coral and fish"
          />
        </div>
      </section>
    </main>
  )
}
