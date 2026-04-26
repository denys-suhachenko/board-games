import { XiangqiBoard } from '@/features/games/xiangqi/ui/XiangqiBoard';

export default function XiangqiPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-4 md:py-8">
      <div className="mb-8 rounded-md border border-black bg-[#EFE9DC] p-2 shadow-sm">
        <div className="rounded-md border-2 border-gray-400 bg-[#EFE9DC] p-8">
          <h1 className="text-center font-serif text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
            Xiangqi (象棋)
          </h1>
        </div>
      </div>

      <XiangqiBoard />
    </div>
  );
}
