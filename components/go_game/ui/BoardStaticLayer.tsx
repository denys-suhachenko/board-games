import { memo } from 'react';

import { BoardGrid } from './BoardGrid';
import { BoardHoshi } from './BoardHoshi';
import { BoardOptions } from '../types';

type BoardStaticLayerProps = {
  canvasSize: number;
  innerSize: number;
  options: BoardOptions;
};

export const BoardStaticLayer = memo(function ({
  options,
  canvasSize,
  innerSize,
}: BoardStaticLayerProps) {
  return (
    <>
      {/* canvas */}
      <rect x={0} y={0} width={canvasSize} height={canvasSize} fill="#F5DEBE" />

      {/* grid lines */}
      <BoardGrid options={options} innerSize={innerSize} />

      {/* hoshi points */}
      <BoardHoshi options={options} />
    </>
  );
});
