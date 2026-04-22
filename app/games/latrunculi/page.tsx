import Image from 'next/image';

import LaurelWreathLeft from '@/public/laurel_wreath_left.svg';
import LaurelWreathRight from '@/public/laurel_wreath_right.svg';

import { LatrunculiGameBoard } from '@/components/latrunculi_game/ui';

export default function LatrunculiPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-4 md:py-8">
      <div className="mb-8 w-full rounded-md border border-black bg-[#EFE9DC] p-2 shadow-sm">
        <div className="flex w-full items-center justify-center rounded-md border-2 border-[#B79B63] bg-[#EFE9DC] p-4 lg:p-8">
          <div className="flex flex-nowrap items-center gap-x-8">
            <Image
              src={LaurelWreathLeft}
              alt="laurel_wreath"
              className="hidden md:block"
              style={{
                width: 48,
                height: 'auto',
              }}
            />
            <h1 className="text-center font-serif text-xl font-semibold text-[#4C1C01] md:text-2xl lg:text-3xl">
              LVDVS LATRVNCVLORVM
            </h1>
            <Image
              src={LaurelWreathRight}
              alt="laurel_wreath"
              className="hidden md:block"
              style={{
                width: 48,
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>

      <LatrunculiGameBoard />
    </div>
  );
}
