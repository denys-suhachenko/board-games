import type { ComponentProps } from 'react';
import type { GoLessonDiagram } from './GoLessonDiagram';

export type GoDiagram = Omit<
  ComponentProps<typeof GoLessonDiagram>,
  'onIntersectionClick' | 'selectedPoints'
>;

export type GoLessonSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  diagrams: readonly [GoDiagram, ...GoDiagram[]];
};

export type GoLessonPoint = { x: number; y: number };
export type GoLessonStone = GoDiagram['stones'][number];

type GoQuickCheckBase = {
  question: string;
  diagram: GoDiagram;
  successFeedback: string;
};

export type GoQuickCheck = GoQuickCheckBase &
  (
    | { kind: 'ko'; koPoint: GoLessonPoint }
    | {
        kind: 'move';
        color: GoLessonStone['color'];
        target: GoLessonPoint;
        incorrectFeedback: string;
        hints?: readonly { point: GoLessonPoint; feedback: string }[];
      }
    | {
        kind: 'area';
        color: GoLessonStone['color'];
        territory: readonly GoLessonPoint[];
      }
  );
