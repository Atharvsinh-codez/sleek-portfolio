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
      <div className="flex items-center gap-1.5 opacity-50">
        <FaGithub className="w-4 h-4 text-neutral-500" />
        <span className="text-sm text-neutral-500">...</span>
      </div>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://github.com/Atharvsinh-codez/sleek-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-200"
        >
          <FaGithub className="w-4 h-4" />
          <span className="text-sm font-medium">{starCount}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-sm font-medium">
        {starCount} stars
      </TooltipContent>
    </Tooltip>
  )
}
