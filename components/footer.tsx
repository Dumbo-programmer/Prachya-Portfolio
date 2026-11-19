import { copy, profile, socialLinks } from '@/data/content';
import { Icon } from './icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line/70 py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.footerTagline}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
          >
            {profile.email}
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-2">
          {socialLinks.map((link) => (
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

      <div className="container-page mt-8 text-center text-xs text-faint">
        © {year} {profile.name}. {copy.footer.rights}
      </div>
    </footer>
  );
}
