import { GoBoard } from '@/features/games/go/ui/board/GoBoard';
import { GoOptionsPanel } from '@/features/games/go/ui/GoOptionsPanel';
import { Container } from '@/shared/layout';

export default function GoPage() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-[1fr_320px] gap-6">
        <GoBoard
          options={{
            size: 19,
            cell: 32,
            padding: 32,
          }}
        />

        <GoOptionsPanel />
      </div>
    </Container>
  );
}
