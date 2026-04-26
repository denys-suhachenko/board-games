import {
  GoBoard,
  GoStonePoint,
  GoStone,
  GoBoardSize,
  GoBoardOptions,
} from './types';

export function createBoardPoints({
  size,
  cell,
  padding = 0,
}: GoBoardOptions): GoStonePoint[] {
  return Array.from({ length: size }, (_, x) =>
    Array.from({ length: size }, (_, y) => ({
      x,
      y,
      cx: padding + cell * x,
      cy: padding + cell * y,
    })),
  ).flat();
}

export function initBoard(size: number): GoBoard {
  return Array.from({ length: size }, () => Array<GoStone>(size).fill(null));
}

export function getHoshiCoordinates({ size, padding, cell }: GoBoardOptions) {
  const points: Record<GoBoardSize, number[]> = {
    9: [2, 6],
    13: [3, 6, 9],
    19: [3, 9, 15],
  };

  return points[size].flatMap((row) =>
    points[size].map((col) => [cell * row + padding, cell * col + padding]),
  );
}
