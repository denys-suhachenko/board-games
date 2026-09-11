import { GoBoard } from '@/features/games/go/ui/board/GoBoard';
import { GoOptionsPanel } from '@/features/games/go/ui/GoOptionsPanel';
import { Container } from '@/shared/layout';

export default function GoGamePage() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-[320px_1fr] gap-6">
        <GoOptionsPanel />

        <div className="bg-card flex flex-col rounded-md border p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="text-foreground text-lg font-semibold">
                Computer &middot; White
              </div>
              <div className="text-muted-foreground text-sm">Captured: 3</div>
            </div>

            <div className="text-muted-foreground font-medium">12:51</div>
          </div>

          <GoBoard
            options={{
              size: 19,
              cell: 32,
              padding: 32,
            }}
            showAnalysis
          />

          <div className="mt-8 flex items-center justify-between">
            <div>
              <div className="text-foreground text-lg font-semibold">
                You &middot; Black
              </div>
              <div className="text-primary text-sm font-medium">Your turn</div>
            </div>

            <div className="text-foreground font-medium">13:04</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
