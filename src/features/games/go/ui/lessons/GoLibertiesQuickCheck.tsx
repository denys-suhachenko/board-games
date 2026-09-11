'use client';

import { useId, useState } from 'react';
import { CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { GoLessonDiagram } from './GoLessonDiagram';

const stone = { x: 2, y: 2, color: 'black' } as const;

type Point = { x: number; y: number };

export function GoLibertiesQuickCheck() {
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
      setFeedback('Correct — that intersection is a liberty.');
    } else {
      setFeedback(
        'Not quite. A liberty must be directly beside the stone along a grid line.',
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
        Which intersections are liberties of the black stone?
      </p>
      <GoLessonDiagram
        label="Select intersections on a five by five Go board. One black stone is in the center. Rows are numbered from top to bottom and columns from left to right."
        caption="Select the four liberties. Use Tab to focus an intersection and Enter or Space to select it."
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
          Liberties found: {found.length} / 4
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasSelected}
          onClick={() => {
            setFound([]);
            setHasSelected(false);
            setFeedback('Exercise reset. Find all four liberties.');
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
            All four liberties found! Each is an empty intersection directly
            adjacent to the black stone.
          </p>
        ) : (
          feedback && <p>{feedback}</p>
        )}
      </div>
    </div>
  );
}
