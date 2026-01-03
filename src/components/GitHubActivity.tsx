'use client'

import { useEffect, useState } from 'react'

interface ContributionDay {
    date: string
    count: number
    level: number
}

interface ContributionWeek {
    contributionDays: ContributionDay[]
}

interface GitHubActivityProps {
    username?: string
}

export default function GitHubActivity({ username = 'Atharvsinh-codez' }: GitHubActivityProps) {
    const [contributions, setContributions] = useState<ContributionWeek[]>([])
    const [totalContributions, setTotalContributions] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                setLoading(true)

                // Fetch contributions for 2025 and 2026
                const [response2025, response2026] = await Promise.all([
                    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=2025`),
                    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=2026`)
                ])

                if (!response2025.ok || !response2026.ok) {
                    throw new Error('Failed to fetch contributions')
                }

                const data2025 = await response2025.json()
                const data2026 = await response2026.json()

                // Combine and filter: Feb 2025 to Jan 2026
                const allContributions: { date: string; count: number; level: number }[] = []

                // Add 2025 contributions from February onwards
                if (data2025.contributions) {
                    data2025.contributions.forEach((day: { date: string; count: number; level: number }) => {
                        const date = new Date(day.date)
                        if (date.getMonth() >= 1) { // February = 1
                            allContributions.push(day)
                        }
                    })
                }

                // Add 2026 contributions (January only, up to current date)
                if (data2026.contributions) {
                    data2026.contributions.forEach((day: { date: string; count: number; level: number }) => {
                        const date = new Date(day.date)
                        if (date.getMonth() === 0) { // January = 0
                            allContributions.push(day)
                        }
                    })
                }

                const weeks: ContributionWeek[] = []
                let currentWeek: ContributionDay[] = []
                let total = 0
                let isFirstDay = true

                allContributions.forEach((day) => {
                    const date = new Date(day.date)
                    const dayOfWeek = date.getDay()

                    // For the first day, pad the week with empty days if it doesn't start on Sunday
                    if (isFirstDay && dayOfWeek !== 0) {
                        for (let i = 0; i < dayOfWeek; i++) {
                            currentWeek.push({
                                date: '',
                                count: 0,
                                level: 0
                            })
                        }
                        isFirstDay = false
                    }
                    isFirstDay = false

                    if (dayOfWeek === 0 && currentWeek.length > 0) {
                        weeks.push({ contributionDays: currentWeek })
                        currentWeek = []
                    }

                    currentWeek.push({
                        date: day.date,
                        count: day.count,
                        level: day.level
                    })

                    total += day.count
                })

                if (currentWeek.length > 0) {
                    weeks.push({ contributionDays: currentWeek })
                }

                setContributions(weeks)
                setTotalContributions(total)
                setError(null)
            } catch (err) {
                setError('Failed to load GitHub activity')
                console.error('Error fetching GitHub contributions:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchContributions()
    }, [username])

    const getContributionColor = (level: number) => {
        const colors = {
            light: [
                'bg-neutral-100',
                'bg-green-200',
                'bg-green-300',
                'bg-green-400',
                'bg-green-600'
            ],
            dark: [
                'dark:bg-neutral-800',
                'dark:bg-green-900',
                'dark:bg-green-700',
                'dark:bg-green-500',
                'dark:bg-green-400'
            ]
        }
        return `${colors.light[level]} ${colors.dark[level]}`
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const getMonthLabels = () => {
        if (contributions.length === 0) return []

        const labels: { month: string; position: number }[] = []
        let currentMonth = -1
        let lastLabelPosition = -10 // Ensure first label always shows

        contributions.forEach((week, weekIndex) => {
            // Find a day with a valid date in this week
            const validDay = week.contributionDays.find(day => day.date !== '')
            if (validDay) {
                const date = new Date(validDay.date)
                const month = date.getMonth()

                // Always add the first month, then check spacing for others
                if (currentMonth === -1) {
                    currentMonth = month
                    labels.push({ month: months[month], position: weekIndex })
                    lastLabelPosition = weekIndex
                } else if (month !== currentMonth && weekIndex - lastLabelPosition >= 4) {
                    currentMonth = month
                    labels.push({ month: months[month], position: weekIndex })
                    lastLabelPosition = weekIndex
                } else if (month !== currentMonth) {
                    currentMonth = month
                }
            }
        })

        return labels
    }

    const monthLabels = getMonthLabels()
    const totalWeeks = contributions.length

    if (loading) {
        return (
            <div className="w-full">
                <div className="mb-4">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Featured</p>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-1">GitHub Activity</h3>
                    <div className="h-4 w-40 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6">
                    <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px]">
                        {Array.from({ length: 53 }).map((_, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-[2px]">
                                {Array.from({ length: 7 }).map((_, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className="aspect-square w-full rounded-[2px] bg-neutral-200 dark:bg-neutral-700 animate-pulse"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full">
                <div className="mb-4">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Featured</p>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-1">GitHub Activity</h3>
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <p className="text-neutral-500 dark:text-neutral-400 text-center">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="mb-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Featured</p>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">GitHub Activity</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Total: <span className="font-semibold text-black dark:text-white">{totalContributions.toLocaleString()}</span> contributions
                </p>
            </div>

            <div
                className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 shadow-sm"
                role="img"
                aria-label={`GitHub contribution graph showing ${totalContributions} contributions in the last year`}
            >
                {/* Month labels - responsive positioning */}
                <div className="relative mb-2">
                    <div
                        className="grid text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400"
                        style={{ gridTemplateColumns: `repeat(${totalWeeks || 53}, 1fr)` }}
                    >
                        {monthLabels.map((label, index) => (
                            <div
                                key={index}
                                className="text-left"
                                style={{ gridColumn: label.position + 1 }}
                            >
                                {label.month}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contribution grid - fits container width */}
                <div
                    className="grid gap-[2px]"
                    style={{ gridTemplateColumns: `repeat(${totalWeeks || 53}, 1fr)` }}
                >
                    {contributions.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-[2px]">
                            {week.contributionDays.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`aspect-square w-full rounded-[2px] transition-colors ${getContributionColor(day.level)}`}
                                    title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}`}
                                    aria-label={`${day.count} contributions on ${day.date}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end mt-4 gap-2 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    <span>Less</span>
                    <div className="flex gap-[2px]">
                        {[0, 1, 2, 3, 4].map((level) => (
                            <div
                                key={level}
                                className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${getContributionColor(level)}`}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}
