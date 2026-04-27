import { XiangqiBoard } from '@/features/games/xiangqi/ui/board/XiangqiBoard';
import { Container } from '@/shared/layout';

export default function XiangqiPage() {
  return (
    <Container className="py-6">
      <XiangqiBoard />
    </Container>
  );
}
