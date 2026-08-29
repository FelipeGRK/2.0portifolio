import { Mail, Github, Linkedin, Download, ArrowUp } from 'lucide-react';
import { profile } from '@/data';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-ink-900/40">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">
            <Mail className="h-4 w-4" />
            Contact
          </span>
          <h2 className="section-title">Let's connect</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">
            I'm actively seeking full-time Network Administrator Jr. and Tier 2 Support
            positions. Whether you have a question, an opportunity, or just want to
            connect, feel free to reach out.
          </p>

          {/* Email button */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail className="h-4 w-4" />
              Send an email
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-850/60 text-ink-300 transition-all hover:border-accent-600/40 hover:text-accent-400"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-850/60 text-ink-300 transition-all hover:border-accent-600/40 hover:text-accent-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-850/60 text-ink-300 transition-all hover:border-accent-600/40 hover:text-accent-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <footer className="mt-20 border-t border-ink-700/60">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-ink-400">
            &copy; 2025 Felipe Siqueira. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-400"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </section>
  );
}
