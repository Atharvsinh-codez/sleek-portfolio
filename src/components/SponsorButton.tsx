'use client'

import Link from 'next/link'
import { Heart} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShimmeringText } from './shimmering-text'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SponsorButtonProps {
  href: string
  tooltipText?: string
}

export default function SponsorButton({ 
  href, 
  tooltipText = "Support my open source work" 
}: SponsorButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium transition-all hover:bg-zinc-800/90 hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heart className="w-4 h-4 fill-current text-red-500" />
            <ShimmeringText text="Become a Sponsor" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  )
}

