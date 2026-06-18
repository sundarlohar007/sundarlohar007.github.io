import { Code2 } from "lucide-react"

interface Project {
  name: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: "QADeviceTool",
    description:
      "Unified Windows desktop utility for Android and iOS device QA: log capture, build installation, file exploration, and app management in one place, built on ADB, scrcpy, and libimobiledevice. In studio-wide use at Ubisoft Pune.",
    tags: ["ADB", "scrcpy", "libimobiledevice", "Windows"],
  },
  {
    name: "Benchify",
    description:
      "Open-source mobile game performance benchmarking tool in active development. A free alternative to GameBench built entirely on open-source components for measuring FPS, memory, and CPU usage.",
    tags: ["Open Source", "Benchmarking", "Mobile", "Performance"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Portfolio
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-balance">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-6 transition-all hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Code2 className="size-5 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                {project.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
