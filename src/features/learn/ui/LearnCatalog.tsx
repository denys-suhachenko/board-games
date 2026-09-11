import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { LessonGame } from '../types';
import { Badge } from '@/shared/ui/badge';
import { cn } from '@/shared/lib/utils';

export function LearnCatalog({ games }: { games: readonly LessonGame[] }) {
  return games.map((game) => (
    <section key={game.id} id={game.id} className="scroll-mt-8 border-t py-10">
      <h2 className="mb-6 text-3xl font-medium md:text-4xl">
        {game.title}{' '}
        {game.native && (
          <span className="text-primary text-2xl">{game.native}</span>
        )}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
