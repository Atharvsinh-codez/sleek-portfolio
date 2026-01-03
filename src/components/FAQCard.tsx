'use client'

import { FC, useState } from 'react'
import { FAQ } from '@/types/blog'
import { ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQCardProps {
    faq: FAQ
}

export const FAQCard: FC<FAQCardProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <article
                className="group/item cursor-pointer touch-manipulation"
                onClick={() => setIsOpen(true)}
            >
                <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800 transition-opacity duration-300 group-has-hover:opacity-40 group-has-hover:group-hover/item:opacity-100">
                    <div className="col-span-12 lg:col-span-10">
                        <h2 className="text-[15px] leading-7 text-black/80 group-has-hover:hover:text-black dark:text-white/80 dark:group-has-hover:hover:text-white font-medium transition-colors duration-300">
                            {faq.question}
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-2 lg:text-right flex items-center lg:justify-end">
                        <ChevronDown className="w-4 h-4 text-neutral-400 transition-transform duration-300 group-hover/item:translate-y-0.5" />
                    </div>
                </div>
            </article>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Full screen clickable backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 backdrop-blur-md bg-white/30 dark:bg-black/20 z-50"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Modal Card - clicks inside don't close */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-2xl sm:w-full z-50 overflow-hidden rounded-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 max-h-[85vh] overflow-y-auto">
                                {/* Header */}
                                <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-start justify-between gap-4 rounded-t-3xl">
                                    <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white leading-tight">
                                        {faq.question}
                                    </h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="shrink-0 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-neutral-500" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="px-6 py-6">
                                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                                        {faq.answer.split('\n\n').map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
