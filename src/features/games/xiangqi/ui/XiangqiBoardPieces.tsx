import { createInitialXiangqiBoard, getPointPosition } from '../utils';
import { XiangqiPieceView } from './XiangqiPieceView';

export function XiangqiBoardPieces() {
  const board = createInitialXiangqiBoard();

  return board.map((row, rowIndex) =>
    row.map((piece, colIndex) => {
      if (!piece) {
        return null;
      }

      const { left, top } = getPointPosition(rowIndex, colIndex);

      return (
        <XiangqiPieceView key={piece.id} piece={piece} left={left} top={top} />
      );
    }),
  );
}
