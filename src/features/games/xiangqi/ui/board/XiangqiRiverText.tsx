import { CELL, GRID_WIDTH } from '../../utils';

const RIVER_LABELS = [
  { x: GRID_WIDTH * 0.25, label: '楚河' },
  { x: GRID_WIDTH * 0.75, label: '漢界' },
];

export function XiangqiRiverText() {
  const riverCenterY = CELL * 4.5;

  return (
    <g
      fill="#6b5637"
      stroke="none"
      fontSize={CELL * 0.36}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {RIVER_LABELS.map(({ x, label }) => (
        <text key={label} x={x} y={riverCenterY}>
          {label}
        </text>
      ))}
    </g>
  );
}
