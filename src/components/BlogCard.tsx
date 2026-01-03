import { FC } from 'react'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const CardContent = () => (
    <article className="group/item cursor-pointer touch-manipulation">
      {/* Swiss Design Grid Layout */}
      <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
        
        {/* Title - Takes up most of the grid */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-[15px] leading-7 text-black/80 group-has-hover:hover:text-black dark:text-white/80 dark:group-has-hover:hover:text-white font-medium transition-colors duration-300">
            {blog.title}
          </h2>
        </div>

        {/* Metadata - Right aligned, minimal */}
        <div className="col-span-12 lg:col-span-4 lg:text-right">
          <div className="flex lg:justify-end gap-4 text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
            <span>{blog.readTime}</span>
          </div>
        </div>

      </div>
    </article>
  )

  return (
    <a 
      href={blog.externalUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full touch-manipulation active:opacity-75"
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <CardContent />
    </a>
  )
}
