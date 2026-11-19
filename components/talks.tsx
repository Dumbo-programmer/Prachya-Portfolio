import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { copy, seminars } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function TalksSection() {
  const latest = seminars.slice(0, 3);

  return (
    <section id="talks" aria-labelledby="talks-heading" className="section-block">
      <div className="container-page">
        <SectionHeading
          id="talks-heading"
          title={copy.sectionTitles.talks}
          subtitle={copy.talks.intro}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((seminar, index) => (
            <Reveal key={seminar.id} delay={index * 50}>
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] border-b border-line bg-surface-raised">
                  <Image
                    src={seminar.photos[0] ?? '/images/writing-placeholder.svg'}
                    alt={`${seminar.title} photo`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {seminar.host}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
                    {seminar.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-faint">
                    <Icon name="calendar" className="h-3.5 w-3.5" />
                    {seminar.date}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/talks" className="btn-secondary">
            {copy.talks.viewAll}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
