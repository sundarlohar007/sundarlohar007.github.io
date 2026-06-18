import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section
      id="education"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Background
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-balance">
          Education
        </h2>

        <div className="rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
              <GraduationCap className="size-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-muted-foreground">
                Savitribai Phule Pune University
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Founded a strong foundation in computer science principles,
                software engineering, and problem-solving methodologies that
                underpin a systematic approach to quality assurance and game
                testing.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                2017 – 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
