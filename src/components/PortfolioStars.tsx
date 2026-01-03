'use client'

import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'

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
      <div className="flex items-center gap-2">
        <div className="h-7 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <a
      href="https://github.com/Atharvsinh-codez/sleek-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group"
    >
      {/* Dark badge style */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-800 rounded-full text-white text-sm font-medium transition-all duration-200 group-hover:bg-neutral-800 dark:group-hover:bg-neutral-700">
        <span>{starCount} stars</span>
      </div>

      {/* GitHub icon with count */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 text-sm font-medium border border-neutral-200 dark:border-neutral-700 transition-all duration-200 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700">
        <FaGithub className="w-4 h-4" />
        <span>{starCount}</span>
      </div>
    </a>
  )
}
