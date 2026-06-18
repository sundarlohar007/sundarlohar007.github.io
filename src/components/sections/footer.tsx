export default function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/20 dark:bg-background/50 py-8 ">
      <div className="mx-auto flex flex-col items-center gap-2 px-6 text-center text-xs text-muted-foreground">
        <p>Built with care by Sundar Lohar</p>
        <p>
          &copy; {new Date().getFullYear()} Sundar Lohar. All rights reserved.
        </p>
        <a
          href="https://github.com/sundarlohar007"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-blue-400"
        >
          Hosted on GitHub Pages
        </a>
      </div>
    </footer>
  )
}
