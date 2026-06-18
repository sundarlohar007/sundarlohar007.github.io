import { MapPin, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Role {
  period: string
  title: string
  company: string
  location: string
  highlights: string[]
  isCurrent?: boolean
}

const roles: Role[] = [
  {
    period: "Jul 2023 - Present",
    title: "Senior Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    isCurrent: true,
    highlights: [
      "Lead QA efforts for AAA cross-platform title releases across PC, console, and mobile",
      "Manage defect triage and prioritization for live service games with millions of players",
      "Collaborate with development teams to streamline bug reporting and resolution workflows",
      "Mentor junior testers on testing methodologies, tools, and console certification requirements",
      "Drive build verification and RC build validation processes for major title updates",
    ],
  },
  {
    period: "Jun 2021 - Jun 2023",
    title: "Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    highlights: [
      "Executed comprehensive manual and exploratory testing across PC, PS4/PS5, Xbox, and Nintendo Switch",
      "Performed multiplayer session testing and live service QA for ongoing title support",
      "Developed and maintained test cases, test matrices, and regression suites using JIRA and Xray",
      "Conducted compatibility testing across multiple hardware configurations and OS environments",
      "Identified and reported critical defects, reducing post-launch patch cycles",
    ],
  },
  {
    period: "Mar 2019 - May 2021",
    title: "Junior Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    highlights: [
      "Performed functional, regression, smoke, and sanity testing on AAA game titles",
      "Tested cross-platform functionality ensuring consistent player experience across all platforms",
      "Documented detailed bug reports with reproduction steps, screenshots, and logs",
      "Participated in test planning and test case creation for major title releases",
      "Collaborated with Dev QA team to validate fixes and perform thorough regression testing",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Career
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Work Experience
        </h2>

        <div className="relative space-y-0">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1.5rem)] w-px bg-border" />

          {roles.map((role, i) => (
            <div
              key={i}
              className={cn(
                "relative flex gap-8 pb-12 last:pb-0",
                role.isCurrent && "opacity-100",
                !role.isCurrent && "opacity-70",
              )}
            >
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border-2 bg-background",
                    role.isCurrent
                      ? "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                      : "border-border",
                  )}
                >
                  {role.isCurrent ? (
                    <Sparkles className="size-4 text-blue-400" />
                  ) : (
                    <div className="size-2.5 rounded-full bg-muted-foreground" />
                  )}
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-border bg-background/85 dark:bg-background/90 p-5 space-y-3">
                <div>
                  <span className="mb-1 block text-xs text-muted-foreground">
                    {role.period}
                  </span>
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      role.isCurrent && "text-blue-400",
                    )}
                  >
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span>{role.company}</span>
                    <span>·</span>
                    <MapPin className="size-3" />
                    <span>{role.location}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {role.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block size-1 shrink-0 rounded-full bg-blue-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
