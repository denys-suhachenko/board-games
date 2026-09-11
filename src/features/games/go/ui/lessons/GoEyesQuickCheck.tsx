'use client';

import { useId, useState } from 'react';
import { CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { GoLessonDiagram } from './GoLessonDiagram';
import { eyePoints, twoEyes } from './life-and-death-positions';

type Point = { x: number; y: number };

export function GoEyesQuickCheck() {
  const questionId = useId();
  const [found, setFound] = useState<Point[]>([]);
  const [feedback, setFeedback] = useState('');
  const [hasSelected, setHasSelected] = useState(false);
  const complete = found.length === eyePoints.length;

  function selectIntersection(x: number, y: number) {
    if (complete) return;
    setHasSelected(true);

    if (found.some((point) => point.x === x && point.y === y)) {
      setFeedback(
        'You already found that eye. Look for the other enclosed space.',
      );
    } else if (twoEyes.some((stone) => stone.x === x && stone.y === y)) {
      setFeedback(
        'That is a stone. Look for an empty intersection enclosed by Black.',
      );
    } else if (eyePoints.some((point) => point.x === x && point.y === y)) {
      setFound((previous) => [...previous, { x, y }]);
      setFeedback(
        'Correct. This enclosed empty point is one of Black’s eyes. Find the other eye.',
      );
    } else {
      setFeedback(
        'That point is outside Black’s group. An outside empty point is not an eye; look inside the black boundary.',
      );
    }
  }

  return (
    <div
      role="group"
      aria-labelledby={questionId}
      className="flex flex-col gap-4"
    >
      <p id={questionId} className="font-medium">
        Select the two eyes that keep this black group alive.
      </p>
      <GoLessonDiagram
        label="Select the eyes on a five by five Go board. A connected black group lies in the upper left corner, with White surrounding it. Rows run from top to bottom and columns from left to right."
        caption="Select two enclosed empty intersections. Use Tab to focus a point and Enter or Space to select it."
        stones={twoEyes}
        markers={found}
        onIntersectionClick={selectIntersection}
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium">
          Eyes found: {found.length} / {eyePoints.length}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasSelected}
          onClick={() => {
            setFound([]);
            setHasSelected(false);
            setFeedback(
              'Exercise reset. Find the two eyes that keep Black alive.',
            );
          }}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Reset exercise
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
            Both eyes found! White cannot capture this group by playing in
            either eye, because the other remains a liberty. Black is alive.
          </p>
        ) : (
          feedback
        )}
      </div>
    </div>
  );
}
