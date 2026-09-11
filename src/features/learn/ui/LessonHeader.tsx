import { ClockIcon } from 'lucide-react';
import { Badge } from '@/shared/ui/badge';
import type { LessonSummary } from '../types';

export function LessonHeader({
  lesson,
  labels,
}: {
  lesson: LessonSummary;
  labels: {
    number: string;
    progress: string;
    readingTime: string;
    level: string;
  };
}) {
  return (
    <header className="mb-10 border-b pb-10">
      <div className="flex max-w-3xl flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-primary text-xs font-medium tracking-widest uppercase">
            {labels.number}
          </p>
          <Badge variant="secondary" className="uppercase">
            {labels.level}
          </Badge>
        </div>
        <h1 className="text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {lesson.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          {lesson.description}
        </p>
        <div className="text-muted-foreground flex flex-wrap items-center gap-5 text-sm">
          {lesson.readingMinutes && (
            <span className="flex items-center gap-2">
              <ClockIcon className="size-4" aria-hidden="true" />
              {labels.readingTime}
            </span>
          )}
          <span>{labels.progress}</span>
        </div>
      </div>
    </header>
  );
}
