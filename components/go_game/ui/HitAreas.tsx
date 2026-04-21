import { BoardOptions, Point } from '../types';

type HitAreasProps = {
  options: BoardOptions;
  points: Point[];
  onClick?: (x: number, y: number) => void;
};

export function HitAreas({
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
      className="cursor-pointer fill-transparent hover:fill-black/5"
      onClick={() => onClick?.(x, y)}
    />
  ));
}
