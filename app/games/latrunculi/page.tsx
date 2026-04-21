import Image from 'next/image';

import { cn } from '@/shared/lib/utils';

type Figure = {
  color: 'white' | 'black';
  type: 'disk' | 'pyramid';
};

type PieceProps = {
  cell: Figure;
};

export function Piece({ cell }: PieceProps) {
  let src = '';

  if (cell.color === 'black') {
    src =
      cell.type === 'pyramid'
        ? '/figures/pyramids/pyramid_black_top.svg'
        : '/figures/disks/disk_black_flat.svg';
  } else {
    src =
      cell.type === 'pyramid'
        ? '/figures/pyramids/pyramid_white_top.svg'
        : '/figures/disks/disk_white_flat.svg';
  }

  return <Image src={src} alt={cell.color} width={90} height={90} />;
}

function initBoard(width: number, height: number) {
  const board = Array.from({ length: height }, () =>
    Array<Figure | null>(width).fill(null),
  );
  const centerX = Math.floor(width / 2);

  for (let i = 0; i < width; i++) {
    board[0][i] = { color: 'white', type: 'disk' };
    board[1][i] = { color: 'white', type: 'disk' };

    board[height - 1][i] = { color: 'black', type: 'disk' };
    board[height - 2][i] = { color: 'black', type: 'disk' };
  }

  board[0][centerX] = { color: 'white', type: 'pyramid' };
  board[height - 1][centerX] = { color: 'black', type: 'pyramid' };

  return board;
}

export default function LatrunculiPage() {
  const board = initBoard(7, 7);

  return (
    <div className="mx-auto w-full max-w-4xl p-6 xl:p-4">
      <div className="mb-8 rounded-sm border border-gray-900 bg-[#E8E4DB] p-6 shadow-sm">
        <h1 className="text-center font-serif text-3xl font-semibold text-[#4B2403]">
          Ludus Latrunculorum
        </h1>
      </div>

      <div className="rounded-md border border-black bg-(--board-ceramic-border) p-2 shadow-(--board-shadow)">
        <div className="rounded-md border border-white bg-(--board-ceramic-bg) p-2">
          <div className="grid aspect-square grid-cols-7 grid-rows-7 bg-(--board-ceramic-cell-border)">
            {board.map((row, i) =>
              row.map((cell, j) => {
                return (
                  <div
                    key={`${i}-${j}`}
                    className={cn(
                      'flex items-center justify-center rounded-xs border border-(--board-ceramic-cell-border) select-none md:rounded-sm',
                      (i + j) % 2 === 0
                        ? 'bg-(--board-ceramic-cell)'
                        : 'bg-(--board-ceramic-cell-alternate)',
                    )}
                  >
                    {cell && <Piece cell={cell} />}
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
