import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { scoringPositions as positions } from './go-practice-positions';

function getFinishingAndScoringContent(t: GoLessonTranslator) {
  const settledDiagram = {
    stones: positions.settled,
    label: t('finishingAndScoring.settledDiagram.label'),
    caption: t('finishingAndScoring.settledDiagram.caption'),
  };

  const sections: readonly GoLessonSection[] = [
    {
      id: 'overview',
      title: t('finishingAndScoring.sections.overview.title'),
      paragraphs: [
        t('finishingAndScoring.sections.overview.paragraph1'),
        t('finishingAndScoring.sections.overview.paragraph2'),
      ],
      diagrams: [settledDiagram],
    },
    {
      id: 'keep-playing',
      title: t('finishingAndScoring.sections.keepPlaying.title'),
      paragraphs: [
        t('finishingAndScoring.sections.keepPlaying.paragraph1'),
        t('finishingAndScoring.sections.keepPlaying.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.unfinished,
          markers: [{ x: 2, y: 1 }],
          label: t(
            'finishingAndScoring.sections.keepPlaying.diagrams.diagram1.label',
          ),
          caption: t(
            'finishingAndScoring.sections.keepPlaying.diagrams.diagram1.caption',
          ),
        },
        {
          ...settledDiagram,
          caption: t(
            'finishingAndScoring.sections.keepPlaying.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'passing',
      title: t('finishingAndScoring.sections.passing.title'),
      paragraphs: [
        t('finishingAndScoring.sections.passing.paragraph1'),
        t('finishingAndScoring.sections.passing.paragraph2'),
        t('finishingAndScoring.sections.passing.paragraph3'),
      ],
      diagrams: [
        {
          stones: positions.deadBefore,
          markers: [{ x: 0, y: 1 }],
          label: t(
            'finishingAndScoring.sections.passing.diagrams.diagram1.label',
          ),
          caption: t(
            'finishingAndScoring.sections.passing.diagrams.diagram1.caption',
          ),
        },
        {
          stones: positions.deadRemoved,
          label: t(
            'finishingAndScoring.sections.passing.diagrams.diagram2.label',
          ),
          caption: t(
            'finishingAndScoring.sections.passing.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'area-counting',
      title: t('finishingAndScoring.sections.areaCounting.title'),
      paragraphs: [
        t('finishingAndScoring.sections.areaCounting.paragraph1'),
        t('finishingAndScoring.sections.areaCounting.paragraph2'),
        t('finishingAndScoring.sections.areaCounting.paragraph3'),
      ],
      diagrams: [
        {
          ...settledDiagram,
          markers: [
            { x: 0, y: 0 },
            { x: 0, y: 2 },
          ],
          caption: t(
            'finishingAndScoring.sections.areaCounting.diagrams.diagram1.caption',
          ),
        },
        {
          ...settledDiagram,
          markers: [
            { x: 4, y: 0 },
            { x: 4, y: 2 },
          ],
          caption: t(
            'finishingAndScoring.sections.areaCounting.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'komi',
      title: t('finishingAndScoring.sections.komi.title'),
      paragraphs: [
        t('finishingAndScoring.sections.komi.paragraph1'),
        t('finishingAndScoring.sections.komi.paragraph2'),
        t('finishingAndScoring.sections.komi.paragraph3'),
      ],
      diagrams: [
        {
          ...settledDiagram,
          caption: t(
            'finishingAndScoring.sections.komi.diagrams.diagram1.caption',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('finishingAndScoring.sections.summary.title'),
      paragraphs: [
        t('finishingAndScoring.sections.summary.paragraph1'),
        t('finishingAndScoring.sections.summary.paragraph2'),
      ],
      diagrams: [settledDiagram],
    },
  ];

  const quickCheck: GoQuickCheck = {
    kind: 'area',
    color: 'black',
    question: t('finishingAndScoring.quickCheck.question'),
    diagram: {
      ...settledDiagram,
      caption: t('finishingAndScoring.quickCheck.diagram.caption'),
    },
    territory: [
      { x: 0, y: 0 },
      { x: 0, y: 2 },
    ],
    successFeedback: t('finishingAndScoring.quickCheck.successFeedback'),
  };

  return { sections, quickCheck };
}
export function getFinishingAndScoringOutline(t: GoLessonTranslator) {
  return getGoLessonOutline(
    getFinishingAndScoringContent(t).sections,
    t('labels.quickCheck'),
  );
}
export function FinishingAndScoringLesson() {
  const t = useTranslations('go.lessons');
  const { sections, quickCheck } = getFinishingAndScoringContent(t);
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
