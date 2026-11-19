'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { activateTab, isTabId } from '@/lib/tabs';

function tabTargetFromHref(href: string): string | undefined {
  if (href.startsWith('#')) return href.slice(1);
  try {
    return new URL(href, 'https://localhost').searchParams.get('tab') ?? undefined;
  } catch {
    return undefined;
  }
}

export function TabLink({
  href,
  children,
  onClick,
  ...props
}: {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const target = tabTargetFromHref(href);
  const canSwitchTab = isTabId(target);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      !canSwitchTab ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    activateTab(target);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
