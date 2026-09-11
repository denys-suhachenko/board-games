import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { openingPositions as positions } from './go-practice-positions';

function getJosekiAndModernOpeningsContent(t: GoLessonTranslator) {
  const lowDiagram = {
    size: 9,
    stones: positions.lowCorner,
    label: t('josekiAndModernOpenings.lowDiagram.label'),
    caption: t('josekiAndModernOpenings.lowDiagram.caption'),
  };
  const starDiagram = {
    size: 9,
    stones: positions.star,
    label: t('josekiAndModernOpenings.starDiagram.label'),
    caption: t('josekiAndModernOpenings.starDiagram.caption'),
  };

  const sections: readonly GoLessonSection[] = [
    {
      id: 'overview',
      title: t('josekiAndModernOpenings.sections.overview.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.overview.paragraph1'),
        t('josekiAndModernOpenings.sections.overview.paragraph2'),
      ],
      diagrams: [lowDiagram],
    },
    {
      id: 'corners-sides-center',
      title: t('josekiAndModernOpenings.sections.cornersSidesCenter.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.cornersSidesCenter.paragraph1'),
        t('josekiAndModernOpenings.sections.cornersSidesCenter.paragraph2'),
        t('josekiAndModernOpenings.sections.cornersSidesCenter.paragraph3'),
      ],
      diagrams: [
        {
          size: 9,
          stones: [],
          markers: [
            { x: 2, y: 2 },
            { x: 4, y: 2 },
            { x: 4, y: 4 },
          ],
          label: t(
            'josekiAndModernOpenings.sections.cornersSidesCenter.diagrams.diagram1.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.cornersSidesCenter.diagrams.diagram1.caption',
          ),
        },
      ],
    },
    {
      id: 'territory-influence',
      title: t('josekiAndModernOpenings.sections.territoryInfluence.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.territoryInfluence.paragraph1'),
        t('josekiAndModernOpenings.sections.territoryInfluence.paragraph2'),
      ],
      diagrams: [lowDiagram, starDiagram],
    },
    {
      id: 'joseki',
      title: t('josekiAndModernOpenings.sections.joseki.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.joseki.paragraph1'),
        t('josekiAndModernOpenings.sections.joseki.paragraph2'),
        t('josekiAndModernOpenings.sections.joseki.paragraph3'),
      ],
      diagrams: [
        {
          ...starDiagram,
          caption: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram1.caption',
          ),
        },
        {
          size: 9,
          stones: positions.invasion,
          label: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram2.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram2.caption',
          ),
        },
        {
          size: 9,
          stones: positions.block,
          label: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram3.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram3.caption',
          ),
        },
        {
          size: 9,
          stones: positions.extend,
          label: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram4.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.joseki.diagrams.diagram4.caption',
          ),
        },
      ],
    },
    {
      id: 'whole-board',
      title: t('josekiAndModernOpenings.sections.wholeBoard.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.wholeBoard.paragraph1'),
        t('josekiAndModernOpenings.sections.wholeBoard.paragraph2'),
        t('josekiAndModernOpenings.sections.wholeBoard.paragraph3'),
      ],
      diagrams: [
        {
          size: 9,
          stones: positions.rightSupport,
          label: t(
            'josekiAndModernOpenings.sections.wholeBoard.diagrams.diagram1.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.wholeBoard.diagrams.diagram1.caption',
          ),
        },
        {
          size: 9,
          stones: positions.lowerSupport,
          label: t(
            'josekiAndModernOpenings.sections.wholeBoard.diagrams.diagram2.label',
          ),
          caption: t(
            'josekiAndModernOpenings.sections.wholeBoard.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('josekiAndModernOpenings.sections.summary.title'),
      paragraphs: [
        t('josekiAndModernOpenings.sections.summary.paragraph1'),
        t('josekiAndModernOpenings.sections.summary.paragraph2'),
      ],
      diagrams: [
        {
          ...starDiagram,
          caption: t(
            'josekiAndModernOpenings.sections.summary.diagrams.diagram1.caption',
          ),
        },
      ],
    },
  ];

  const quickCheck: GoQuickCheck = {
    kind: 'move',
    color: 'black',
    question: t('josekiAndModernOpenings.quickCheck.question'),
    diagram: {
      size: 9,
      stones: [],
      markers: [
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ],
      label: t('josekiAndModernOpenings.quickCheck.diagram.label'),
      caption: t('josekiAndModernOpenings.quickCheck.diagram.caption'),
    },
    target: { x: 2, y: 2 },
    incorrectFeedback: t(
      'josekiAndModernOpenings.quickCheck.incorrectFeedback',
    ),
    hints: [
      {
        point: { x: 3, y: 3 },
        feedback: t('josekiAndModernOpenings.quickCheck.hints.hint1.feedback'),
      },
    ],
    successFeedback: t('josekiAndModernOpenings.quickCheck.successFeedback'),
  };

  return { sections, quickCheck };
}
export function getJosekiAndModernOpeningsOutline(t: GoLessonTranslator) {
  return getGoLessonOutline(
    getJosekiAndModernOpeningsContent(t).sections,
    t('labels.quickCheck'),
  );
}
export function JosekiAndModernOpeningsLesson() {
  const t = useTranslations('go.lessons');
  const { sections, quickCheck } = getJosekiAndModernOpeningsContent(t);
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
