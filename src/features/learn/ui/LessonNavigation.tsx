import { Link } from '@/shared/i18n/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import type { LessonSummary } from '../types';

export function LessonNavigation({
  previousLesson,
  nextLesson,
  labels,
}: {
  previousLesson?: LessonSummary;
  nextLesson?: LessonSummary;
  labels: {
    previous: string;
    next: string;
    backToLearn: string;
    comingSoon: string;
    accessibility: string;
  };
}) {
  return (
    <nav
      aria-label={labels.accessibility}
      className="mt-12 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center"
    >
      {previousLesson?.href ? (
        <div className="flex flex-col items-start gap-2">
          <p className="text-muted-foreground text-xs uppercase">
            {labels.previous}
          </p>
          <Button asChild variant="link">
            <Link href={previousLesson.href}>
              <ArrowLeftIcon data-icon="inline-start" />
              {previousLesson.title}
            </Link>
          </Button>
        </div>
      ) : (
        <Button asChild variant="outline">
          <Link href="/learn">
            <ArrowLeftIcon data-icon="inline-start" />
            {labels.backToLearn}
          </Link>
        </Button>
      )}
      {nextLesson && (
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-muted-foreground text-xs uppercase">
            {labels.next}
          </p>
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
              <Badge variant="secondary">{labels.comingSoon}</Badge>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
