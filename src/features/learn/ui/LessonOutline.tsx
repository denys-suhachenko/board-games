import { cn } from '@/shared/lib/utils';
import type { LessonOutlineItem } from '../types';

export function LessonOutline({
  items,
}: {
  items: readonly LessonOutlineItem[];
}) {
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
              'flex-1 rounded-full',
              index === 0 ? 'bg-primary' : 'bg-border',
            )}
          />
        ))}
      </div>
      <ol className="flex flex-wrap gap-1 lg:flex-col">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-3 rounded-md border-l-2 border-transparent px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
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
