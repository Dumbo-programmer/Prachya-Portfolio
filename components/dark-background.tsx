import { decorative } from '@/data/content';

/**
 * Decorative-only dark-mode atmosphere. Rendered on every page but hidden by
 * CSS in light mode, so toggling never shifts layout. All strings come from
 * data/content.ts and are marked aria-hidden + data-nosnippet: they are not
 * page content and must never be treated as such by search engines.
 */
export function DarkBackground() {
  return (
    <div
      aria-hidden="true"
      data-nosnippet
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden dark:block"
    >
      {/* Soft gradient glow */}
      <div
        className="absolute -left-40 -top-52 h-[560px] w-[560px] rounded-full animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, var(--glow-one), transparent 70%)' }}
      />
      <div
        className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, var(--glow-two), transparent 70%)',
          animationDelay: '-5s',
        }}
      />

      {/* Faint dot matrix */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(var(--grid-dot) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
        }}
      />

      {/* Slowly drifting code snippets. Two identical copies make the loop seamless. */}
      <div className="absolute inset-0 overflow-hidden font-mono text-xs leading-7 sm:text-sm">
        <div className="animate-code-drift will-change-transform">
          {[0, 1].map((copy) => (
            <div key={copy} className="space-y-1 py-3">
              {decorative.codeLines.map((line, index) => (
                <div
                  key={`${copy}-${index}`}
                  className="flex min-h-7 gap-5 whitespace-pre text-[rgb(var(--code-tint)/0.18)]"
                >
                  <span className="hidden w-8 shrink-0 text-right text-[rgb(var(--code-tint)/0.12)] md:inline">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={index % 3 === 2 ? 'hidden md:inline' : ''}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating math / coding symbols */}
      <div className="absolute inset-0">
        {decorative.symbols.map((symbol, index) => (
          <span
            key={`${symbol.char}-${index}`}
            className={`absolute animate-float-slow font-mono text-accent/[0.14] ${
              symbol.blur ? 'blur-[1px]' : ''
            } ${symbol.mobile ? '' : 'hidden sm:block'}`}
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              fontSize: `${symbol.size}rem`,
              animationDelay: `${symbol.delay}s`,
            }}
          >
            {symbol.char}
          </span>
        ))}
      </div>
    </div>
  );
}
