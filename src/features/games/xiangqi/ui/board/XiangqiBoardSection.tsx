import { CELL, COLS, ROWS } from '../../utils';

export function XiangqiBoardSection({
  position = 'top',
  offsetY = 0,
}: {
  position?: 'top' | 'bottom';
  offsetY?: number;
}) {
  return (
    <g stroke="black" strokeWidth={0.5} transform={`translate(0 ${offsetY})`}>
      <XiangqiSectionGrid />
      <XiangqiSectionPalace position={position} />
    </g>
  );
}

function XiangqiSectionGrid() {
  return (
    <>
      {Array.from({ length: COLS + 1 }, (_, i) => (
        <line
          key={`vert-${i}`}
          x1={CELL * i}
          y1={0}
          x2={CELL * i}
          y2={CELL * ROWS}
        />
      ))}

      {Array.from({ length: ROWS + 1 }, (_, i) => (
        <line
          key={`horiz-${i}`}
          x1={0}
          y1={CELL * i}
          x2={CELL * COLS}
          y2={CELL * i}
        />
      ))}
    </>
  );
}

function XiangqiSectionPalace({
  position = 'top',
}: {
  position: 'top' | 'bottom';
}) {
  const x1 = 3 * CELL;
  const x2 = 5 * CELL;

  const y1 = position === 'top' ? 0 : 2 * CELL;
  const y2 = position === 'top' ? 2 * CELL : 4 * CELL;

  return (
    <g strokeWidth={0.75}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x2} y1={y1} x2={x1} y2={y2} />
    </g>
  );
}
