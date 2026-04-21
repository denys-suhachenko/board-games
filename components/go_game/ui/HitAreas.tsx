import { cn } from '@/lib/utils';
import { Board, BoardOptions, Point } from '../types';

type HitAreasProps = {
  board: Board;
  options: BoardOptions;
  points: Point[];
  onClick?: (x: number, y: number) => void;
};

export function HitAreas({
  board,
  points,
  options: { cell },
  onClick,
}: HitAreasProps) {
  return points.map(({ x, y, cx, cy }) => (
    <rect
      key={`hit-${x}-${y}`}
      x={cx - cell / 2}
      y={cy - cell / 2}
      width={cell}
      height={cell}
      className={cn(
        board[x][y] === null
          ? 'cursor-pointer fill-transparent hover:fill-black/5'
          : 'fill-transparent',
      )}
      onClick={() => onClick?.(x, y)}
    />
  ));
}
