import {
  createBoardPoints,
  getPointPosition,
  HIT_SIZE_PERCENT,
} from '../utils';

export function XiangqiHitAreas() {
  const boardPoints = createBoardPoints();

  return boardPoints.map((point) => {
    const { top, left } = getPointPosition(point.row, point.col);
    return (
      <button
        key={`${point.row}-${point.col}`}
        type="button"
        aria-label={`Board point ${point.row}, ${point.col}`}
        className="absolute rounded-full bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${HIT_SIZE_PERCENT}%`,
          transform: 'translate(-50%, -50%)',
          aspectRatio: '1 / 1',
        }}
      />
    );
  });
}
