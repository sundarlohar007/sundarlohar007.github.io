import { Code2 } from "lucide-react"

interface Project {
  name: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: "Multi-Platform Test Matrix Automation",
    description:
      "Automated test matrix generation across PC, console, and mobile platforms with CI integration. Reduces manual effort by 60% by dynamically generating platform-specific test combinations based on build metadata and feature flags.",
    tags: ["Python", "CI/CD", "Test Automation", "Cross-Platform"],
  },
  {
    name: "Live Service QA Dashboard",
    description:
      "Real-time dashboards for tracking live service health, bug trends, and regression coverage. Integrates with JIRA and TeamCity to provide actionable insights for QA leads and production teams during live operations.",
    tags: ["Dashboard", "JIRA API", "Data Viz", "Real-Time"],
  },
  {
    name: "Dev QA Bridge Framework",
    description:
      "Streamlined communication framework between QA and development teams that reduced bug resolution time by 35%. Standardized reporting templates, escalation paths, and triage workflows for more efficient collaboration.",
    tags: ["Workflow", "Process", "Communication", "Efficiency"],
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
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-6 transition-all hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Code2 className="size-5 text-blue-400" />
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
