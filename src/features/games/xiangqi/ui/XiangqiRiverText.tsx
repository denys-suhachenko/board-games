import { CELL, GRID_WIDTH } from '../utils';

export function XiangqiRiverText() {
  const riverCenterY = CELL * 4.5;

  return (
    <>
      <text
        x={GRID_WIDTH * 0.25}
        y={riverCenterY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#6b5637"
        stroke="none"
        fontSize={CELL * 0.36}
      >
        楚河
      </text>

      <text
        x={GRID_WIDTH * 0.75}
        y={riverCenterY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#6b5637"
        stroke="none"
        fontSize={CELL * 0.36}
      >
        漢界
      </text>
    </>
  );
}
