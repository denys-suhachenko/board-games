'use client';

import { useTranslations } from 'next-intl';

import { useId, useState } from 'react';
import { CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { GoLessonDiagram } from './GoLessonDiagram';
import { eyePoints, twoEyes } from './life-and-death-positions';

type Point = { x: number; y: number };

export function GoEyesQuickCheck() {
  const t = useTranslations('go.lessons.exercises.eyes');
  const common = useTranslations('common.exercises');
  const questionId = useId();
  const [found, setFound] = useState<Point[]>([]);
  const [feedback, setFeedback] = useState('');
  const [hasSelected, setHasSelected] = useState(false);
  const complete = found.length === eyePoints.length;

  function selectIntersection(x: number, y: number) {
    if (complete) return;
    setHasSelected(true);

    if (found.some((point) => point.x === x && point.y === y)) {
      setFeedback(t('alreadyFound'));
    } else if (twoEyes.some((stone) => stone.x === x && stone.y === y)) {
      setFeedback(t('occupied'));
    } else if (eyePoints.some((point) => point.x === x && point.y === y)) {
      setFound((previous) => [...previous, { x, y }]);
      setFeedback(t('correct'));
    } else {
      setFeedback(t('outside'));
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
        stones={twoEyes}
        markers={found}
        onIntersectionClick={selectIntersection}
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium">
          {t('progress', { count: found.length, total: eyePoints.length })}
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
          feedback
        )}
      </div>
    </div>
  );
}
