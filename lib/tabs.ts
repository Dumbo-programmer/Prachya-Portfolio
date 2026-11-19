import { navigation } from '@/data/content';

export const TAB_EVENT = 'portfolio:tabchange';
export const DEFAULT_TAB = 'home';

export const TAB_IDS = [...navigation.primary, ...navigation.more].map(
  (item) => item.target,
);

export function tabHref(target: string): string {
  return `/?tab=${encodeURIComponent(target)}`;
}

export function isTabId(value: string | null | undefined): value is string {
  return !!value && TAB_IDS.includes(value);
}

/** Switches a home-page tab and keeps the URL shareable without a page reload. */
export function activateTab(target: string): void {
  if (typeof window === 'undefined') return;

  if (window.location.pathname === '/') {
    const next = tabHref(target);
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== next) {
      window.history.pushState({ tab: target }, '', next);
    }
  }

  window.dispatchEvent(new CustomEvent<string>(TAB_EVENT, { detail: target }));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
