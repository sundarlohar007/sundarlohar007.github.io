"use client"

import { useEffect, useRef, useState } from "react"
interface StatProps {
  end: number
  suffix: string
  label: string
}

function AnimatedCounter({ end, suffix, label }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const step = Math.ceil(end / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-8 text-center"
    >
      <div className="mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

const stats = [
  { end: 30, suffix: "+", label: "Shipped Titles" },
  { end: 7, suffix: "+", label: "Years at Ubisoft" },
  { end: 6, suffix: "", label: "Platforms" },
  { end: 100, suffix: "+", label: "Defects / Title" },
]

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
