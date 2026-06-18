"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Globe, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:sundarlohar007@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
    window.open(mailto)
    setSent(true)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="bg-background/20 dark:bg-background/50 py-24 "
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          Connect
        </div>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl text-balance">
          Get in Touch
        </h2>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-5">
              <Mail className="mt-1 size-5 shrink-0 text-blue-400" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href="mailto:sundarlohar007@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-400"
                >
                  sundarlohar007@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-5">
              <MapPin className="mt-1 size-5 shrink-0 text-blue-400" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Pune, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-5">
              <Globe className="mt-1 size-5 shrink-0 text-blue-400" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/sundar-lohar-007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-blue-400"
                >
                  linkedin.com/in/sundar-lohar-007/
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-background/60 backdrop-blur-sm dark:bg-background/80 dark:backdrop-blur-sm p-6 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  placeholder="Your name…"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  placeholder="your@email.com…"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Subject
              </label>
              <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  autoComplete="off"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  placeholder="What is this about?…"
                />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                placeholder="Your message…"
              />
            </div>

            <Button
              type="submit"
              className="w-full gap-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              {sent ? "Message Sent!" : "Send Message"}
               <Send className="size-4" aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
