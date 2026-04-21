import { GoBoard } from '@/components/go_game/ui';

export default function GoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl p-6 xl:p-4">
      <div className="mb-8 rounded-sm border border-gray-900 bg-[#E8E4DB] p-6 shadow-sm">
        <h1 className="text-center text-3xl font-semibold text-[#4B2403]">
          Go (圍棋)
        </h1>
      </div>

      <div>
        <GoBoard
          options={{
            size: 19,
            cell: 32,
            padding: 48,
          }}
        />
      </div>
    </div>
  );
}
