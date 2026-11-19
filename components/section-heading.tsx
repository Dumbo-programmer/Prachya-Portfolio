export function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="mb-9">
      <h2 id={id} className="section-title">{title}</h2>
      <div className="section-divider" />
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
