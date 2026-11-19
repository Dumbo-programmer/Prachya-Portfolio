import Image from 'next/image';
import { achievements, copy } from '@/data/content';
import { ExpandableText } from './expandable-text';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

function AchievementIcon({
  icon,
  logo,
  name,
}: {
  icon: (typeof achievements)['featured']['icon'];
  logo?: string;
  name: string;
}) {
  if (logo) {
    return (
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-card border border-line bg-surface-raised">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-card border border-accent/30 bg-accent/10 text-accent">
      <Icon name={icon} className="h-7 w-7" />
    </div>
  );
}

export function AchievementsSection() {
  const { featured, grid, compact } = achievements;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-block"
    >
      <div className="container-page">
        <SectionHeading
          id="achievements-heading"
          title={copy.sectionTitles.achievements}
        />

        {/* (a) Featured achievement */}
        <Reveal>
          <article className="card relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent-gradient opacity-10 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
              <AchievementIcon
                icon={featured.icon}
                logo={featured.logo}
                name={featured.title}
              />
              <div className="flex-1">
                {featured.date ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {featured.date}
                  </p>
                ) : null}
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-[15px]">
                  {featured.description}
                </p>
              </div>
              {featured.href ? (
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0 px-5 py-2.5"
                >
                  {featured.linkLabel ?? copy.labels.readMore}
                  <Icon name="externalLink" className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </article>
        </Reveal>

        {/* (b) Achievement grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 flex-1">
                  <ExpandableText
                    text={item.description}
                    className="text-sm leading-6 text-muted"
                  />
                </div>

                <ul className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                  {item.href ? (
                    <li>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chip transition hover:border-accent hover:text-accent"
                      >
                        {item.linkLabel ?? copy.labels.readMore}
                        <Icon name="externalLink" className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ) : null}
                  {item.links?.map((link) => (
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
              </article>
            </Reveal>
          ))}
        </div>

        {/* (c) Compact achievements */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">
            {copy.labels.moreAchievements}
          </h3>
          <div className="section-divider !mt-3" />
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {compact.map((item, index) => (
              <li key={item.id}>
                <Reveal delay={index * 40}>
                  <div className="card flex h-full items-start gap-3 p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-2/10 text-accent-2">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="line-clamp-1 text-sm text-muted">
                        {item.description}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                        >
                          {item.linkLabel ?? copy.labels.readMore}
                          <Icon name="arrowRight" className="h-3 w-3" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
