import { cn } from '@/shared/lib/utils';

import { GoBoard, GoBoardOptions, GoStonePoint } from '../types';

type GoHitAreasProps = {
  board: GoBoard;
  options: GoBoardOptions;
  points: GoStonePoint[];
  onClick?: (x: number, y: number) => void;
};

export function GoHitAreas({
  board,
  options: { cell },
  points,
  onClick,
}: GoHitAreasProps) {
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
