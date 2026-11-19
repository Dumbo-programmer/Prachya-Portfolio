'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useId, useState } from 'react';
import { copy } from '@/data/content';

/**
 * Server-rendered text with a client-side expand/collapse toggle. The full
 * paragraph is present in the SSR HTML; only the CSS clamp changes on click.
 */
export function ExpandableText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  return (
    <>
      <p id={id} className={`${className} ${expanded ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        aria-controls={id}
        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-2"
      >
        {expanded ? copy.labels.showLess : copy.labels.readMore}
        {expanded ? (
          <ChevronUp size={12} aria-hidden="true" />
        ) : (
          <ChevronDown size={12} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
