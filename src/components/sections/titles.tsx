import { Gamepad2 } from "lucide-react"
import { NintendoSwitch, PlayStation, Xbox, Android, Apple, Pc, Vr } from "@/components/ui/platform-icons"

type Platform = "pc" | "ps" | "xbox" | "switch" | "android" | "ios" | "vr"

interface ShippedTitle {
  name: string
  description: string
  platforms: Platform[]
}

const titles: ShippedTitle[] = [
  { name: "Tom Clancy's Rainbow Six Siege", description: "Live Service — Ongoing QA support for seasonal updates, operators, and events", platforms: ["pc", "ps", "xbox"] },
  { name: "Tom Clancy's The Division 2", description: "Live Service — Comprehensive regression and build validation", platforms: ["pc", "ps", "xbox"] },
  { name: "Far Cry 6", description: "AAA Open World — Full-cycle testing across all platforms", platforms: ["pc", "ps", "xbox"] },
  { name: "Assassin's Creed Valhalla", description: "AAA RPG — Cross-platform compatibility and performance testing", platforms: ["pc", "ps", "xbox"] },
  { name: "Tom Clancy's Ghost Recon Breakpoint", description: "Tactical Shooter — Multiplayer session and live service QA", platforms: ["pc", "ps", "xbox"] },
  { name: "Watch Dogs: Legion", description: "AAA Action — Functional, regression, and compatibility testing", platforms: ["pc", "ps", "xbox"] },
  { name: "Roller Champions", description: "Live Service — Free-to-play sports game QA and build validation", platforms: ["pc", "ps", "xbox", "switch"] },
  { name: "Skull and Bones", description: "AAA Pirate Game — Multiplayer and live service testing", platforms: ["pc", "ps", "xbox"] },
  { name: "Star Wars Outlaws", description: "AAA Open World — Full-cycle QA across multiple platforms", platforms: ["pc", "ps", "xbox"] },
  { name: "Assassin's Creed Shadows", description: "AAA RPG — Comprehensive testing including new gameplay systems", platforms: ["pc", "ps", "xbox"] },
  { name: "Prince of Persia: The Lost Crown", description: "Action Platformer — Functional and regression testing", platforms: ["pc", "ps", "xbox", "switch"] },
  { name: "XDefiant", description: "Free-to-Play FPS — Multiplayer session testing and live service QA", platforms: ["pc", "ps", "xbox"] },
  { name: "Tom Clancy's Rainbow Six Mobile", description: "Mobile Tactical FPS — Mobile-specific compatibility and performance testing", platforms: ["android", "ios"] },
  { name: "The Division Resurgence", description: "Mobile Open World — Full mobile QA lifecycle including device compatibility", platforms: ["android", "ios", "pc"] },
]

const platformIcon = (p: Platform) => {
  switch (p) {
    case "pc": return <Pc className="size-3.5" />
    case "ps": return <PlayStation className="size-3.5" />
    case "xbox": return <Xbox className="size-3.5" />
    case "switch": return <NintendoSwitch className="size-3.5" />
    case "android": return <Android className="size-3.5" />
    case "ios": return <Apple className="size-3.5" />
    case "vr": return <Vr className="size-3.5" />
    default: return null
  }
}

export default function Titles() {
  return (
    <section
      id="titles"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Portfolio
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Shipped Titles
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Quality assurance contributions across major AAA and live service titles
          at Ubisoft Pune spanning PC, console, and mobile platforms.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {titles.map((title) => (
            <div
              key={title.name}
              className="group rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-5 transition-colors hover:border-blue-500/30"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <Gamepad2 className="mt-0.5 size-4 shrink-0 text-blue-400" />
                <div className="flex gap-1.5">
                  {title.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-muted-foreground"
                      title={p}
                    >
                      {platformIcon(p)}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mb-1 text-sm font-semibold leading-snug">
                {title.name}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {title.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
