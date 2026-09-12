import { getTranslations } from 'next-intl/server';

import { Link } from '@/shared/i18n/navigation';
import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { getGames } from '@/features/games/api/games';
import GameCard from '@/features/games/ui/GameCard';
import GamesFilter from '@/features/games/ui/GamesFilter';

export default async function GamesPage() {
  const t = await getTranslations('games');

  const games = await getGames();

  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">{t('breadcrumbs.home')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t('breadcrumbs.games')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          {t.rich('header.title', {
            highlighted: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h1>
      </header>

      <GamesFilter />

      <main className="grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </main>
    </Container>
  );
}
