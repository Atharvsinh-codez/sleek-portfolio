'use client'

import Image from 'next/image'

interface CallToActionProps {
  profileImage?: string
  profileAlt?: string
  linkText?: string
  linkUrl?: string
  preText?: string
}

export default function CallToAction({
  profileImage = "/pfp.jpg",
  profileAlt = "Profile",
  linkText = "Book a Free Call",
  linkUrl = "https://cal.com/atharvsinh/15min",
  preText = "If you've read this far, you might be interested in what I do."
}: CallToActionProps) {

  return (
    <div className="mt-4 sm:mt-6 pb-6 sm:pb-8 flex flex-col items-center w-full">
      <p className="text-neutral-600 dark:text-neutral-400 font-[family-name:var(--font-instrument-serif)] italic text-base sm:text-xl mb-3 sm:mb-3 text-center">{preText}</p>
      <div className="gradient bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-lg p-[1px] relative overflow-hidden w-auto mt-3 sm:mt-0">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient h-full bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white text-sm sm:text-md px-4 sm:px-6 py-2.5 sm:py-2 w-full flex items-center justify-center transition-all group relative overflow-hidden touch-manipulation active:opacity-75"
          style={{
            '--x': '-90.45457%',
            '--spread': '90deg',
            '--shimmer-color': '#ffffff',
            '--radius': '8px',
            '--speed': '3s',
            '--cut': '0.05em',
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          } as React.CSSProperties}
        >
          {/* Shimmer Effect Layer - Light Mode */}
          <div
            className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500 dark:hidden z-0"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          />
          {/* Shimmer Effect Layer - Dark Mode */}
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 hidden dark:block z-0"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          />

          <div className="flex items-center gap-2 group-hover:gap-6 sm:group-hover:gap-12 transition-all duration-300 relative z-20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0">
              <Image
                alt={profileAlt}
                width={26}
                height={26}
                className="w-full h-full object-cover"
                src={profileImage}
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="flex items-center gap-0 absolute left-[28px] sm:left-[30px] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus w-2 h-2 sm:w-3 sm:h-3"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-900/10 dark:bg-white/10 flex items-center justify-center text-[8px] sm:text-[10px]">
                You
              </div>
            </div>
            <span
              className="whitespace-nowrap relative block text-sm sm:text-base"
              style={{
                maskImage: 'linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.1) calc(var(--x) + 30%), rgba(0,0,0,1) calc(var(--x) + 100%))'
              }}
            >
              {linkText}
            </span>
          </div>
          <span
            className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),transparent_calc(var(--x)+100%))] p-px"
            style={{
              mask: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
            }}
          />
        </a>
      </div>

      {/* Quote Section */}
      <div className="mt-8 sm:mt-10 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 sm:p-8 relative">
        {/* Quote Mark */}
        <div className="absolute top-4 left-4 text-6xl sm:text-7xl text-neutral-200 dark:text-neutral-800 font-serif leading-none select-none">"</div>

        <div className="relative z-10 pt-6 sm:pt-8">
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg italic font-[family-name:var(--font-instrument-serif)] mb-4">
            "Man is made by his belief. As he believes, so he is."
          </p>
          <p className="text-right text-neutral-800 dark:text-neutral-200 font-medium">
            — Bhagavad Gita
          </p>
        </div>
      </div>
    </div>
  )
}
