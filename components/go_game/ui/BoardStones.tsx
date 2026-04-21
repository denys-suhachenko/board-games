import { Board, BoardOptions, Point } from '../types';

type GoBoardHitAreasProps = {
  board: Board;
  points: Point[];
  cell: number;
  onClick?: (x: number, y: number) => void;
};

export function BoardStones({ board, points, cell }: GoBoardHitAreasProps) {
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
