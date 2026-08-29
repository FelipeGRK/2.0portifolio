import { useState } from 'react';
import { Award, ExternalLink, ChevronDown } from 'lucide-react';
import { certifications } from '@/data';

export default function Certifications() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="section-label">
            <Award className="h-4 w-4" />
            Certifications
          </span>
          <h2 className="section-title">Professional credentials</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-300">
            Industry certifications and completed courses from leading organizations
            and universities.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {certifications.map((cert, i) => {
            const isOpen = expanded === i;
            return (
              <div key={cert.title} className="card card-hover overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  {/* Issuer logo */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-700 bg-ink-850 p-2">
                    {cert.issuerLogo ? (
                      <img
                        src={cert.issuerLogo}
                        alt={cert.issuer}
                        className="max-h-7 max-w-7 brightness-0 invert"
                        loading="lazy"
                      />
                    ) : (
                      <Award className="h-6 w-6 text-accent-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-ink-400">{cert.issuer}</p>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="animate-slide-down border-t border-ink-700 px-5 pb-5 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="tag tag-accent">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.certImage && (
                      <div className="mt-4">
                        <img
                          src={cert.certImage}
                          alt={`${cert.title} certificate`}
                          className="max-w-full rounded-lg border border-ink-700"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
