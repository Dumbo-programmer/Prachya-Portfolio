'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { copy, navigation, profile, type NavItem } from '@/data/content';
import {
  activateTab,
  DEFAULT_TAB,
  isTabId,
  tabHref,
  TAB_EVENT,
} from '@/lib/tabs';
import { Icon } from './icons';

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [active, setActive] = useState<string>(DEFAULT_TAB);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncFromUrl = () => {
      if (!isHome) {
        setActive('writing');
        return;
      }
      const tab = new URLSearchParams(window.location.search).get('tab');
      setActive(isTabId(tab) ? tab : DEFAULT_TAB);
    };

    const onTabChange = (event: Event) => {
      setActive((event as CustomEvent<string>).detail);
    };

    syncFromUrl();
    window.addEventListener(TAB_EVENT, onTabChange);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener(TAB_EVENT, onTabChange);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, [isHome]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const renderLink = (item: NavItem, onNavigate: () => void) => {
    const isActive = active === item.target;
    const a11yProps = isHome
      ? {
          id: `tab-${item.target}`,
          'aria-controls': `panel-${item.target}`,
          'aria-current': isActive ? ('location' as const) : undefined,
        }
      : {
          'aria-current': isActive ? ('page' as const) : undefined,
        };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onNavigate();
      if (!isHome || isModifiedClick(event)) return;
      event.preventDefault();
      activateTab(item.target);
    };

    return (
      <Link
        key={item.target}
        href={tabHref(item.target)}
        onClick={handleClick}
        {...a11yProps}
        className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-2 text-sm font-medium transition duration-200 ${
          isActive
            ? 'bg-accent/10 text-accent'
            : 'text-muted hover:bg-surface-raised hover:text-foreground'
        }`}
      >
        <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0" />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-[980px] -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setMoreOpen(false);
            setMobileOpen(false);
          }
        }}
        className="flex items-center justify-between gap-3 rounded-pill border border-line bg-surface/85 px-3 py-2 shadow-pill backdrop-blur-xl"
      >
        <Link
          href="/"
          onClick={(event) => {
            setMobileOpen(false);
            if (!isHome || isModifiedClick(event)) return;
            event.preventDefault();
            activateTab(DEFAULT_TAB);
          }}
          className="flex shrink-0 items-center gap-2 rounded-pill py-1 pl-1 pr-2"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-xs font-bold text-on-accent shadow-glow">
            {profile.shortName}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navigation.primary.map((item) => renderLink(item, () => setMoreOpen(false)))}

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((open) => !open)}
              aria-expanded={moreOpen}
              aria-controls="nav-more-menu"
              className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-2 text-sm font-medium transition duration-200 ${
                navigation.more.some((item) => item.target === active)
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-surface-raised hover:text-foreground'
              }`}
            >
              {copy.labels.more}
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {moreOpen && (
              <div
                id="nav-more-menu"
                className="absolute right-0 top-full mt-2 w-64 rounded-card border border-line bg-surface p-2 shadow-card"
              >
                {navigation.more.map((item) =>
                  renderLink(item, () => setMoreOpen(false)),
                )}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile-menu"
          aria-label={mobileOpen ? copy.a11y.closeMenu : copy.a11y.openMenu}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
        >
          {mobileOpen ? (
            <X size={18} aria-hidden="true" />
          ) : (
            <Menu size={18} aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="nav-mobile-menu"
          className="mt-2 flex flex-col gap-1 rounded-card border border-line bg-surface p-3 shadow-card lg:hidden"
        >
          {[...navigation.primary, ...navigation.more].map((item) =>
            renderLink(item, () => setMobileOpen(false)),
          )}
        </div>
      )}
    </header>
  );
}
