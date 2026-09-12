import { Container } from '@/shared/layout';

import GoGame from '@/features/games/go/ui/GoGame';
import XiangqiGame from '@/features/games/xiangqi/ui/XiangqiGame';

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GamePlayPage({ params }: GamePageProps) {
  const { slug } = await params;

  let content = (
    <h1 className="text-center text-4xl font-medium">To be released...</h1>
  );

  if (slug === 'go') {
    content = <GoGame />;
  } else if (slug === 'go') {
    content = <XiangqiGame />;
  }

  return <Container className="py-10">{content}</Container>;
}
