import { BoardOptions } from '../types';

type BoardGridProps = {
  innerSize: number;
  options: BoardOptions;
};

export function BoardGrid({
  innerSize,
  options: { size, cell, padding },
}: BoardGridProps) {
  const getCoord = (index: number) => padding + cell * index;

  return Array.from({ length: size }, (_, i) => {
    const position = getCoord(i);

    return (
      <g key={`line-${i}`} stroke="black" strokeWidth={0.5}>
        <line
          x1={padding}
          y1={position}
          x2={padding + innerSize}
          y2={position}
        />
        <line
          x1={position}
          y1={padding}
          x2={position}
          y2={padding + innerSize}
        />
      </g>
    );
  });
}
