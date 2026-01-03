import { FC } from 'react'
import { FAQ } from '@/types/blog'
import Link from 'next/link'

interface BlogCardProps {
  blog: FAQ
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="block w-full touch-manipulation active:opacity-75"
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <article className="group/item cursor-pointer touch-manipulation">
        <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
          <div className="col-span-12">
            <h2 className="text-[15px] leading-7 text-black/80 group-has-hover:hover:text-black dark:text-white/80 dark:group-has-hover:hover:text-white font-medium transition-colors duration-300">
              {blog.question}
            </h2>
          </div>
        </div>
      </article>
    </Link>
  )
}
