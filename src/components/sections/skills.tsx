import { FlaskConical, ScrollText, Wrench, Gamepad2, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillTag {
  name: string
  color: "blue" | "purple" | "amber" | "green" | "pink"
}

interface Category {
  title: string
  icon: React.ReactNode
  tags: SkillTag[]
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
  purple: "bg-purple-500/10 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
  amber: "bg-amber-500/10 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20",
  green: "bg-green-500/10 dark:bg-green-500/10 text-green-600 dark:text-green-300 border-green-500/20",
  pink: "bg-pink-500/10 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20",
}

const categories: Category[] = [
  {
    title: "QA & Testing",
    icon: <FlaskConical className="size-5 text-blue-400" />,
    tags: [
      { name: "Functional", color: "blue" },
      { name: "Regression", color: "blue" },
      { name: "Smoke/Sanity", color: "blue" },
      { name: "Compatibility", color: "blue" },
      { name: "Exploratory", color: "purple" },
      { name: "Multiplayer & Session", color: "purple" },
      { name: "Live Service QA", color: "purple" },
      { name: "Build Verification", color: "blue" },
      { name: "RC Build Validation", color: "blue" },
      { name: "Defect Triage", color: "amber" },
    ],
  },
  {
    title: "Management & Reporting",
    icon: <ScrollText className="size-5 text-purple-400" />,
    tags: [
      { name: "JIRA", color: "purple" },
      { name: "Xray", color: "purple" },
      { name: "Confluence", color: "purple" },
      { name: "TestRail", color: "purple" },
    ],
  },
  {
    title: "Tools & SDKs",
    icon: <Wrench className="size-5 text-amber-400" />,
    tags: [
      { name: "Xbox GDK", color: "amber" },
      { name: "PS Neighborhood", color: "amber" },
      { name: "TestFlight", color: "amber" },
      { name: "Google Play Internal", color: "amber" },
      { name: "ADB", color: "green" },
      { name: "Android Studio", color: "amber" },
      { name: "scrcpy", color: "amber" },
      { name: "Airtest IDE", color: "pink" },
      { name: "TeamCity", color: "amber" },
      { name: "Firebase Crashlytics", color: "amber" },
    ],
  },
  {
    title: "Platforms",
    icon: <Gamepad2 className="size-5 text-green-400" />,
    tags: [
      { name: "PC (Windows)", color: "green" },
      { name: "PS4/PS5", color: "green" },
      { name: "Xbox One/Series", color: "green" },
      { name: "Nintendo Switch", color: "green" },
      { name: "Android", color: "green" },
      { name: "iOS", color: "green" },
      { name: "Cross-Platform", color: "purple" },
    ],
  },
  {
    title: "OS & Environments",
    icon: <Monitor className="size-5 text-pink-400" />,
    tags: [
      { name: "Windows", color: "pink" },
      { name: "Windows Server", color: "pink" },
      { name: "Ubuntu", color: "pink" },
      { name: "VirtualBox", color: "pink" },
      { name: "Hyper-V", color: "pink" },
      { name: "VMware", color: "pink" },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Expertise
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Skills & Tools
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                {cat.icon}
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={cn(
                      "rounded-md border px-2.5 py-0.5 text-xs font-medium",
                      colorMap[tag.color],
                    )}
                  >
                    {tag.name}
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
