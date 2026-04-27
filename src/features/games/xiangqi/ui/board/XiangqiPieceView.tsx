import { XiangqiPiece } from '../../types';
import { getPieceImage, HIT_SIZE_PERCENT } from '../../utils';

export function XiangqiPieceView({
  piece,
  left,
  top,
}: {
  piece: XiangqiPiece;
  left: number;
  top: number;
}) {
  return (
    <button
      type="button"
      className="absolute cursor-pointer rounded-full transition-[left,top,transform] duration-200 ease-out"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${HIT_SIZE_PERCENT}%`,
        aspectRatio: '1 / 1',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src={getPieceImage(piece)}
        alt={`${piece.side} ${piece.type}`}
        draggable={false}
        className="h-full w-full select-none"
      />
    </button>
  );
}
