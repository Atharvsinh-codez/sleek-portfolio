import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "agenv",
    title: "AgenV",
    description: "AgenV lets you create limitless, high-quality images with the power of AI. Unleash your creativity and generate visuals in seconds, all without any design skills required.",
    longDescription: "Founder of this project\n\nAgenV lets you create limitless, high-quality images with the power of AI. Unleash your creativity and generate visuals in seconds, all without any design skills required.\n\nWhy Choose AgenV?\n\n• High Quality - Professional-grade images suitable for any project or purpose\n\n• Multiple Styles - Choose from various artistic styles and customize your creations\n\n• Lightning Fast - Generate stunning images in seconds with our optimized AI models",
    liveLink: "https://www.agenv.tech",
    video: "agenv",
    image: "/images/agenv.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "UploadThing",
      "Prisma",
      "Base UI",
      "Tailwind CSS",
      "PostgreSQL",
      "Tanstack Query",
      "Better Auth"
    ],
  },
  {
    id: "typegpt",
    title: "TypeGPT",
    description: "Unified API access to 200+ cutting-edge AI models. Build smarter applications with zero complexity. Access OpenAI, DeepSeek, Qwen, Meta, Mistral, GLM, MiniMax, Kimi and 200+ models through a single, unified API endpoint.",
    longDescription: "Co-Founder, Manager of this project\n\nUnified API access to 200+ cutting-edge AI models. Build smarter applications with zero complexity.\n\nAccess OpenAI, DeepSeek, Qwen, Meta, Mistral, GLM, MiniMax, Kimi and 200+ models through a single, unified API endpoint.\n\nOne API for every AI model.",
    liveLink: "https://typegpt.net",
    video: "typegpt",
    image: "/images/typegpt.png",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "UploadThing",
      "Prisma",
      "Base UI",
      "Tailwind CSS",
      "PostgreSQL",
      "Tanstack Query",
      "Better Auth"
    ],
  },
  {
    id: "codedevs",
    title: "Code Devs",
    description: "AI-powered portfolio generator that automatically creates beautiful developer portfolios from GitHub profiles. Turn your GitHub into a stunning portfolio, powered by AI.",
    longDescription: "Founder of this project\n\nCodeDevs is an AI-powered portfolio generator that automatically creates beautiful developer portfolios from GitHub profiles. It fetches your GitHub data, uses AI to generate professional summaries and highlights, and presents everything in a modern, responsive portfolio website.\n\nFeatures:\n• Automatic Portfolio Generation - Enter any GitHub username and get a fully-featured portfolio instantly\n• AI-Powered Content - Uses Groq AI to generate professional summaries, highlights, and SEO-optimized descriptions\n• GitHub Integration - Fetches profile data, repositories, contribution graphs, and project statistics via GitHub GraphQL API\n• SEO Optimized - Dynamic metadata generation for better search engine visibility\n• Responsive Design - Works perfectly on all devices with dark mode support",
    liveLink: "https://codedevs.dev",
    video: "codedevs",
    image: "/images/codedevs.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Vercel AI SDK",
      "Groq",
      "Neon Database",
      "GitHub GraphQL API"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
