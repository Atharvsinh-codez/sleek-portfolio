'use client'

import { useEffect, useRef } from 'react'

export function ComingSoonCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const width = canvas.offsetWidth
        const height = canvas.offsetHeight

        // Set canvas size
        const resizeCanvas = () => {
            if (!canvas) return
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Glowing Particle class - Light Green
        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number
            fadeSpeed: number
            glowSize: number

            constructor() {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.size = Math.random() * 2 + 1
                this.glowSize = this.size * 4
                this.speedX = (Math.random() - 0.5) * 0.4
                this.speedY = (Math.random() - 0.5) * 0.4
                this.opacity = Math.random() * 0.6 + 0.4
                this.fadeSpeed = Math.random() * 0.01 + 0.005
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.opacity += this.fadeSpeed

                if (this.opacity >= 1 || this.opacity <= 0.3) {
                    this.fadeSpeed = -this.fadeSpeed
                }

                // Wrap around edges
                if (this.x < 0) this.x = width
                if (this.x > width) this.x = 0
                if (this.y < 0) this.y = height
                if (this.y > height) this.y = 0
            }

            draw() {
                if (!ctx) return

                // Draw glow - Light Green
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.glowSize
                )
                gradient.addColorStop(0, `rgba(134, 239, 172, ${this.opacity * 0.6})`)
                gradient.addColorStop(0.5, `rgba(74, 222, 128, ${this.opacity * 0.3})`)
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

                ctx.beginPath()
                ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                // Draw core - Light Green
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(74, 222, 128, ${this.opacity})`
                ctx.fill()
            }
        }

        // Create particles
        const particles: Particle[] = []
        const particleCount = 25

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        let animationId: number
        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            animationId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div className="flex flex-col">
            {/* Card with particles */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-100 border border-neutral-200 aspect-[4/3] flex flex-col items-center justify-center cursor-default">
                {/* Particle canvas with glow */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Content inside card */}
                <div className="relative z-10 text-center px-6">
                    <p className="text-sm text-neutral-500">
                        Stay tuned...
                    </p>
                </div>
            </div>

            {/* Project title under card */}
            <div className="mt-3 px-1">
                <h3 className="text-base font-medium text-black dark:text-white">
                    Something is Cooking!
                </h3>
            </div>
        </div>
    )
}
