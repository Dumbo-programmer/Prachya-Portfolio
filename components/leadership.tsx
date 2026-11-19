import { copy, leadership } from '@/data/content';
import { formatRange } from '@/lib/format';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="section-block"
    >
      <div className="container-page">
        <SectionHeading
          id="leadership-heading"
          title={copy.sectionTitles.leadership}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <article className="card h-full p-6">
                <span className="chip w-fit border-accent/30 bg-accent/10 text-accent">
                  <Icon name={item.icon ?? 'users'} className="h-3.5 w-3.5" />
                  {item.category}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted">
                  {item.organization}
                </p>
                <p className="mt-1 flex items-center gap-2 text-xs text-faint">
                  <Icon name="calendar" className="h-3.5 w-3.5" />
                  {formatRange(item.start, item.end)}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {item.description}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    {copy.labels.readMore}
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
