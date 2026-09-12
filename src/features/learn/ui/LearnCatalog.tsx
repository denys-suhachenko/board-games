import type { LessonGame } from '../types';

import { LessonSummaryCard } from './LessonSummaryCard';

type LearnCatalogProps = {
  games: readonly LessonGame[];
};

export async function LearnCatalog({ games }: LearnCatalogProps) {
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

      {game.description && (
        <p
          id={`${game.id}-lessons-scroll-help`}
          className="text-muted-foreground mb-4 text-sm"
        >
          {game.description}
        </p>
      )}

      <div
        role="region"
        aria-labelledby={`${game.id}-lessons-heading`}
        aria-describedby={`${game.id}-lessons-scroll-help`}
        className="focus-visible:outline-ring grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain px-1 pt-1 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 md:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] [&>a]:min-w-0 [&>a]:snap-start"
      >
        {game.lessons.map((lesson) => (
          <LessonSummaryCard key={lesson.order} lesson={lesson} />
        ))}
      </div>
    </section>
  ));
}
