"use client"

import { useEffect, useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background/20 dark:bg-background/50 "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          Senior QA Tester
        </div>

        <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Sundar Lohar
        </h1>

        <p className="mb-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          7+ Years at Ubisoft | Multi-Platform QA Specialist
        </p>

        <div className="mb-10 flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          <span>Pune, India</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700"
          >
            Get in Touch
          </Button>
          <a
            href="https://github.com/sundarlohar007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all hover:bg-muted hover:text-foreground"
          >
            View GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-6 text-muted-foreground" aria-hidden="true" />
      </div>
    </section>
  )
}
