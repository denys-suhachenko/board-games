import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { LessonGame } from '../types';
import { Badge } from '@/shared/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/shared/ui/card';

export function LearnCatalog({ games }: { games: readonly LessonGame[] }) {
  return games.map((game) => (
    <section key={game.id} id={game.id} className="scroll-mt-8 border-t py-10">
      <h2 className="mb-6 text-3xl font-medium md:text-4xl">
        {game.title}{' '}
        {game.native && (
          <span className="text-muted-foreground text-2xl">{game.native}</span>
        )}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {game.lessons.map((lesson) => (
          <Card key={lesson.order}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-muted-foreground text-xs uppercase">
                  Lesson {lesson.order}
                </span>
                <Badge variant="outline">{lesson.level}</Badge>
              </div>
              <h3 className="mt-3 text-2xl font-medium tracking-tight">
                {lesson.title}
              </h3>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                {lesson.description}
              </p>
            </CardContent>
            <CardFooter>
              {lesson.href ? (
                <Link
                  href={lesson.href}
                  className="text-primary flex items-center gap-2 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Read lesson{' '}
                  <ArrowRightIcon className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <Badge variant="secondary">Coming soon</Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  ));
}
