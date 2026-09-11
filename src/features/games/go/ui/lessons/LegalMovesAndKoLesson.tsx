import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { legalPositions as positions } from './go-practice-positions';
import { oneEye, oneEyeCaptured } from './life-and-death-positions';

const koDiagram = {
  stones: positions.koAfter,
  markers: [{ x: 2, y: 2 }],
  label:
    'Black has just captured at column three, row two. The removed white stone leaves an empty point at column three, row three, marked with a dot.',
  caption:
    'White to play. The marked point would recapture Black’s new stone and restore the previous position.',
};

const sections: readonly GoLessonSection[] = [
  {
    id: 'overview',
    title: 'A legal move comes first',
    paragraphs: [
      'Go players take turns placing one stone on an empty intersection, or passing. Stones stay where they are placed unless captured. You have already practiced liberties and eyes; now learn the checks that make a move legal.',
      'By the end, you will distinguish an empty point from a legal move, explain the capture exception to self-capture, and recognize an immediate ko recapture. Rows run from top to bottom and columns from left to right in these diagrams.',
    ],
    diagrams: [
      {
        stones: positions.occupied,
        markers: [{ x: 3, y: 2 }],
        label:
          'A black stone occupies the center of a five by five board. An empty point to its right is marked.',
        caption:
          'White can play on the marked empty point, but cannot replace the black center stone.',
      },
    ],
  },
  {
    id: 'empty-points',
    title: 'Where you may play',
    paragraphs: [
      'Choose an intersection, including an edge or corner, that is not already occupied. You do not move a stone that is on the board, stack stones, or place a stone inside a square.',
      'An empty intersection is only the first check. After resolving captures, your newly placed stone must belong to a group with at least one liberty. These lessons use the usual no-self-capture rule.',
    ],
    diagrams: [
      {
        stones: positions.occupied,
        markers: [
          { x: 0, y: 0 },
          { x: 4, y: 2 },
        ],
        label:
          'A center black stone with empty corner and edge intersections marked.',
        caption:
          'Both marked points are legal for White here. Each leaves the new stone with liberties.',
      },
    ],
  },
  {
    id: 'self-capture',
    title: 'Capture before checking self-capture',
    paragraphs: [
      'Imagine placing your stone, then remove any adjacent opposing groups whose last liberty has been filled. Only then check the liberties of your own group. If none remain, the move is self-capture and is forbidden under the rules used here.',
      'An empty point surrounded by White is not automatically illegal for Black: a move there may capture White and open liberties. Compare the unsuccessful entry with the capturing move below.',
    ],
    diagrams: [
      {
        stones: positions.selfCapture,
        markers: [{ x: 2, y: 2 }],
        label:
          'Four separate white stones surround the marked empty center. Each white stone has other liberties.',
        caption:
          'Black cannot play at the dot. It would capture nothing and leave Black without a liberty.',
      },
      {
        stones: oneEye,
        markers: [{ x: 0, y: 0 }],
        label:
          'Three connected black corner stones have only the marked upper left intersection as a liberty.',
        caption:
          'White can play at this dot: all three black stones will be captured, making room for White to breathe.',
      },
      {
        stones: oneEyeCaptured,
        label:
          'White occupies the corner after removing the three black stones.',
        caption:
          'After the legal capture, White has two adjacent empty liberties.',
      },
    ],
  },
  {
    id: 'ko',
    title: 'Why ko prevents an immediate repeat',
    paragraphs: [
      'Ko is a shape where one stone can capture another, and an immediate recapture would recreate the position from just before that capture. Without a restriction, the players could repeat the same two moves forever.',
      'The simple ko rule forbids that immediate recapture. The point is empty and the recapture would gain a liberty, but repetition still makes it illegal now. Not every capture of one stone is a ko: the whole board position must repeat.',
    ],
    diagrams: [
      {
        stones: positions.koBefore,
        markers: [{ x: 2, y: 1 }],
        label:
          'A white stone at column three, row three has one liberty above it, marked at column three, row two.',
        caption:
          'Before: Black can capture the central white stone by playing at the marked point.',
      },
      koDiagram,
    ],
  },
  {
    id: 'intervening-moves',
    title: 'Play elsewhere and read the response',
    paragraphs: [
      'White must choose another legal move or pass instead of immediately recapturing. If White plays elsewhere and Black replies elsewhere, White may return to the ko under the simple ko rule, provided the recapture is otherwise legal.',
      'Black does not have to reply elsewhere. Black may instead fill the ko point and end the local exchange. The bottom-corner moves below simply demonstrate the timing; they are not a recommendation about which ko threats to play.',
      'Some rulesets also restrict repetitions across longer sequences, called superko. Detailed repetition rules and ko-fighting strategy belong in a later lesson.',
    ],
    diagrams: [
      {
        stones: positions.koElsewhere,
        label:
          'The ko after White plays the bottom left corner and Black replies in the bottom right corner.',
        caption:
          'After Black’s capture: White plays bottom left, then Black plays bottom right. White can now reconsider the ko.',
      },
      {
        stones: positions.koRecaptured,
        label:
          'White recaptures at column three, row three. Black’s stone above is removed; the two bottom-corner stones remain.',
        caption:
          'White recaptures. The intervening stones remain, and Black cannot immediately recapture in return.',
      },
    ],
  },
  {
    id: 'summary',
    title: 'Three checks before playing',
    paragraphs: [
      'Is the point empty? After removing captured enemy stones, will your group have a liberty? Would the move break a repetition rule? If a move fails any of these checks, choose another move or pass.',
      'You can now recognize legal local moves. Next, learn when a game is finished and how to count its result.',
    ],
    diagrams: [koDiagram],
  },
];

const quickCheck: GoQuickCheck = {
  kind: 'ko',
  question:
    'White to play after Black’s ko capture. Click a legal empty intersection for White’s next move.',
  diagram: {
    ...koDiagram,
    caption:
      'The dot marks the immediate recapture point at column 3, row 3. Try it to see why it is forbidden, then find another legal move.',
  },
  koPoint: { x: 2, y: 2 },
  successFeedback:
    'Correct! White’s stone has been placed on a legal empty point without immediately repeating the position. Black plays next; White cannot take another turn right away.',
};

export const legalMovesAndKoOutline = getGoLessonOutline(sections);
export function LegalMovesAndKoLesson() {
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
