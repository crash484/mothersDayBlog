import { notFound } from "next/navigation"
import stories from "@/data/stories.json"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const id = parseInt(params.id)
  const story = stories[id - 1] // because JSON is 0-indexed and the URLs are 1-based

  if (!story) return notFound()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={story.image} alt={story.title} className="w-full h-auto mb-4 rounded-xl" />
      <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">By {story.author}</p>
      <p className="text-lg leading-relaxed whitespace-pre-line">{story.longStory}</p>
    </div>
  )
}
