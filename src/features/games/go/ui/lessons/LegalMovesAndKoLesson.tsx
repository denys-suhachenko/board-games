import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { legalPositions as positions } from './go-practice-positions';
import { oneEye, oneEyeCaptured } from './life-and-death-positions';

function getLegalMovesAndKoContent(t: GoLessonTranslator) {
  const koDiagram = {
    stones: positions.koAfter,
    markers: [{ x: 2, y: 2 }],
    label: t('legalMovesAndKo.koDiagram.label'),
    caption: t('legalMovesAndKo.koDiagram.caption'),
  };

  const sections: readonly GoLessonSection[] = [
    {
      id: 'overview',
      title: t('legalMovesAndKo.sections.overview.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.overview.paragraph1'),
        t('legalMovesAndKo.sections.overview.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.occupied,
          markers: [{ x: 3, y: 2 }],
          label: t('legalMovesAndKo.sections.overview.diagrams.diagram1.label'),
          caption: t(
            'legalMovesAndKo.sections.overview.diagrams.diagram1.caption',
          ),
        },
      ],
    },
    {
      id: 'empty-points',
      title: t('legalMovesAndKo.sections.emptyPoints.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.emptyPoints.paragraph1'),
        t('legalMovesAndKo.sections.emptyPoints.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.occupied,
          markers: [
            { x: 0, y: 0 },
            { x: 4, y: 2 },
          ],
          label: t(
            'legalMovesAndKo.sections.emptyPoints.diagrams.diagram1.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.emptyPoints.diagrams.diagram1.caption',
          ),
        },
      ],
    },
    {
      id: 'self-capture',
      title: t('legalMovesAndKo.sections.selfCapture.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.selfCapture.paragraph1'),
        t('legalMovesAndKo.sections.selfCapture.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.selfCapture,
          markers: [{ x: 2, y: 2 }],
          label: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram1.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram1.caption',
          ),
        },
        {
          stones: oneEye,
          markers: [{ x: 0, y: 0 }],
          label: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram2.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram2.caption',
          ),
        },
        {
          stones: oneEyeCaptured,
          label: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram3.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.selfCapture.diagrams.diagram3.caption',
          ),
        },
      ],
    },
    {
      id: 'ko',
      title: t('legalMovesAndKo.sections.ko.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.ko.paragraph1'),
        t('legalMovesAndKo.sections.ko.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.koBefore,
          markers: [{ x: 2, y: 1 }],
          label: t('legalMovesAndKo.sections.ko.diagrams.diagram1.label'),
          caption: t('legalMovesAndKo.sections.ko.diagrams.diagram1.caption'),
        },
        koDiagram,
      ],
    },
    {
      id: 'intervening-moves',
      title: t('legalMovesAndKo.sections.interveningMoves.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.interveningMoves.paragraph1'),
        t('legalMovesAndKo.sections.interveningMoves.paragraph2'),
        t('legalMovesAndKo.sections.interveningMoves.paragraph3'),
      ],
      diagrams: [
        {
          stones: positions.koElsewhere,
          label: t(
            'legalMovesAndKo.sections.interveningMoves.diagrams.diagram1.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.interveningMoves.diagrams.diagram1.caption',
          ),
        },
        {
          stones: positions.koRecaptured,
          label: t(
            'legalMovesAndKo.sections.interveningMoves.diagrams.diagram2.label',
          ),
          caption: t(
            'legalMovesAndKo.sections.interveningMoves.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('legalMovesAndKo.sections.summary.title'),
      paragraphs: [
        t('legalMovesAndKo.sections.summary.paragraph1'),
        t('legalMovesAndKo.sections.summary.paragraph2'),
      ],
      diagrams: [koDiagram],
    },
  ];

  const quickCheck: GoQuickCheck = {
    kind: 'ko',
    question: t('legalMovesAndKo.quickCheck.question'),
    diagram: {
      ...koDiagram,
      caption: t('legalMovesAndKo.quickCheck.diagram.caption'),
    },
    koPoint: { x: 2, y: 2 },
    successFeedback: t('legalMovesAndKo.quickCheck.successFeedback'),
  };

  return { sections, quickCheck };
}
export function getLegalMovesAndKoOutline(t: GoLessonTranslator) {
  return getGoLessonOutline(
    getLegalMovesAndKoContent(t).sections,
    t('labels.quickCheck'),
  );
}
export function LegalMovesAndKoLesson() {
  const t = useTranslations('go.lessons');
  const { sections, quickCheck } = getLegalMovesAndKoContent(t);
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
