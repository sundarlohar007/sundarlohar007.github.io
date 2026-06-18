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
    period: "Apr 2022 - Present",
    title: "Senior Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    isCurrent: true,
    highlights: [
      "Owned end-to-end QA coverage across 16 projects on PC, PS4, Xbox One, Nintendo Switch, Meta Quest 2, iOS, and Android",
      "Leading live-ops QA on The Division: Resurgence: validating post-launch patches, seasonal updates, and hotfixes; reproducing 100+ community-reported issues per cycle",
      "Executed functional, regression, and compatibility testing on Might & Magic: Fates across PC, Android, and iOS simultaneously; initiated Airtest IDE automated smoke coverage",
      "Delivered cross-platform QA on Hungry Shark World across Xbox One, PS4, Android, and iOS maintaining device-matrix coverage",
      "Executed comprehensive multiplayer and network testing on XDefiant across PC, PS5, and Xbox Series X|S",
      "Conducted pre-release VR functional testing on Assassin's Creed: Nexus VR including controller input mapping and boundary system validation on Meta Quest 2",
      "Served as Dev QA liaison: participated in requirements analysis, communicated with dev teams, validated test requests, flagged risks during milestone reviews",
      "Developed QADeviceTool: internal mobile debugging utility unifying ADB, scrcpy, and libimobiledevice, now in studio-wide use",
      "Mentored junior game testers within a team of up to 20",
    ],
  },
  {
    period: "Apr 2021 - Mar 2022",
    title: "Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    highlights: [
      "Executed manual functional and regression test suites across 5 projects on Nintendo Switch, Google Stadia, and PC",
      "Maintained sustained QA coverage on Rabbids: Party of Legends across full release and post-launch on Switch and Stadia, including China-localised variant and DLC validation",
      "Executed targeted functional test passes on Starlink: Battle for Atlas and Sports Party on Switch, validating platform-specific behavior",
      "Designed and maintained test case suites in TestRail aligned to feature requirements",
      "Standardized reproduction step documentation in JIRA, improving developer resolution turnaround",
    ],
  },
  {
    period: "May 2019 - Mar 2021",
    title: "Junior Game Tester",
    company: "Ubisoft Pune",
    location: "Pune, India",
    highlights: [
      "Executed functional and regression test plans across 9 projects on PC, Xbox One, PS4, Nintendo Switch, and Google Stadia",
      "Covered multi-platform expansion testing on Rabbids: Party of Legends across Switch, Stadia, PS4, and Xbox One; filed 100+ defects per title cycle",
      "Validated Uno Flip! DLC content across PC, Xbox One, Switch, Stadia, and PS5 simultaneously",
      "Contributed to early pre-release functional and multiplayer QA on Roller Champions for PC",
      "Executed component and compilation testing on AC IV: Black Flag, Rabbids Kingdom Battle, and COMPIL ACBF + AC Rogue across Switch and PC",
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
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-balance">
          Work Experience
        </h2>

        <div className="relative space-y-0">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1.5rem)] w-px bg-border" />

          {roles.map((role, i) => (
            <div
              key={i}
              className={cn(
                "relative flex gap-8 pb-12 last:pb-0",
                !role.isCurrent && "text-muted-foreground/70",
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
                    <Sparkles className="size-4 text-blue-400" aria-hidden="true" />
                  ) : (
                    <div className="size-2.5 rounded-full bg-muted-foreground" />
                  )}
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-border bg-background dark:bg-background p-5 space-y-3">
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
                    <MapPin className="size-3" aria-hidden="true" />
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
