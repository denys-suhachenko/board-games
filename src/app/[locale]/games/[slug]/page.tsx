import { ArrowRight } from 'lucide-react';

import { Container } from '@/shared/layout';
import { cn } from '@/shared/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';

import { GoBoard } from '@/features/games/go/ui/board/GoBoard';
import { getGameById } from '@/features/games/api/games';
import { XiangqiBoard } from '@/features/games/xiangqi/ui/board/XiangqiBoard';
import { LatrunculiGameBoard } from '@/features/games/latrunculi/ui/LatrunculiGameBoard';
import { getTranslations } from 'next-intl/server';

type GamePage = {
  params: Promise<{
    slug: string;
  }>;
};

function GameBoard({ slug }: { slug: string }) {
  switch (slug) {
    case 'go':
      return (
        <GoBoard
          options={{
            size: 19,
            cell: 32,
            padding: 32,
          }}
        />
      );
    case 'xiangqi':
      return <XiangqiBoard />;
    case 'shogi':
      return (
        <div className="aspect-square h-full w-full rounded-md border bg-[#F5DEBE] shadow-md/10" />
      );
    case 'latrunculi':
      return <LatrunculiGameBoard />;
    default:
      return undefined;
  }
}

export default async function GamePage({ params }: GamePage) {
  const { slug } = await params;
  const game = await getGameById(slug);

  const t = await getTranslations('games');

  if (!game) {
    return null;
  }

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
            <BreadcrumbLink asChild>
              <Link href="/games">{t('breadcrumbs.games')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{game.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-32 xl:grid-cols-[4fr_3fr]">
        <div>
          <header>
            <h1 className="font-serif text-6xl leading-20 font-medium">
              {game.title}{' '}
              {game.originalTitle && (
                <span className="text-primary" lang="zh-Hans">
                  ({game.originalTitle})
                </span>
              )}
            </h1>

            {game.subtitle && (
              <p className="text-muted-foreground mt-4 text-sm font-medium">
                {game.subtitle}
              </p>
            )}

            <p className="text-muted-foreground mt-6">{game.description}</p>
          </header>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-y py-4 md:grid-cols-4">
            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                {t('origin')}
              </dt>
              <dt className="text-lg font-semibold">{game.origin}</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                {t('players')}
              </dt>
              <dt className="text-lg font-semibold">{game.players}</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                {t('board')}
              </dt>
              <dt className="text-lg font-semibold">{game.size}</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                {t('pieces')}
              </dt>
              <dt className="text-lg font-semibold">{game.pieces.total}</dt>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="shadow-primary/20 border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href={`/games/${slug}/play`}>
                {t('actions.play_now')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 h-10 rounded-full px-8 backdrop-blur-sm"
            >
              <Link href="/learn">{t('actions.read_rules')}</Link>
            </Button>
          </div>
        </div>

        <div className="hidden xl:block">
          <GameBoard slug={slug} />
        </div>
      </div>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">{game.pieces.title}</h2>

        <div
          className={cn(
            'bg-border grid gap-px border',
            'md:grid-cols-2',
            `lg:grid-cols-[repeat(${game.pieces.columns || 4},1fr)]`,
          )}
        >
          {game.pieces.items.map((piece) => (
            <div
              key={piece.title}
              className="bg-background hover:bg-card p-6 transition-colors duration-300 md:max-lg:last:odd:col-span-2"
            >
              <div className="text-primary mb-4 text-5xl font-medium">
                {piece.sign}
              </div>
              <h3 className="mb-4 text-lg font-medium">{piece.title}</h3>
              <p className="text-muted-foreground text-[13px]">
                {piece.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">{game.rules.title}</h2>

        <div
          className={cn(
            'bg-border grid gap-px border',
            `md:grid-cols-2 lg:grid-cols-${game.rules.columns || 3}`,
          )}
        >
          {game.rules.items.map((rule) => (
            <div key={rule.order} className="bg-background p-6">
              <div className="text-muted-foreground mb-4 text-xs">
                {rule.order}
              </div>
              <h3 className="mb-4 text-xl font-medium">
                {rule.title} (
                <span className="text-primary">{rule.chinese}</span>)
              </h3>
              <p className="text-muted-foreground text-sm">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">{game.history.title}</h2>

        <div
          className={cn(
            'grid gap-px',
            `md:grid-cols-2 lg:grid-cols-${game.history.columns}`,
          )}
        >
          {game.history.items.map((item) => (
            <div
              key={item.date}
              className="before:bg-primary relative border-l p-6 before:absolute before:-top-1.5 before:-left-1.5 before:size-3 before:rounded-full md:border-t"
            >
              <div className="text-muted-foreground mb-4 text-xs">
                {item.date}
              </div>
              <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-5xl font-medium">
            {t.rich('ready_to_play', {
              highlighted: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h2>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center lg:mt-0">
            <Button
              asChild
              className="border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="/games">
                {t('actions.quick_match')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
