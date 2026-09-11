'use client';

import { useTranslations } from 'next-intl';

import { useId, useState } from 'react';
import { CheckCircle2Icon, RotateCcwIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { GoLessonDiagram } from './GoLessonDiagram';
import { playLessonMove } from './lesson-moves';
import type { GoLessonPoint, GoQuickCheck } from './go-lesson-types';

const samePoint = (a: GoLessonPoint, b: GoLessonPoint) =>
  a.x === b.x && a.y === b.y;

export function GoBoardQuickCheck({ exercise }: { exercise: GoQuickCheck }) {
  const t = useTranslations('go.lessons.exercises.board');
  const common = useTranslations('common.exercises');
  const questionId = useId();
  const [stones, setStones] = useState(exercise.diagram.stones);
  const [found, setFound] = useState<GoLessonPoint[]>([]);
  const [feedback, setFeedback] = useState('');
  const [hasSelected, setHasSelected] = useState(false);
  const [complete, setComplete] = useState(false);
  const areaPoints =
    exercise.kind === 'area'
      ? [
          ...exercise.diagram.stones.filter(
            (stone) => stone.color === exercise.color,
          ),
          ...exercise.territory,
        ]
      : [];

  function selectIntersection(x: number, y: number) {
    if (complete) return;
    setHasSelected(true);
    const point = { x, y };
    const stone = stones.find((item) => samePoint(item, point));

    if (exercise.kind === 'area') {
      if (found.some((item) => samePoint(item, point))) {
        setFeedback(t('alreadyCounted'));
      } else if (areaPoints.some((item) => samePoint(item, point))) {
        const nextFound = [...found, point];
        setFound(nextFound);
        setComplete(nextFound.length === areaPoints.length);
        setFeedback(stone ? t('correctStone') : t('correctTerritory'));
      } else {
        setFeedback(stone ? t('opponentStone') : t('opponentTerritory'));
      }
      return;
    }

    if (stone) {
      setFeedback(t('occupied'));
      return;
    }
    if (exercise.kind === 'ko' && samePoint(point, exercise.koPoint)) {
      setFeedback(t('ko'));
      return;
    }
    const move = playLessonMove(
      stones,
      exercise.diagram.size ?? 5,
      point,
      exercise.kind === 'ko' ? 'white' : exercise.color,
    );
    if (!move.legal) {
      setFeedback(
        move.reason === 'self-capture' ? t('selfCapture') : t('chooseEmpty'),
      );
      return;
    }
    if (exercise.kind === 'move' && !samePoint(point, exercise.target)) {
      setFeedback(
        exercise.hints?.find((hint) => samePoint(hint.point, point))
          ?.feedback ?? exercise.incorrectFeedback,
      );
      return;
    }
    setStones(move.stones);
    setFound([point]);
    setComplete(true);
  }

  return (
    <div
      role="group"
      aria-labelledby={questionId}
      className="flex flex-col gap-4"
    >
      <p id={questionId} className="font-medium">
        {exercise.question}
      </p>
      <GoLessonDiagram
        {...exercise.diagram}
        label={
          complete && exercise.kind !== 'area'
            ? t('movePlayed', {
                color: exercise.kind === 'ko' ? 'white' : exercise.color,
                feedback: exercise.successFeedback,
              })
            : exercise.diagram.label
        }
        caption={t('caption', {
          caption: complete ? t('complete') : exercise.diagram.caption,
        })}
        stones={stones}
        markers={
          complete || exercise.kind === 'area'
            ? found
            : exercise.diagram.markers
        }
        selectedPoints={found}
        onIntersectionClick={selectIntersection}
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p
          className="text-sm font-medium"
          aria-live="polite"
          aria-atomic="true"
        >
          {exercise.kind === 'area'
            ? t('areaProgress', {
                count: found.length,
                total: areaPoints.length,
              })
            : t('moveProgress', { count: complete ? 1 : 0 })}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasSelected}
          onClick={() => {
            setStones(exercise.diagram.stones);
            setFound([]);
            setFeedback(t('reset'));
            setHasSelected(false);
            setComplete(false);
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
            {exercise.successFeedback}
          </p>
        ) : (
          feedback
        )}
      </div>
    </div>
  );
}
