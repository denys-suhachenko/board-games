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
        ? '/figures/pyramids/pyramid_black.svg'
        : '/figures/disks/disk_black_shadow.svg';
  } else {
    src =
      cell.type === 'pyramid'
        ? '/figures/pyramids/pyramid_white.svg'
        : '/figures/disks/disk_white_shadow.svg';
  }

  return (
    <Image
      src={src}
      alt={cell.color}
      loading="eager"
      className={cn(
        'transition duration-300',
        cell.color === 'black' ? 'hover:brightness-60' : 'hover:brightness-90',
      )}
      width={80}
      height={80}
    />
  );
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

export function LatrunculiGameBoard() {
  const board = initBoard(7, 7);

  return (
    <div className="rounded-sm bg-[#A75934] p-4 shadow-md/10">
      <div className="border border-[#D9B06C] bg-[#A75934] p-8">
        <div className="grid aspect-square grid-cols-7 grid-rows-7 border border-[#7A6148] bg-[#EACDA1] p-2">
          {board.map((row, i) =>
            row.map((cell, j) => {
              return (
                <div
                  key={`${i}-${j}`}
                  className={cn(
                    '-mt-px -ml-px flex items-center justify-center border border-[#7A6148] bg-[#EACDA1] select-none',
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
  );
}

{
  /* <div className="rounded-md border border-black bg-[#EFCFAD] p-1 shadow-(--board-shadow)">
        <div className="rounded-md border border-white/50 bg-[#8D3C1C] p-6">
          <div className="grid aspect-square grid-cols-7 grid-rows-7 rounded-sm border border-[#221504] bg-[#562C02]">
            {board.map((row, i) =>
              row.map((cell, j) => {
                return (
                  <div
                    key={`${i}-${j}`}
                    className={cn(
                      'flex items-center justify-center rounded-xs border border-[#562C02] bg-[#CE9C6B] select-none md:rounded-sm',
                    )}
                  >
                    {cell && <Piece cell={cell} />}
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div> */
}

{
  /* <div className="rounded-md border border-black bg-(--board-ceramic-border) p-2 shadow-(--board-shadow)">
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
      </div> */
}
