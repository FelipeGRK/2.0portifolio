import { CheckCircle2, User } from 'lucide-react';
import { aboutText, aboutHighlights } from '@/data';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="section-label">
            <User className="h-4 w-4" />
            About me
          </span>
          <h2 className="section-title">Get to know me</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink-200 sm:text-lg"
                style={{ lineHeight: '1.75' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((highlight, i) => (
              <div
                key={i}
                className="card card-hover flex items-start gap-3 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <span className="text-sm text-ink-200">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
