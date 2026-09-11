import { getTranslations } from 'next-intl/server';
import { HomeHero } from '@/features/home/ui/HomeHero';
import { Link } from '@/shared/i18n/navigation';
import { ArrowRightIcon } from 'lucide-react';

import { Container } from '@/shared/layout';
import { Button } from '@/shared/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';
import { Badge } from '@/shared/ui/badge';

const games = ['go', 'xiangqi', 'shogi', 'latrunculi'] as const;
const categories = ['all', 'history', 'rules', 'strategy'] as const;
const articles = [
  { id: 'goHistory', category: 'history', readingMinutes: 8, link: '' },
  { id: 'xiangqiBasics', category: 'rules', readingMinutes: 5, link: '' },
  { id: 'shogiDrops', category: 'strategy', readingMinutes: 12, link: '' },
] as const;

export default async function Home() {
  const t = await getTranslations('home');
  return (
    <>
      <HomeHero />

      <section className="py-8">
        <Container>
          <h2 className="sr-only">{t('popularGames')}</h2>

          <div className="grid grid-cols-4 gap-6">
            {games.map((game) => (
              <article
                key={game}
                className="bg-card rounded-md border px-6 py-10 text-center"
              >
                <h3 className="text-lg font-semibold">
                  {t(`games.${game}.title`)}
                </h3>

                <p className="text-muted-foreground mt-2 text-sm font-medium">
                  {t(`games.${game}.description`)}
                </p>

                <Button asChild className="mt-6 rounded-full px-4">
                  <Link href={`/games/${game}`}>{t('play')}</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="mb-6 text-3xl font-semibold">{t('readAndLearn')}</h2>

            <Link
              href="/"
              className="text-primary flex items-center gap-x-1 text-sm font-medium"
            >
              {t('viewAll')} <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <ToggleGroup
            type="single"
            defaultValue="all"
            className="justify-start"
            variant="outline"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category}
                value={category}
                className="px-6 py-3"
              >
                {t(`categories.${category}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="mt-6 grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={article.link}
                className="bg-card group rounded-md border p-6 transition-transform hover:translate-y-[-3px]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary" className="uppercase">
                    {t(`categories.${article.category}`)}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {t('readingTime', { minutes: article.readingMinutes })}
                  </span>
                </div>

                <h3 className="group-hover:text-primary text-lg font-medium transition-colors">
                  {t(`articles.${article.id}.title`)}
                </h3>

                <p className="text-muted-foreground mt-2 text-sm">
                  {t(`articles.${article.id}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
