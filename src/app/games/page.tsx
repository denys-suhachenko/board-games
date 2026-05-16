import Image from 'next/image';

import { Container } from '@/shared/layout';
import Link from 'next/link';

const games = [
  {
    id: 'go',
    title: 'Go (围棋)',
    img: '/categories/go_angle.png',
    link: '/games/go',
    country: 'China',
  },
  {
    id: 'xiangqi',
    title: 'Xiangqi (象棋)',
    img: '/categories/xiangqi.png',
    link: '/games/xiangqi',
    country: 'Ancient China',
  },
  {
    id: 'shogi',
    title: 'Shogi (将棋)',
    img: '/categories/shogi.png',
    link: '/games/shogi',
    country: 'Japan',
  },
  {
    id: 'latrunculi',
    title: 'Latrunculi',
    img: '/categories/latrunculi.png',
    link: '/games/latrunculi',
    country: 'Ancient Rome',
  },
];

export default function GamesPage() {
  return (
    <Container className="py-6">
      <section className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Games</h1>
          <p className="text-muted-foreground">
            Explore game guides, rules, and helpful tips for every kind of board
            game night.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 md:gap-10">
          {games.map((game) => (
            <Link key={game.id} href={game.link} className="group">
              <Image
                src={game.img}
                alt={game.title}
                width={384}
                height={384}
                loading="eager"
                className="w-full rounded-md shadow-xl/20 duration-200 group-hover:brightness-80"
              />
              <h3 className="mt-3 text-lg font-medium">{game.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
