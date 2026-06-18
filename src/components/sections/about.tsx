export default function About() {
  return (
    <section
      id="about"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          About
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">
          Professional Summary
        </h2>

        <div className="rounded-xl border border-border bg-background/85 dark:bg-background/90 p-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Senior Game Tester with over 7 years of experience at Ubisoft Pune,
            specializing in multi-platform quality assurance across PC, PlayStation,
            Xbox, Nintendo Switch, Android, and iOS. Proven track record of
            delivering high-quality gaming experiences through comprehensive manual
            and exploratory testing methodologies.
          </p>
          <p>
            Expert in live service QA, build verification, release candidate build
            validation, and defect triage. Adept at liaising between QA and
            development teams to streamline bug resolution and improve overall
            product quality across AAA titles and live service games.
          </p>
          <p>
            Passionate about ensuring seamless player experiences across all
            platforms, with deep knowledge of console certification requirements,
            cross-platform compatibility testing, and multiplayer session testing.
            Committed to driving QA excellence in every project.
          </p>
        </div>
      </div>
    </section>
  )
}
