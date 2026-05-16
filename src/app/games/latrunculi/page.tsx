import { LatrunculiGameBoard } from '@/features/games/latrunculi/ui/LatrunculiGameBoard';
import Image from 'next/image';

export default function LatrunculiPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-4 md:py-8">
      <div className="mb-8 w-full rounded-md border border-black bg-[#EFE9DC] p-2 shadow-sm">
        <div className="flex w-full items-center justify-center rounded-md border-2 border-[#B79B63] bg-[#EFE9DC] p-4 lg:p-8">
          <div className="flex flex-nowrap items-center gap-x-10">
            <Image
              src="/icons/laurel_wreath_left.svg"
              alt="laurel_wreath"
              className="hidden md:block"
              width={48}
              height={92}
            />
            <h1 className="text-center font-serif text-xl font-semibold text-[#4C1C01] md:text-2xl lg:text-3xl">
              LVDVS LATRVNCVLORVM
            </h1>
            <Image
              src="/icons/laurel_wreath_right.svg"
              alt="laurel_wreath"
              className="hidden md:block"
              width={48}
              height={92}
            />
          </div>
        </div>
      </div>

      <LatrunculiGameBoard />
    </div>
  );
}
