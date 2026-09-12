import { getTranslations } from 'next-intl/server';
import { ArrowRightIcon } from 'lucide-react';

import { Link } from '@/shared/i18n/navigation';
import { Badge } from '@/shared/ui/badge';
import { cn } from '@/shared/lib/utils';

import type { LessonSummary } from '../types';

type LessonSummaryCardProps = {
  lesson: LessonSummary;
};

export async function LessonSummaryCard({ lesson }: LessonSummaryCardProps) {
  const t = await getTranslations('learn');

  const className =
    'bg-card col-span-1 flex flex-col overflow-hidden rounded-md border';

  const content = (
    <div className="flex min-w-0 flex-1 flex-col p-6">
      <div className="text-muted-foreground mb-3 flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase">
        <span>
          {t('header.lesson', {
            order: lesson.order,
          })}
        </span>
        <Badge variant="outline">{t(`level.${lesson.level}`)}</Badge>
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
            <span>{t('actions.read_lesson')}</span>
            <ArrowRightIcon className="size-4" aria-hidden="true" />
          </>
        ) : (
          <Badge variant="secondary">{t('status.coming_soon')}</Badge>
        )}
      </div>
    </div>
  );

  return lesson.href ? (
    <Link
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
}
