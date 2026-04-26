import { GoBoard, GoStonePoint } from '../types';

type GoBoardStonesProps = {
  board: GoBoard;
  points: GoStonePoint[];
  cell: number;
  onClick?: (x: number, y: number) => void;
};

export function GoBoardStones({ board, points, cell }: GoBoardStonesProps) {
  return points.map(({ x, y, cx, cy }) =>
    board[x][y] ? (
      <use
        key={`stone-${x}-${y}`}
        href={board[x][y] === 'black' ? '#go-stone-black' : '#go-stone-white'}
        x={cx - cell / 2}
        y={cy - cell / 2}
        width={cell}
        height={cell}
      />
    ) : null,
  );
}
