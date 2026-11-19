import { copy, skills } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-block">
      <div className="container-page">
        <SectionHeading id="skills-heading" title={copy.sectionTitles.skills} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.title} delay={index * 50}>
              <article className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-card bg-accent/10 text-accent">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="chip">
                      <Icon
                        name={skill.icon ?? group.icon}
                        className="h-3.5 w-3.5 text-accent"
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
