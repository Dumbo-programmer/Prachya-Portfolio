import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { copy, profile, socialLinks } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative pb-14 pt-32 md:pb-20 md:pt-40"
    >
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
            {profile.heroBadges.join(' • ')}
          </p>
          <h1
            id="home-heading"
            className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-muted sm:text-2xl">
            {profile.title}
          </p>

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {copy.labels.viewProjects}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              {copy.labels.contactMe}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="icon-button h-10 w-10"
              >
                <Icon name={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-accent-gradient opacity-25 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-surface shadow-glow">
              <Image
                src={profile.photoLight}
                alt={profile.photoAlt}
                width={640}
                height={640}
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="h-full w-full object-cover dark:hidden"
              />
              <Image
                src={profile.photoDark}
                alt={profile.photoAlt}
                width={640}
                height={640}
                priority
                sizes="(min-width: 768px) 384px, 90vw"
                className="hidden h-full w-full object-cover dark:block"
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
    </section>
  );
}
