import { BoardOptions, BoardSize } from '../types';

type GoBoardHoshiProps = {
  options: BoardOptions;
};

export function BoardHoshi({
  options: { cell, padding, size },
}: GoBoardHoshiProps) {
  const points: Record<BoardSize, number[]> = {
    9: [2, 6],
    13: [3, 6, 9],
    19: [3, 9, 15],
  };

  const coordinates = points[size].flatMap((row) =>
    points[size].map((col) => [padding + cell * row, padding + cell * col]),
  );

  return coordinates.map(([x, y]) => (
    <circle
      key={`hoshi-${x}-${y}`}
      r={cell * 0.075}
      fill="black"
      cx={x}
      cy={y}
    />
  ));
}
