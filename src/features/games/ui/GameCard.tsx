import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Grid3x3Icon, UsersIcon } from 'lucide-react';

import { Link } from '@/shared/i18n/navigation';

import { GameListItem } from '../model/types';

type GameCardProps = {
  game: GameListItem;
};

export default async function GameCard({ game }: GameCardProps) {
  const t = await getTranslations('games');
  const common = await getTranslations('common');

  return (
    <Link
      key={game.id}
      href={`/games/${game.id}`}
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
        <div className="mt-auto flex flex-col items-start border-t pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6">
            <div className="text-muted-foreground flex items-center gap-x-2 text-sm font-medium">
              <UsersIcon className="size-4" />{' '}
              {t('card.players', {
                count: game.players,
              })}
            </div>
            <div className="text-muted-foreground flex items-center gap-x-2 text-sm font-medium">
              <Grid3x3Icon className="size-4" /> {game.size}
            </div>
          </div>
          <div className="mt-4 w-full rounded-full border px-4 py-2 text-center text-sm md:mt-0 md:w-auto md:text-left">
            {common('actions.view_game')}
          </div>
        </div>
      </div>
    </Link>
  );
}
