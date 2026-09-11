import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { LessonGame } from '../types';
import { Badge } from '@/shared/ui/badge';
import { cn } from '@/shared/lib/utils';

export function LearnCatalog({ games }: { games: readonly LessonGame[] }) {
  return games.map((game) => (
    <section key={game.id} id={game.id} className="scroll-mt-8 border-t py-10">
      <h2
        id={`${game.id}-lessons-heading`}
        className="mb-6 text-3xl font-medium md:text-4xl"
      >
        {game.title}{' '}
        {game.native && (
          <span className="text-primary text-2xl">{game.native}</span>
        )}
      </h2>
      {game.id === 'go' && (
        <p
          id="go-lessons-scroll-help"
          className="text-muted-foreground mb-4 text-sm"
        >
          {game.lessons.length} lessons, from your first stones to opening
          strategy. Scroll sideways to explore, or use the arrow keys when the
          lesson list is focused.
        </p>
      )}
      <div
        role={game.id === 'go' ? 'region' : undefined}
        aria-labelledby={game.id === 'go' ? 'go-lessons-heading' : undefined}
        aria-describedby={
          game.id === 'go' ? 'go-lessons-scroll-help' : undefined
        }
        tabIndex={game.id === 'go' ? 0 : undefined}
        className={cn(
          'grid gap-6',
          game.id === 'go'
            ? 'focus-visible:outline-ring snap-x snap-mandatory auto-cols-[100%] grid-flow-col overflow-x-auto overscroll-x-contain px-1 pt-1 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 md:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] [&>a]:min-w-0 [&>a]:snap-start'
            : 'md:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {game.lessons.map((lesson) => {
          const className =
            'bg-card col-span-1 flex flex-col overflow-hidden rounded-md border';
          const content = (
            <div className="flex min-w-0 flex-1 flex-col p-6">
              <div className="text-muted-foreground mb-3 flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase">
                <span>Lesson {lesson.order}</span>
                <Badge variant="outline">{lesson.level}</Badge>
              </div>
              <h3 className="group-hover:text-primary group-focus-visible:text-primary mb-3 text-xl leading-[1.2] font-medium tracking-[-0.01em] text-pretty transition-colors">
                {lesson.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-[1.55] text-pretty">
                {lesson.description}
              </p>
              <div className="text-muted-foreground group-hover:text-primary group-focus-visible:text-primary mt-auto flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs transition-colors">
                {lesson.href ? (
                  <>
                    <span>Read lesson</span>
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  </>
                ) : (
                  <Badge variant="secondary">Coming soon</Badge>
                )}
              </div>
            </div>
          );

          return lesson.href ? (
            <Link
              key={lesson.order}
              href={lesson.href}
              className={cn(
                className,
                'focus-visible:outline-ring group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4',
              )}
            >
              {content}
            </Link>
          ) : (
            <div key={lesson.order} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  ));
}
