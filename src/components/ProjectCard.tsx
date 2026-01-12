'use client';

import { Project } from '@/types/project'
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { ProjectNavigation } from './ProjectNavigation';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import codedevs from '/videos/codedevs.mp4';
import agenv from '/videos/agenv.mp4';
import typegpt from '/videos/typegpt.mp4';
import obsidianui from '/videos/obsidianui.mp4';

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
  allProjects?: Project[];
}

// Map video IDs to imported video assets
const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'codedevs':
      return codedevs;
    case 'agenv':
      return agenv;
    case 'typegpt':
      return typegpt;
    case 'obsidianui':
      return obsidianui;
    default:
      return null;
  }
};

export const ProjectCard = ({ project, isDetailed = false, allProjects = [] }: ProjectCardProps) => {

  if (!isDetailed) {
    return (
      <Link
        href={`/projects/${project.id}`}
        className="group block touch-manipulation active:opacity-75"
        style={{
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <div className="py-2 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 border-b border-neutral-600 dark:border-neutral-500 transition-all duration-300 group-hover:border-neutral-400 dark:group-hover:border-neutral-400 group-hover:pl-2">
          <span className="inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
            {project.title}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="w-full max-w-none px-4 sm:px-0">
      <header className="mb-6 sm:mb-8">
        <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {project.isNew && (
              <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shrink-0">
                New
              </span>
            )}
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium wrap-break-word">{project.title}</h1>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-1.5 rounded-full hover:opacity-70 touch-manipulation active:opacity-75"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FiArrowUpRight className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  View live site
                </TooltipContent>
              </Tooltip>
            )}
            {project.githubLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-1.5 rounded-full hover:opacity-70 touch-manipulation active:opacity-75"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaGithub className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  View on GitHub
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-100 border-2 border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Media Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        {project.video && getVideoSource(project.video) ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <Video
              src={getVideoSource(project.video)!}
              poster={project.image}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        ) : project.image && (
          <div className="w-full aspect-4/3 relative rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
              quality={95}
              priority
            />
          </div>
        )}
      </div>

      {/* Content Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {project.longDescription ? (
              project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-600 dark:text-neutral-400 mb-4 last:mb-0">
                  {paragraph}
                  {index === 0 && project.tweetUrl && (
                    <>
                      {' '}
                      <Link
                        href={project.tweetUrl}
                        target="_blank"
                        className="text-cyan-500 dark:text-cyan-600 hover:underline touch-manipulation active:opacity-75"
                        style={{
                          WebkitTapHighlightColor: 'transparent',
                          WebkitTouchCallout: 'none',
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        }}
                      >
                        you can view the tweet here
                      </Link>
                    </>
                  )}
                </p>
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
                {project.tweetUrl && (
                  <>
                    {' '}
                    <Link
                      href={project.tweetUrl}
                      target="_blank"
                      className="text-cyan-500 dark:text-cyan-600 hover:underline touch-manipulation active:opacity-75"
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none'
                      }}
                    >
                      you can view the tweet here
                    </Link>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {isDetailed && allProjects.length > 0 && (
        <ProjectNavigation currentProject={project} allProjects={allProjects} />
      )}
    </article>
  );
};
