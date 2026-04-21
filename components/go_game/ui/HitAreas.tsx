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
    <circle
      key={`hit-${x}-${y}`}
      r={cell * 0.5}
      cx={cx}
      cy={cy}
      className="cursor-pointer fill-transparent hover:fill-black/5"
      onClick={() => onClick?.(x, y)}
    />
  ));
}
