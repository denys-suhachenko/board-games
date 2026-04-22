import { GoBoard } from '@/components/go_game/ui';

export default function GoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-4 md:py-8">
      <div className="mb-8 rounded-md border border-black bg-[#EFE9DC] p-2 shadow-sm">
        <div className="rounded-md border-2 border-[#B79B63] bg-[#EFE9DC] p-6">
          <h1 className="text-center font-serif text-3xl font-semibold text-[#4C1C01]">
            Go (围棋/圍棋)
          </h1>
        </div>
      </div>

      <GoBoard
        options={{
          size: 19,
          cell: 32,
          padding: 48,
        }}
      />
    </div>
  );
}
