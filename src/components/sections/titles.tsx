import { Gamepad2 } from "lucide-react"
import { NintendoSwitch, PlayStation, Xbox, Android, Apple, Pc, Vr, Stadia } from "@/components/ui/platform-icons"

type Platform = "pc" | "ps" | "xbox" | "switch" | "android" | "ios" | "vr" | "stadia"

interface ShippedTitle {
  name: string
  description: string
  platforms: Platform[]
}

const titles: ShippedTitle[] = [
  { name: "The Division Resurgence", description: "Mobile Open World. Full QA lifecycle across Android, iOS, and PC including device compatibility testing", platforms: ["android", "ios", "pc"] },
  { name: "Might & Magic: Fates Heroes TCG", description: "Card Strategy TCG. Cross-platform functional and compatibility testing on PC, Android, and iOS", platforms: ["pc", "android", "ios"] },
  { name: "Hungry Shark World", description: "Mobile Action. Functional and performance testing for Android and iOS builds", platforms: ["android", "ios"] },
  { name: "XDefiant", description: "Free-to-Play FPS. Multiplayer session testing and live service QA on Xbox, PS5, and PC", platforms: ["pc", "xbox", "ps"] },
  { name: "Assassin's Creed Nexus", description: "VR Stealth Action. VR-specific testing on Meta Quest 2 including motion controls", platforms: ["vr"] },
  { name: "Roller Champions", description: "Free-to-Play Sports. Multiplayer session and cross-platform testing across PC, PlayStation, Xbox, and Switch", platforms: ["pc", "ps", "xbox", "switch"] },
  { name: "Assassin's Creed Chronicles: India", description: "2.5D Side-Scroller. Platform-specific testing on PlayStation 4", platforms: ["ps"] },
  { name: "Rabbids: Party of Legends", description: "Party Game. Full-cycle QA across PC, PlayStation, Xbox, Switch, and Stadia", platforms: ["pc", "ps", "xbox", "switch", "stadia"] },
  { name: "Rabbids: Party of Legends - DLC Content", description: "Party Game DLC. Additional content validation, regression, and localization testing", platforms: ["pc", "ps", "switch"] },
  { name: "Rabbids: Party of Legends (China Edition)", description: "Party Game. China-specific localization, compliance, and certification testing", platforms: ["pc", "ps", "switch"] },
  { name: "Starlink: Battle for Atlas", description: "Action-Adventure. Nintendo Switch platform-specific testing", platforms: ["switch"] },
  { name: "Sports Party", description: "Party Sports. Nintendo Switch exclusive QA and functional testing", platforms: ["switch"] },
  { name: "Assassin's Creed: The Rebel Collection", description: "Action-Adventure Compilation. Nintendo Switch platform testing", platforms: ["switch"] },
  { name: "Mario + Rabbids Kingdom Battle", description: "Tactical Crossover. Nintendo Switch exclusive gameplay testing", platforms: ["switch"] },
  { name: "UNO Flip (DLC)", description: "Card Game DLC. Multi-platform testing across PC, Xbox, Switch, Stadia, and PS5 including flip mechanic and rule validation", platforms: ["pc", "xbox", "switch", "stadia", "ps"] },
]

const platformIcon = (p: Platform) => {
  switch (p) {
    case "pc": return <Pc className="size-3.5" />
    case "ps": return <PlayStation className="size-3.5" />
    case "xbox": return <Xbox className="size-3.5" />
    case "switch": return <NintendoSwitch className="size-3.5" />
    case "android": return <Android className="size-3.5" />
    case "ios": return <Apple className="size-3.5" />
    case "stadia": return <Stadia className="size-3.5" />
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
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
          Shipped Titles
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          QA contributions across shipped titles at Ubisoft Pune spanning PC, console, mobile, and VR platforms.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {titles.map((title) => (
            <div
              key={title.name}
              className="group rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-5 transition-colors hover:border-blue-500/30"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <Gamepad2 className="mt-0.5 size-4 shrink-0 text-blue-400" aria-hidden="true" />
                <div className="flex gap-1.5">
                  {title.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-muted-foreground"
                      title={p}
                      aria-hidden="true"
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
