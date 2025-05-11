// src/app/articles/page.tsx
import Link from "next/link"
import stories from "@/data/stories.json"

export default function ArticlesListPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>
      {stories.map((story, index) => (
        <Link key={index} href={`/articles/${index + 1}`}>
          <div className="border p-4 rounded-lg hover:bg-muted transition mb-4">
            <h2 className="text-xl font-semibold">{story.title}</h2>
            <p className="text-sm text-muted-foreground">By {story.author}</p>
            <p className="mt-2 line-clamp-2">{story.shortStory}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
