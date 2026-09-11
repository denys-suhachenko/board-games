import type { GoLessonTranslator } from '../i18n/types';

export const GO_LESSON_DEFINITIONS = [
  {
    id: 'stonesLibertiesTerritory',
    order: 1,
    href: '/learn/go/stones-liberties-territory',
    readingMinutes: 6,
    level: 'beginner',
  },
  {
    id: 'legalMovesAndKo',
    order: 2,
    href: '/learn/go/legal-moves-and-ko',
    readingMinutes: 6,
    level: 'beginner',
  },
  {
    id: 'connectingAndCutting',
    order: 3,
    href: '/learn/go/connecting-and-cutting',
    readingMinutes: 7,
    level: 'beginner',
  },
  {
    id: 'readingLifeAndDeath',
    order: 4,
    href: '/learn/go/reading-life-and-death',
    readingMinutes: 8,
    level: 'intermediate',
  },
  {
    id: 'finishingAndScoring',
    order: 5,
    href: '/learn/go/finishing-and-scoring',
    readingMinutes: 7,
    level: 'intermediate',
  },
  {
    id: 'josekiAndModernOpenings',
    order: 6,
    href: '/learn/go/joseki-and-modern-openings',
    readingMinutes: 7,
    level: 'intermediate',
  },
] as const;

export function getGoLessons(t: GoLessonTranslator) {
  return GO_LESSON_DEFINITIONS.map((lesson) => ({
    ...lesson,
    title: t(`${lesson.id}.title`),
    description: t(`${lesson.id}.description`),
  }));
}
