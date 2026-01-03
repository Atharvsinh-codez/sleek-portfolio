import { FC } from 'react'
import { FAQ } from '@/types/blog'

interface BlogContentProps {
  blog: FAQ
}

export const BlogContent: FC<BlogContentProps> = ({ blog }) => {
  return (
    <article className="prose prose-neutral dark:prose-invert prose-headings:font-medium max-w-none">
      <header className="mb-6 sm:mb-8 md:mb-12 not-prose">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4 md:mb-6 break-words">{blog.question}</h1>
      </header>

      <div className="content prose-sm sm:prose-base md:prose-lg">
        <div className="whitespace-pre-wrap leading-relaxed text-neutral-700 dark:text-neutral-300">
          {blog.answer}
        </div>
      </div>
    </article>
  )
}
