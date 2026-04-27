import { XiangqiBoardGrid } from './XiangqiBoardGrid';
import { XiangqiBoardPieces } from './XiangqiBoardPieces';
import { XiangqiHitAreas } from './XiangqiHitAreas';

export function XiangqiBoard() {
  return (
    <div className="flex h-dvh items-center justify-center p-4">
      <div className="relative h-full">
        <XiangqiBoardGrid />

        <div className="absolute inset-0 z-10">
          <XiangqiHitAreas />
        </div>

        <div className="absolute inset-0 z-20">
          <XiangqiBoardPieces />
        </div>
      </div>
    </div>
  );
}
