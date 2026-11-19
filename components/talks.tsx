import Image from 'next/image';
import { copy, talks } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function TalksSection() {
  return (
    <section id="talks" aria-labelledby="talks-heading" className="section-block">
      <div className="container-page">
        <SectionHeading id="talks-heading" title={copy.sectionTitles.talks} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {talks.map((talk, index) => (
            <Reveal key={talk.id} delay={index * 50}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="chip w-fit border-accent/30 bg-accent/10 text-accent">
                    <Icon name="mic" className="h-3.5 w-3.5" />
                    {talk.type}
                  </span>
                  <span className="text-xs text-faint">{talk.date}</span>
                </div>

                {talk.image ? (
                  <div className="relative mt-4 overflow-hidden rounded-card border border-line">
                    <Image
                      src={talk.image}
                      alt={`${talk.title} photo`}
                      width={480}
                      height={270}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : null}

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
                  {talk.venue}
                </p>
                <h3 className="mt-1 text-base font-semibold text-foreground">
                  {talk.title}
                </h3>
                <p className="line-clamp-1 mt-2 text-sm text-muted">
                  {talk.description}
                </p>

                {talk.href ? (
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-accent hover:underline"
                  >
                    {copy.labels.readMore}
                    <Icon name="externalLink" className="h-3.5 w-3.5" />
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
