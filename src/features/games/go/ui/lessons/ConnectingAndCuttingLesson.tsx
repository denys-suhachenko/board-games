import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { connectionPositions as positions } from './go-practice-positions';

function getConnectingAndCuttingContent(t: GoLessonTranslator) {
  const atariDiagram = {
    stones: positions.atari,
    markers: [{ x: 2, y: 3 }],
    label: t('connectingAndCutting.atariDiagram.label'),
    caption: t('connectingAndCutting.atariDiagram.caption'),
  };
  const connectedDiagram = {
    stones: positions.connected,
    label: t('connectingAndCutting.connectedDiagram.label'),
    caption: t('connectingAndCutting.connectedDiagram.caption'),
  };

  const sections: readonly GoLessonSection[] = [
    {
      id: 'overview',
      title: t('connectingAndCutting.sections.overview.title'),
      paragraphs: [
        t('connectingAndCutting.sections.overview.paragraph1'),
        t('connectingAndCutting.sections.overview.paragraph2'),
      ],
      diagrams: [atariDiagram],
    },
    {
      id: 'connections',
      title: t('connectingAndCutting.sections.connections.title'),
      paragraphs: [
        t('connectingAndCutting.sections.connections.paragraph1'),
        t('connectingAndCutting.sections.connections.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.solid,
          label: t(
            'connectingAndCutting.sections.connections.diagrams.diagram1.label',
          ),
          caption: t(
            'connectingAndCutting.sections.connections.diagrams.diagram1.caption',
          ),
        },
        {
          stones: positions.diagonal,
          markers: [
            { x: 2, y: 1 },
            { x: 1, y: 2 },
          ],
          label: t(
            'connectingAndCutting.sections.connections.diagrams.diagram2.label',
          ),
          caption: t(
            'connectingAndCutting.sections.connections.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'cuts',
      title: t('connectingAndCutting.sections.cuts.title'),
      paragraphs: [
        t('connectingAndCutting.sections.cuts.paragraph1'),
        t('connectingAndCutting.sections.cuts.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.cutBefore,
          markers: [{ x: 2, y: 2 }],
          label: t(
            'connectingAndCutting.sections.cuts.diagrams.diagram1.label',
          ),
          caption: t(
            'connectingAndCutting.sections.cuts.diagrams.diagram1.caption',
          ),
        },
        {
          stones: positions.cutAfter,
          label: t(
            'connectingAndCutting.sections.cuts.diagrams.diagram2.label',
          ),
          caption: t(
            'connectingAndCutting.sections.cuts.diagrams.diagram2.caption',
          ),
        },
      ],
    },
    {
      id: 'answer-atari',
      title: t('connectingAndCutting.sections.answerAtari.title'),
      paragraphs: [
        t('connectingAndCutting.sections.answerAtari.paragraph1'),
        t('connectingAndCutting.sections.answerAtari.paragraph2'),
        t('connectingAndCutting.sections.answerAtari.paragraph3'),
      ],
      diagrams: [
        atariDiagram,
        connectedDiagram,
        {
          stones: positions.captureEscape,
          markers: [{ x: 0, y: 2 }],
          label: t(
            'connectingAndCutting.sections.answerAtari.diagrams.diagram3.label',
          ),
          caption: t(
            'connectingAndCutting.sections.answerAtari.diagrams.diagram3.caption',
          ),
        },
        {
          stones: positions.captureEscapeAfter,
          label: t(
            'connectingAndCutting.sections.answerAtari.diagrams.diagram4.label',
          ),
          caption: t(
            'connectingAndCutting.sections.answerAtari.diagrams.diagram4.caption',
          ),
        },
      ],
    },
    {
      id: 'read-a-reply',
      title: t('connectingAndCutting.sections.readAReply.title'),
      paragraphs: [
        t('connectingAndCutting.sections.readAReply.paragraph1'),
        t('connectingAndCutting.sections.readAReply.paragraph2'),
      ],
      diagrams: [
        {
          stones: positions.trapped,
          markers: [{ x: 0, y: 1 }],
          label: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram1.label',
          ),
          caption: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram1.caption',
          ),
        },
        {
          stones: positions.delayed,
          markers: [{ x: 0, y: 2 }],
          label: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram2.label',
          ),
          caption: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram2.caption',
          ),
        },
        {
          stones: positions.captured,
          label: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram3.label',
          ),
          caption: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram3.caption',
          ),
        },
        {
          stones: positions.afterReply,
          label: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram4.label',
          ),
          caption: t(
            'connectingAndCutting.sections.readAReply.diagrams.diagram4.caption',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('connectingAndCutting.sections.summary.title'),
      paragraphs: [
        t('connectingAndCutting.sections.summary.paragraph1'),
        t('connectingAndCutting.sections.summary.paragraph2'),
      ],
      diagrams: [connectedDiagram],
    },
  ];

  const quickCheck: GoQuickCheck = {
    kind: 'move',
    color: 'black',
    question: t('connectingAndCutting.quickCheck.question'),
    diagram: {
      ...atariDiagram,
      markers: [],
      caption: t('connectingAndCutting.quickCheck.diagram.caption'),
    },
    target: { x: 2, y: 3 },
    incorrectFeedback: t('connectingAndCutting.quickCheck.incorrectFeedback'),
    hints: [
      {
        point: { x: 1, y: 1 },
        feedback: t('connectingAndCutting.quickCheck.hints.hint1.feedback'),
      },
    ],
    successFeedback: t('connectingAndCutting.quickCheck.successFeedback'),
  };

  return { sections, quickCheck };
}
export function getConnectingAndCuttingOutline(t: GoLessonTranslator) {
  return getGoLessonOutline(
    getConnectingAndCuttingContent(t).sections,
    t('labels.quickCheck'),
  );
}
export function ConnectingAndCuttingLesson() {
  const t = useTranslations('go.lessons');
  const { sections, quickCheck } = getConnectingAndCuttingContent(t);
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
