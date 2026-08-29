import { Code2, Server, Network, Headset, type LucideIcon } from 'lucide-react';
import { skillCategories, techIcons } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Network,
  Headset,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-ink-900/40">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="section-label">
            <Code2 className="h-4 w-4" />
            Skills
          </span>
          <h2 className="section-title">Technical expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-300">
            A blend of front-end development, systems administration, networking, and
            IT support skills built through coursework, certifications, and hands-on
            homelab projects.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <div key={category.title} className="card card-hover p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech icon strip */}
        <div className="mt-12">
          <p className="mb-6 text-center font-mono text-sm text-ink-400">
            Tools & technologies I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2"
                title={tech.name}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-700 bg-ink-850/60 p-3 transition-all hover:border-accent-600/40 hover:bg-ink-800">
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="h-7 w-7 brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-ink-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
