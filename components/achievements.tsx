import { achievements, copy, type AchievementRow } from '@/data/content';
import { Icon } from './icons';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

function isFilled(value: string): boolean {
  return value.trim().length > 0 && !value.trim().startsWith('[');
}

function AchievementGroup({
  title,
  rows,
}: {
  title: string;
  rows: AchievementRow[];
}) {
  const visible = rows.filter((row) => isFilled(row.year));
  if (visible.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="section-divider !mt-3" />

      <div className="mt-5 overflow-hidden rounded-card border border-line bg-surface shadow-card">
        <div className="hidden grid-cols-[1.4fr_110px_1fr] gap-4 border-b border-line bg-surface-raised px-5 py-3 text-xs font-semibold uppercase tracking-wide text-faint sm:grid">
          <span>{copy.achievements.achievement}</span>
          <span>{copy.achievements.year}</span>
          <span>{copy.achievements.detail}</span>
        </div>

        <ul className="divide-y divide-line">
          {visible.map((row) => (
            <li
              key={row.id}
              className="grid gap-2 px-5 py-4 sm:grid-cols-[1.4fr_110px_1fr] sm:items-center sm:gap-4"
            >
              <p className="flex items-start gap-2 font-medium text-foreground">
                <Icon
                  name="trophy"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                />
                {row.title}
              </p>
              <p className="text-sm text-accent">{row.year}</p>
              <p className="text-sm leading-6 text-muted">{row.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AchievementsSection() {
  const groups = [
    {
      title: copy.achievements.awardsTitle,
      rows: achievements.awards,
    },
    {
      title: copy.achievements.competitionsTitle,
      rows: achievements.competitions,
    },
  ].filter((group) => group.rows.some((row) => isFilled(row.year)));

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

        <div className="space-y-10">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <AchievementGroup title={group.title} rows={group.rows} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
