import Image from 'next/image';
import { Link } from '@/shared/i18n/navigation';
import { Grid3x3Icon, UsersIcon } from 'lucide-react';

import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { Input } from '@/shared/ui/input';
import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select';

const games = [
  {
    id: 'go',
    title: 'Go',
    description:
      'An ancient game of territory and influence. Capture more ground than your opponent.',
    img: '/categories/go/go_angle.png',
    link: '/games/go',
    country: 'China',
    category: 'Abstract',
    players: 2,
    size: '19×19',
  },
  {
    id: 'xiangqi',
    title: 'Xiangqi',
    description: 'A river divides the board. Generals never meet face-to-face.',
    img: '/categories/xiangqi/xiangqi.png',
    link: '/games/xiangqi',
    country: 'Ancient China',
    category: 'Wargame',
    players: 2,
    size: '9×10',
  },
  {
    id: 'shogi',
    title: 'Shogi',
    description:
      'Captured pieces switch sides and re-enter play. The most aggressive of the chess family.',
    img: '/categories/shogi/shogi.png',
    link: '/games/shogi',
    country: 'Japan',
    category: 'Wargame',
    players: 2,
    size: '8×8',
  },
  {
    id: 'latrunculi',
    title: 'Latrunculi',
    description:
      'A strategic game from the Roman Empire. Build formations and outflank your rival.',
    img: '/categories/latrunculi/4b3e643e.png',
    link: '/games/latrunculi',
    country: 'Ancient Rome',
    category: 'Historical',
    players: 2,
    size: '9×9',
  },
];

export default function GamesPage() {
  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Games</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Many boards, <span className="text-primary">one home.</span>
        </h1>
      </header>

      <div className="border-y py-6">
        <div className="flex items-center gap-x-4">
          <Input
            placeholder="Search games..."
            className="w-auto min-w-3xs rounded-full"
          />
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Origin"></SelectValue>
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Players"></SelectValue>
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue placeholder="Complexity"></SelectValue>
            </SelectTrigger>
          </Select>
        </div>
      </div>

      <main className="grid grid-cols-3 gap-6 pt-10 pb-20">
        {games.map((game) => (
          <Link
            key={game.id}
            href={game.link}
            className="group bg-card flex flex-col overflow-hidden rounded-md border"
          >
            <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b transition-colors">
              <Image
                src={game.img}
                alt={game.title}
                width={384}
                height={384}
                loading="eager"
                className="w-full"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col p-4">
              <h2
                className={
                  'group-hover:text-primary mb-3 text-2xl leading-[1.2] font-medium tracking-[-0.01em] text-pretty transition-colors'
                }
              >
                {game.title}
              </h2>
              <p className="mb-4 text-sm leading-[1.55] text-pretty text-gray-300">
                {game.description}
              </p>
              <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase">
                <span className="text-primary">{game.country}</span>
                &middot;
                <span>{game.category}</span>
              </div>
              <div className="mt-auto flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-x-6">
                  <div className="text-muted-foreground flex items-center gap-x-2 text-sm font-medium">
                    <UsersIcon className="size-4" /> {game.players} players
                  </div>
                  <div className="text-muted-foreground flex items-center gap-x-2 text-sm font-medium">
                    <Grid3x3Icon className="size-4" /> {game.size}
                  </div>
                </div>
                <div className="rounded-full border px-4 py-2 text-sm">
                  View game
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </Container>
  );
}
