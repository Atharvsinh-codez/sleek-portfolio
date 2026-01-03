import { getBlogById } from '@/data/blogs'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import BlogPostClient from '@/components/BlogPostClient'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const blog = getBlogById(id)

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${blog.question} | Atharvsinh Jadav`,
    description: blog.answer.substring(0, 150),
    openGraph: {
      title: blog.question,
      description: blog.answer.substring(0, 150),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.question,
      description: blog.answer.substring(0, 150),
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const blog = getBlogById(id)

  if (!blog) {
    notFound()
  }

  return <BlogPostClient blog={blog} />
}
