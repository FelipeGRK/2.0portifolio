import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '@/data';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="section-label">
            <FolderGit2 className="h-4 w-4" />
            Projects
          </span>
          <h2 className="section-title">Hands-on infrastructure work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-300">
            Homelab and professional projects covering network infrastructure, systems
            administration, and endpoint management.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card card-hover group flex flex-col p-6"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <FolderGit2 className="h-5 w-5" />
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-300 transition-all hover:border-accent-600/40 hover:text-accent-400"
                    aria-label="View source code"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
