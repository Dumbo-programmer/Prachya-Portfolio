import Image from 'next/image';
import { copy, experience } from '@/data/content';
import { durationLabel, formatRange } from '@/lib/format';
import { BoldText } from './bold-text';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

function startTime(value: string): number {
  if (value.toLowerCase() === 'present') return Number.MAX_SAFE_INTEGER;
  const time = Date.parse(`${value}-01`);
  return Number.isNaN(time) ? 0 : time;
}

const roles = [...experience].sort((a, b) => startTime(b.start) - startTime(a.start));

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
          {roles.map((role, index) => (
            <Reveal key={`${role.organization}-${role.role}`} delay={index * 60}>
              <article className="card grid gap-6 p-6 md:grid-cols-[260px_1fr] md:p-7">
                <div className="flex flex-col gap-4 md:border-r md:border-line md:pr-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-card border border-line bg-surface-raised">
                      <Image
                        src={role.logo}
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

                  <div className="space-y-2 text-sm text-muted">
                    <p className="flex items-start gap-2">
                      <Icon name="calendar" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{formatRange(role.start, role.end)}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <span className="sr-only">{copy.labels.duration}: </span>
                        {durationLabel(role.start, role.end)}
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <span className="sr-only">{copy.labels.location}: </span>
                        {role.location}
                      </span>
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {role.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip transition hover:border-accent hover:text-accent"
                        >
                          <Icon name={link.icon ?? 'externalLink'} className="h-3.5 w-3.5" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {role.role}
                      </h3>
                      <span className="chip mt-2">
                        <Icon name="sparkles" className="h-3.5 w-3.5 text-accent" />
                        {role.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted">
                      {formatRange(role.start, role.end)}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                        <span>
                          <BoldText text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
