'use client';

import { useTranslations } from 'next-intl';

import { useId, useState } from 'react';
import { CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { GoLessonDiagram } from './GoLessonDiagram';

const stone = { x: 2, y: 2, color: 'black' } as const;

type Point = { x: number; y: number };

export function GoLibertiesQuickCheck() {
  const t = useTranslations('go.lessons.exercises.liberties');
  const common = useTranslations('common.exercises');
  const questionId = useId();
  const [found, setFound] = useState<Point[]>([]);
  const [feedback, setFeedback] = useState('');
  const [hasSelected, setHasSelected] = useState(false);
  const complete = found.length === 4;

  function selectIntersection(x: number, y: number) {
    if (complete || found.some((point) => point.x === x && point.y === y))
      return;

    setHasSelected(true);

    if (Math.abs(x - stone.x) + Math.abs(y - stone.y) === 1) {
      setFound((previous) => [...previous, { x, y }]);
      setFeedback(t('correct'));
    } else {
      setFeedback(t('incorrect'));
    }
  }

  return (
    <div
      role="group"
      aria-labelledby={questionId}
      className="flex flex-col gap-4"
    >
      <p id={questionId} className="font-medium">
        {t('question')}
      </p>
      <GoLessonDiagram
        label={t('label')}
        caption={t('caption')}
        stones={[stone]}
        markers={found}
        onIntersectionClick={selectIntersection}
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p
          className="text-sm font-medium"
          aria-live="polite"
          aria-atomic="true"
        >
          {t('progress', { count: found.length })}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasSelected}
          onClick={() => {
            setFound([]);
            setHasSelected(false);
            setFeedback(t('reset'));
          }}
        >
          <RotateCcwIcon data-icon="inline-start" />
          {common('reset')}
        </Button>
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="text-muted-foreground min-h-12 text-sm"
      >
        {complete ? (
          <p className="text-primary flex items-start gap-2">
            <CheckCircle2Icon
              aria-hidden="true"
              className="mt-1 size-4 shrink-0"
            />
            {t('success')}
          </p>
        ) : (
          feedback && <p>{feedback}</p>
        )}
      </div>
    </div>
  );
}
