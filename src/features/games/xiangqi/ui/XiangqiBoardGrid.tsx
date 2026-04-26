import { BOARD_HEIGHT, BOARD_WIDTH, CELL, PADDING, ROWS } from '../utils';

import { XiangqiBoardSection } from './XiangqiBoardSection';
import { XiangqiRiverText } from './XiangqiRiverText';

export function XiangqiBoardGrid() {
  return (
    <svg
      viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
      className="block h-full w-auto max-w-full rounded-md border shadow-md/10"
    >
      <rect
        x={0}
        y={0}
        width={BOARD_WIDTH}
        height={BOARD_HEIGHT}
        fill="#ead8a8"
      />

      <g transform={`translate(${PADDING} ${PADDING})`}>
        <XiangqiBoardSection position="top" />
        <XiangqiBoardSection position="bottom" offsetY={CELL * (ROWS + 1)} />

        <XiangqiRiverText />
      </g>
    </svg>
  );
}
