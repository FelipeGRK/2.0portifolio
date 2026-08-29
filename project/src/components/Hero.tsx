import { useEffect, useState } from 'react';
import { Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { profile } from '@/data';

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const fullText = profile.role;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayed(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Status badge */}
        <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-850/60 px-4 py-2 text-sm text-ink-200 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          Actively seeking full-time IT Support & Network Admin roles
        </div>

        {/* Greeting */}
        <p className="animate-fade-up animate-delay-100 mb-2 font-mono text-base text-accent-400">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="animate-fade-up animate-delay-200 mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        {/* Typing role */}
        <div className="animate-fade-up animate-delay-300 mb-8 flex min-h-[2.5rem] items-center justify-center">
          <h2 className="font-mono text-xl font-medium text-ink-200 sm:text-2xl lg:text-3xl">
            {displayed}
            <span className="animate-blink text-accent-400">_</span>
          </h2>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up animate-delay-500 flex flex-col items-center gap-4 sm:flex-row">
          <a href={profile.resume} download className="btn-primary">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </div>

        {/* Socials */}
        <div className="animate-fade-in animate-delay-700 mt-10 flex items-center gap-4">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-400 transition-colors hover:text-accent-400"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-float" />
      </a>
    </section>
  );
}
