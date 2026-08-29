import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { education } from '@/data';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-ink-900/40">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="section-label">
            <GraduationCap className="h-4 w-4" />
            Education
          </span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {education.map((edu) => (
            <div key={edu.institution} className="card card-hover p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                    <p className="mt-1 text-sm text-ink-300">{edu.degree}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="rounded-full border border-ink-600 bg-ink-800 px-3 py-1 font-mono text-xs text-ink-200">
                    {edu.period}
                  </span>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent-400 transition-colors hover:text-accent-300"
                    >
                      Visit site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
