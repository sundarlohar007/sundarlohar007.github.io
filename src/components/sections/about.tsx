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
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-balance">
          Professional Summary
        </h2>

        <div className="rounded-xl border border-border bg-background dark:bg-background p-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Senior QA Tester with 7+ years at Ubisoft Pune, shipping 30 projects
            across PC, console (Xbox One/Series X|S, PS4/PS5, Nintendo Switch),
            VR (Meta Quest 2), mobile (iOS/Android), and streaming (Google Stadia).
            Experienced across the full QA cycle: functional, regression, smoke/sanity,
            compatibility, multiplayer/session, and live-service testing.
          </p>
          <p>
            Proven track record managing 100+ defects per title in JIRA, authoring
            and maintaining test cases and checklists in Xray, and operating as a
            Dev QA liaison across requirements analysis, milestone, and
            release-candidate reviews. Initiated Airtest IDE automation for mobile
            smoke testing and developed an internal ADB/scrcpy/libimobiledevice
            logging tool.
          </p>
          <p>
            Currently driving live-ops QA on an active mobile title and mentoring
            junior testers within a team of up to 20. Committed to ensuring seamless
            player experiences across all platforms with deep knowledge of console
            certification requirements and cross-platform compatibility testing.
          </p>
        </div>
      </div>
    </section>
  )
}
