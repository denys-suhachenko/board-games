import { GoBoardOptions } from '../../types';
import { getHoshiCoordinates } from '../../utils';

type GoBoardGridProps = {
  innerSize: number;
  canvasSize: number;
  options: GoBoardOptions;
};

export function GoBoardGrid({
  innerSize,
  canvasSize,
  options,
}: GoBoardGridProps) {
  const getCoords = (index: number) => options.cell * index + options.padding;

  return (
    <>
      <rect x={0} y={0} width={canvasSize} height={canvasSize} fill="#F5DEBE" />

      {Array.from({ length: options.size }, (_, i) => (
        <g key={`line-${i}`} stroke="black" strokeWidth={0.5}>
          <line
            x1={options.padding}
            y1={getCoords(i)}
            x2={innerSize + options.padding}
            y2={getCoords(i)}
          />

          <line
            x1={getCoords(i)}
            y1={options.padding}
            x2={getCoords(i)}
            y2={innerSize + options.padding}
          />
        </g>
      ))}

      {getHoshiCoordinates(options).map(([x, y]) => (
        <circle
          key={`hoshi-${x}-${y}`}
          r={options.cell * 0.075}
          fill="black"
          cx={x}
          cy={y}
        />
      ))}
    </>
  );
}
