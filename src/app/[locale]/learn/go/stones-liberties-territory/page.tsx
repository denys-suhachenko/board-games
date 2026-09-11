import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { Link } from '@/shared/i18n/navigation';
import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { getGoLessons } from '@/features/games/go/data/lessons';
import { LessonHeader } from '@/features/learn/ui/LessonHeader';
import { LessonOutline } from '@/features/learn/ui/LessonOutline';
import { LessonNavigation } from '@/features/learn/ui/LessonNavigation';
import {
  StonesLibertiesTerritoryLesson,
  getStonesLibertiesTerritoryOutline,
} from '@/features/games/go/ui/lessons/StonesLibertiesTerritoryLesson';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('go.lessons');
  return {
    title: t('labels.metadataTitle', {
      title: t('stonesLibertiesTerritory.title'),
    }),
    description: t('stonesLibertiesTerritory.description'),
  };
}

export default async function GoFirstLessonPage() {
  const t = await getTranslations('go.lessons');
  const common = await getTranslations('common');
  const lessons = getGoLessons(t);
  const lessonIndex = lessons.findIndex(
    ({ id }) => id === 'stonesLibertiesTerritory',
  );
  const lesson = lessons[lessonIndex];
  const messages = await getMessages();
  return (
    <NextIntlClientProvider
      messages={{
        go: {
          lessons: {
            exercises: { liberties: messages.go.lessons.exercises.liberties },
            diagram: messages.go.lessons.diagram,
          },
        },
        common: { exercises: messages.common.exercises },
      }}
    >
      <Container className="py-10">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{common('navigation.home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/learn">{common('navbar.learn')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/learn#go">{t('labels.game')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <LessonHeader
          labels={{
            number: t('labels.lessonNumber', {
              game: t('labels.game'),
              number: lesson.order,
            }),
            progress: t('labels.progress', {
              current: lesson.order,
              total: lessons.length,
            }),
            readingTime: t('labels.readingTime', {
              minutes: lesson.readingMinutes,
            }),
            level: common(`levels.${lesson.level}`),
          }}
          lesson={lesson}
        />
        <div className="grid items-start gap-x-6 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
          <LessonOutline
            items={getStonesLibertiesTerritoryOutline(t)}
            labels={{
              title: t('labels.inThisLesson'),
              accessibility: t('labels.outline'),
            }}
          />
          <div className="min-w-0">
            <StonesLibertiesTerritoryLesson />
            <LessonNavigation
              labels={{
                previous: t('labels.previous'),
                next: t('labels.next'),
                backToLearn: t('labels.backToLearn'),
                comingSoon: t('labels.comingSoon'),
                accessibility: t('labels.navigation'),
              }}
              nextLesson={lessons[lessonIndex + 1]}
            />
          </div>
        </div>
      </Container>
    </NextIntlClientProvider>
  );
}
