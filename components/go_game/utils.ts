import { Board, Point, Stone } from './types';

export function createBoardPoints(
  size: number,
  cell: number,
  padding = 0,
): Point[] {
  return Array.from({ length: size }, (_, x) =>
    Array.from({ length: size }, (_, y) => ({
      x,
      y,
      cx: padding + cell * x,
      cy: padding + cell * y,
    })),
  ).flat();
}

export function initBoard(size: number): Board {
  return Array.from({ length: size }, () => Array<Stone>(size).fill(null));
}
