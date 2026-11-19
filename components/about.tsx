import Image from 'next/image';
import {
  atAGlance,
  copy,
  education,
  experience,
  profile,
  socialLinks,
} from '@/data/content';
import { formatRange } from '@/lib/format';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const primarySocialLabels = ['GitHub', 'LinkedIn', 'Kaggle', 'Email'];

export function About() {
  const primarySocials = socialLinks.filter((link) =>
    primarySocialLabels.includes(link.label),
  );

  return (
    <section id="about" aria-labelledby="about-heading" className="section-block">
      <div className="container-page">
        <SectionHeading id="about-heading" title={copy.sectionTitles.biography} />

        <div className="grid gap-8 lg:grid-cols-[310px_1fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="card flex flex-col items-center p-6 text-center">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-accent-gradient opacity-30 blur-xl" />
                  <Image
                    src={profile.photo}
                    alt={profile.photoAlt}
                    width={160}
                    height={160}
                    className="relative h-40 w-40 rounded-full border-2 border-accent/40 object-cover"
                  />
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {profile.name}
                </p>
                <p className="text-sm text-muted">{profile.title}</p>

                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {primarySocials.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        title={link.label}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                      >
                        <Icon name={link.icon} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {copy.labels.atAGlance}
                </h3>
                <div className="section-divider !mt-3" />
                <ul className="mt-4 space-y-3.5">
                  {atAGlance.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Icon name={item.icon} className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wide text-faint">
                          {item.label}
                        </span>
                        <span className="block text-sm font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {profile.nameVariants.map((variant) => (
                  <span key={variant} className="chip">
                    {variant}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {profile.bio.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted sm:text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-9">
                <h3 className="text-lg font-semibold text-foreground">
                  {copy.labels.education}
                </h3>
                <div className="section-divider !mt-3" />
                <ul className="mt-5 space-y-5">
                  {education.map((item) => (
                    <li
                      key={`${item.institution}-${item.degree}`}
                      className="border-l-2 border-accent/40 pl-4"
                    >
                      <p className="font-medium text-foreground">{item.degree}</p>
                      <p className="mt-1 text-sm text-muted">
                        {item.institution} <span aria-hidden="true">|</span>{' '}
                        {formatRange(item.start, item.end)}
                      </p>
                      <p className="mt-1 text-xs text-accent">{item.status}</p>
                      {item.description ? (
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {item.description}
                        </p>
                      ) : null}
                      {item.links?.length ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-accent hover:underline"
                            >
                              {link.label} ↗
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <h3 className="text-lg font-semibold text-foreground">
                  {copy.labels.experience}
                </h3>
                <div className="section-divider !mt-3" />
                <ul className="mt-5 space-y-5">
                  {experience.slice(0, 2).map((item) => (
                    <li
                      key={`${item.organization}-${item.role}`}
                      className="border-l-2 border-accent-2/40 pl-4"
                    >
                      <p className="font-medium text-foreground">{item.role}</p>
                      <p className="mt-1 text-sm text-muted">
                        {item.organization} <span aria-hidden="true">|</span>{' '}
                        {formatRange(item.start, item.end)}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                        {item.bullets[0]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <h3 className="text-lg font-semibold text-foreground">
                  {copy.labels.profiles}
                </h3>
                <div className="section-divider !mt-3" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="chip transition hover:border-accent hover:text-accent"
                      >
                        <Icon name={link.icon} className="h-3.5 w-3.5" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
