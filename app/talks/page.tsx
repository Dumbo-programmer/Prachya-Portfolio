import type { Metadata } from 'next';
import Image from 'next/image';
import { copy, seminars } from '@/data/content';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: copy.sectionTitles.talks,
  description: copy.talks.intro,
  alternates: { canonical: '/talks' },
  openGraph: {
    type: 'website',
    title: copy.sectionTitles.talks,
    description: copy.talks.intro,
    url: '/talks',
  },
};

export default function TalksPage() {
  return (
    <div className="container-page pb-20 pt-32 md:pt-40">
      <SectionHeading
        as="h1"
        title={copy.sectionTitles.talks}
        subtitle={copy.talks.intro}
      />

      <div className="space-y-8">
        {seminars.map((seminar, index) => (
          <Reveal key={seminar.id} delay={index * 50}>
            <article id={seminar.id} className="card overflow-hidden">
              <div className="grid gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
                <div>
                  <div
                    className={`grid gap-3 ${
                      seminar.photos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {seminar.photos.map((photo, photoIndex) => (
                      <div
                        key={`${seminar.id}-${photoIndex}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-surface-raised"
                      >
                        <Image
                          src={photo}
                          alt={`${seminar.title} photo ${photoIndex + 1}`}
                          fill
                          sizes="(min-width: 768px) 30vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-faint">{copy.talks.photos}</p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {seminar.host}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-foreground">
                    {seminar.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="calendar" className="h-4 w-4 text-accent" />
                      {seminar.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="mic" className="h-4 w-4 text-accent" />
                      {seminar.topic}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {seminar.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {seminar.links.map((link) =>
                      link.href ? (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chip transition hover:border-accent hover:text-accent"
                          >
                            <Icon
                              name="externalLink"
                              className="h-3.5 w-3.5"
                            />
                            {link.label}
                          </a>
                        </li>
                      ) : (
                        <li key={link.label}>
                          <span className="chip opacity-60" title="Link coming soon">
                            <Icon
                              name="externalLink"
                              className="h-3.5 w-3.5"
                            />
                            {link.label}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
