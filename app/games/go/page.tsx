import { GoBoard } from '@/components/go_game/ui';

export default function GoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl p-6 xl:p-4">
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
