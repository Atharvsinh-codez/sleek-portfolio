'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import OpenSourceContributionsCard from './ContributionCard'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { projects } from '@/data/projects'
import { MasonryProjectCard } from './MasonryProjectCard'
import { faqs } from '@/data/blogs'
import { FAQCard } from './FAQCard'
import GitHubActivity from './GitHubActivity'
import AboutMe from './AboutMe'
import SpotifyPlayer from './SpotifyPlayer'
import { ComingSoonCard } from './ComingSoonCard'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection
              bannerImage="/banner.jpg"
              quote="You make your own luck if you stay at it long enough."
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Atharvsinh Jadav"
              age="15"
              title="Developer • Builder • Web Dev"
              profileImage="/pfp.jpg"
              socialLinks={{
                twitter: "https://x.com/athrix_codes",
                github: "https://github.com/Atharvsinh-codez",
                linkedin: "https://www.linkedin.com/in/atharvsinh-jadav/",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-4 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                  </ContentParagraph>

                  {/* Spotify Player */}
                  <div className="mt-4 sm:mt-6 px-2 sm:px-0">
                    <SpotifyPlayer />
                  </div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4 font-[family-name:var(--font-instrument-serif)]">Professional Experience</h2>
                  <div className="px-4">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-4" />
              </Reveal>

              {/* Projects / Works */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Projects / Works</h2>
                  </div>
                  <div className="px-4">
                    <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 group">
                      {projects.slice(0, 6).map((project) => (
                        <MasonryProjectCard key={project.id} project={project} />
                      ))}
                      <ComingSoonCard />
                    </div>
                  </div>
                  <div className="px-4 flex justify-end mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <Link
                      href="/projects"
                      className="text-xs sm:text-sm text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors inline-flex items-center gap-1"
                    >
                      View All
                      <span>→</span>
                    </Link>
                  </div>

                  {/* About Me Section */}
                  <div className="px-4 mt-8 sm:mt-10 mb-8 sm:mb-10">
                    <AboutMe />
                  </div>

                  {/* GitHub Activity Heatmap */}
                  <div className="px-4 mb-4 sm:mb-6">
                    <GitHubActivity username="Atharvsinh-codez" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Thoughts Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Thoughts</h2>
                  </div>
                  <div className="px-4">
                    <div className="space-y-0 group">
                      {faqs.map((faq) => (
                        <FAQCard key={faq.id} faq={faq} />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>


              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <CallToAction />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
