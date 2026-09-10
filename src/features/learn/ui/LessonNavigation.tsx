import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import type { LessonSummary } from '../types';

export function LessonNavigation({
  nextLesson,
}: {
  nextLesson?: LessonSummary;
}) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center"
    >
      <Button asChild variant="outline">
        <Link href="/learn">
          <ArrowLeftIcon data-icon="inline-start" />
          Back to Learn
        </Link>
      </Button>
      {nextLesson && (
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-muted-foreground text-xs uppercase">Next lesson</p>
          {nextLesson.href ? (
            <Button asChild variant="link">
              <Link href={nextLesson.href}>
                {nextLesson.title}
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          ) : (
            <>
              <p className="font-medium">{nextLesson.title}</p>
              <Badge variant="secondary">Coming soon</Badge>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
