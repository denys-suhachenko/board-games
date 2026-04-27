import { getPointPosition, INITIAL_XIANGQI_BOARD } from '../../utils';
import { XiangqiPieceView } from './XiangqiPieceView';

export function XiangqiBoardPieces() {
  return INITIAL_XIANGQI_BOARD.map((row, rowIndex) =>
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
