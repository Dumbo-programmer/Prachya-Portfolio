import { copy, projects, socialLinks } from '@/data/content';
import { ExpandableText } from './expandable-text';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function ProjectsSection() {
  const github = socialLinks.find((link) => link.icon === 'github');

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-block">
      <div className="container-page">
        <SectionHeading id="projects-heading" title={copy.sectionTitles.projects} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 50}>
              <article className="card flex h-full flex-col p-6">
                <span className="chip w-fit border-accent/30 bg-accent/10 text-accent">
                  {project.type}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>

                <div className="mt-2 flex-1">
                  <ExpandableText
                    text={project.description}
                    className="text-sm leading-6 text-muted"
                  />
                </div>

                {project.metrics?.length ? (
                  <dl className="mt-4 flex flex-wrap gap-3 border-t border-line pt-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex-1">
                        <dt className="text-[11px] uppercase tracking-wide text-faint">
                          {metric.label}
                        </dt>
                        <dd className="text-sm font-semibold text-accent">
                          {metric.value}
                          {metric.placeholder ? (
                            <span className="sr-only"> (placeholder)</span>
                          ) : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <li key={technology} className="chip">
                      {technology}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-pill border border-line px-3 py-2 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
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

        {github ? (
          <div className="mt-8 text-center">
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon name={github.icon} className="h-4 w-4" />
              {copy.labels.moreProjects}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
