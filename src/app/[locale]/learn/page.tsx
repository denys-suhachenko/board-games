import { getGoLessons } from '@/features/games/go/data/lessons';
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
import { GAMES } from '@/features/learn/data/lessons';
import { LearnCatalog } from '@/features/learn/ui/LearnCatalog';

export default async function LearnPage() {
  const t = await getTranslations('learn');
  const go = await getTranslations('go.lessons');

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
            <BreadcrumbPage>{t('breadcrumbs.learn')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          {t.rich('header.title', {
            highlighted: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h1>
      </header>

      <LearnCatalog
        games={GAMES.map((game) =>
          game.id === 'go' ? { ...game, lessons: getGoLessons(go) } : game,
        )}
      />
    </Container>
  );
}
