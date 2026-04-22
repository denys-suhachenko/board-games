import { LatrunculiGameBoard } from '@/components/latrunculi_game/ui';

export default function LatrunculiPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-4 md:py-8">
      <div className="mb-8 rounded-md border border-black bg-[#EFE9DC] p-2 shadow-sm">
        <div className="rounded-md border-2 border-[#B79B63] bg-[#EFE9DC] p-6">
          <h1 className="text-center font-serif text-3xl font-semibold text-[#4C1C01]">
            Ludus Latrunculorum
          </h1>
        </div>
      </div>

      <LatrunculiGameBoard />
    </div>
  );
}
