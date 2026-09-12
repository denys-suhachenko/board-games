import { Container } from '@/shared/layout';
import { XiangqiOptionsPanel } from '@/features/games/xiangqi/ui/XiangqiOptionsPanel';
import { XiangqiGameContainer } from '@/features/games/xiangqi/ui/board/XiangqiGameContainer';

export default function XiangqiGame() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-[320px_1fr] gap-6">
        <XiangqiOptionsPanel />
        <XiangqiGameContainer />
      </div>
    </Container>
  );
}
