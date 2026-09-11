'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import type { LessonOutlineItem } from '../types';

export function LessonOutline({
  items,
}: {
  items: readonly LessonOutlineItem[];
}) {
  const [activeId, setActiveId] = useState<string | undefined>(items[0]?.id);
  const activeIndex = items.findIndex((item) => item.id === activeId);

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      // Follow the last section to cross the upper reading area.
      const readingLine = Math.min(160, window.innerHeight * 0.25);
      let currentId: string | undefined = items[0]?.id;

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= readingLine) {
          currentId = item.id;
        }
      }

      // Short final sections may never reach the reading line.
      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      ) {
        currentId = items.at(-1)?.id;
      }
      setActiveId(currentId);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, [items]);

  return (
    <nav
      aria-label="Lesson outline"
      className="bg-card rounded-xl border p-4 lg:sticky lg:top-8"
    >
      <p className="text-xs font-medium tracking-widest uppercase">
        In this lesson
      </p>
      <div
        aria-hidden="true"
        className="bg-muted my-4 flex h-1 gap-1 overflow-hidden rounded-full"
      >
        {items.map((item, index) => (
          <span
            key={item.id}
            className={cn(
              'flex-1 rounded-full transition-colors motion-reduce:transition-none',
              index <= activeIndex ? 'bg-primary' : 'bg-border',
            )}
          />
        ))}
      </div>
      <ol className="flex flex-wrap gap-1 lg:flex-col">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === activeId ? 'location' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md border-l-2 px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none',
                item.id === activeId
                  ? 'bg-primary/10 text-primary border-transparent font-medium'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border-transparent',
              )}
            >
              <span
                aria-hidden="true"
                className="text-xs tabular-nums opacity-60"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
