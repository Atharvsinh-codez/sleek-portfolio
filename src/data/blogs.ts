import { FAQ } from '@/types/blog'

export const faqs: FAQ[] = [
  {
    id: 'ai-as-tool',
    question: 'How I Use AI as a Tool, Not a Crutch',
    answer: `AI is not my replacement — it's my force multiplier.

I use AI for:
• Exploring approaches
• Writing boilerplate
• Stress-testing ideas

But I never let it:
• Decide architecture blindly
• Hide things I don't understand
• Replace debugging and reasoning

If I can't explain a piece of code in simple words, it doesn't go into production.

Using AI this way helps me move faster without losing control — and keeps my skills sharp.`
  },
  {
    id: 'learning-new-tech',
    question: 'How I Learn New Tech Without Getting Overwhelmed',
    answer: `I don't try to learn everything — I learn just enough to build something real.

Instead of watching endless tutorials, I pick a small problem and start coding immediately. When I get stuck, I learn exactly what's needed to move forward — nothing more.

My rule is simple:
• Build first
• Learn on demand
• Refine after

This keeps learning practical, focused, and sustainable. Over time, small projects compound into real understanding — without burnout.`
  },
  {
    id: 'confusion-to-clarity',
    question: 'How I Turn Confusion Into Clear, Working Systems',
    answer: `Most problems look complicated at first because they're poorly defined, not because they're hard.

When I feel stuck, I slow down and:
• Write the problem in plain English
• Break it into the smallest possible steps
• Solve one piece at a time

Clarity comes from structure.

Once the system makes sense in my head, the code usually follows naturally.

This mindset helps me debug faster, design better systems, and stay calm even when things get messy.`
  }
]

// Alias for blogs page compatibility
export const blogs = faqs

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find(faq => faq.id === id)
}

// Alias for blog pages
export const getBlogById = getFAQById
