import Image from 'next/image';
import { copy, experience } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-block"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-heading"
          title={copy.sectionTitles.experience}
        />

        <div className="space-y-5">
          {experience.map((role, index) => (
            <Reveal key={`${role.organization}-${role.role}`} delay={index * 60}>
              <article className="card grid gap-6 p-6 md:grid-cols-[260px_1fr] md:p-7">
                <div className="flex flex-col gap-4 md:border-r md:border-line md:pr-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-card border border-line bg-surface-raised">
                      <Image
                        src={role.logo ?? '/logos/placeholder.svg'}
                        alt={`${role.organization} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-foreground">
                      {role.organization}
                    </p>
                  </div>

                  {role.links?.length ? (
                    <ul className="flex flex-wrap gap-2">
                      {role.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chip transition hover:border-accent hover:text-accent"
                          >
                            <Icon
                              name={link.icon ?? 'externalLink'}
                              className="h-3.5 w-3.5"
                            />
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.role}
                    </h3>
                    <p className="text-sm text-muted">{role.period}</p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {role.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
