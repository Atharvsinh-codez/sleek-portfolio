'use client'

import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function PortfolioStars() {
  const [starCount, setStarCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('/api/github-stars?owner=Atharvsinh-codez&repo=sleek-portfolio')
        const data = await response.json()

        if (data.success) {
          setStarCount(data.stars)
        }
      } catch (error) {
        console.error('Failed to fetch star count:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [])

  if (loading) {
    return (
      <div className="h-8 w-16 bg-neutral-100 dark:bg-neutral-800 rounded-full animate-pulse" />
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://github.com/Atharvsinh-codez/sleek-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 text-sm font-medium border border-neutral-200 dark:border-neutral-700 transition-all duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700"
        >
          <FaGithub className="w-4 h-4" />
          <span>{starCount}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-sm font-medium">
        {starCount} stars
      </TooltipContent>
    </Tooltip>
  )
}
