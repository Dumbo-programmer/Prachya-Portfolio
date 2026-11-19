import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { copy, profile, socialLinks, stats } from '@/data/content';
import { Icon } from './icons';
import { TabLink } from './tabs/tab-link';
import { Reveal } from './reveal';

export function Hero() {
  const github = socialLinks.find((link) => link.label === 'GitHub');

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative scroll-mt-24 pb-14 pt-32 md:pb-20 md:pt-40"
    >
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-accent">
            {profile.greeting}
          </p>
          <h1
            id="home-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="text-gradient mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {profile.title}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.heroBadges.map((badge) => (
              <span key={badge} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
                {badge}
              </span>
            ))}
          </div>

          <TabLink
            href={profile.highlight.href ?? '#achievements'}
            className="mt-7 block rounded-card border border-accent/30 bg-accent/[0.06] p-4 transition duration-300 hover:border-accent hover:bg-accent/[0.1]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {profile.highlight.label}
            </span>
            <p className="mt-1.5 font-semibold text-foreground">
              {profile.highlight.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {profile.highlight.description}
            </p>
            {profile.highlight.linkLabel ? (
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {profile.highlight.linkLabel}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            ) : null}
          </TabLink>

          <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted">
            {profile.introSegments.map((segment, index) =>
              segment.href ? (
                <TabLink
                  key={index}
                  href={segment.href}
                  className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
                  {...(segment.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {segment.text}
                </TabLink>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-line bg-surface/70 p-4 text-center shadow-card"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="text-gradient block text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{stat.label}</span>
                  {stat.placeholder ? (
                    <span className="sr-only">{copy.a11y.placeholderValue}</span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <TabLink href="#projects" className="btn-primary">
              {copy.labels.viewProjects}
              <ArrowRight size={16} aria-hidden="true" />
            </TabLink>
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Icon name={github.icon} className="h-4 w-4" />
                {github.label}
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2rem] bg-accent-gradient opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-card border border-line bg-surface shadow-glow">
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                width={520}
                height={620}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 chip border-line/60 bg-surface/90 backdrop-blur">
                {profile.photoCaption}
              </div>
              <div className="absolute right-4 top-4 chip border-line/60 bg-surface/90 backdrop-blur">
                <Icon name="mapPin" className="h-3.5 w-3.5 text-accent" />
                {profile.location}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <TabLink
        href="#about"
        className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-pill px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition hover:text-accent"
      >
        {copy.labels.readBiography}
        <ArrowDown size={14} aria-hidden="true" />
      </TabLink>
    </section>
  );
}
