import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { openingPositions as positions } from './go-practice-positions';

const lowDiagram = {
  size: 9,
  stones: positions.lowCorner,
  label:
    'A nine by nine board with a black stone at column three, row three, near the upper-left corner.',
  caption:
    'The 3–3 point is three lines from each nearby edge. It emphasizes the corner, but one stone has not enclosed territory yet.',
};
const starDiagram = {
  size: 9,
  stones: positions.star,
  label:
    'A nine by nine board with a black stone at column four, row four, near the upper-left corner.',
  caption:
    'The 4–4 point sits farther from the edges. It reaches outward, while leaving room for an opponent to enter the corner.',
};

const sections: readonly GoLessonSection[] = [
  {
    id: 'overview',
    title: 'Give your opening moves a purpose',
    paragraphs: [
      'The opening is the early part of a game, when the board is mostly empty. You are choosing where to build useful positions before close fighting begins. Black plays first, and each move still follows the rules from the earlier lessons.',
      'You will compare corner territory with outward influence, meet the idea of joseki, and ask how nearby stones change a local choice. These nine-by-nine boards keep the examples readable. Full-board opening priorities also depend on board size.',
    ],
    diagrams: [lowDiagram],
  },
  {
    id: 'corners-sides-center',
    title: 'Corners, sides, and center',
    paragraphs: [
      'The edges help you enclose space. A corner provides two boundaries, a side provides one, and the center provides none. This makes corners attractive early places to build territory.',
      '“Corners, then sides, then center” is a useful starting guide, not a rule about legal moves. A threatened group may need help immediately. On a small board, the corners and center also interact sooner.',
      'Names such as 3–3 and 4–4 count grid lines from the two nearby edges. The marked points below show one corner choice, one side choice, and the center; they are possible moves, not territory already earned.',
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
        label:
          'An empty nine by nine board with points marked at column three row three, column five row three, and column five row five.',
        caption:
          'From upper left toward the middle: a corner point, a side point, and the center. Compare how many edges help each area.',
      },
    ],
  },
  {
    id: 'territory-influence',
    title: 'Territory and influence',
    paragraphs: [
      'Territory is empty space securely enclosed by living stones. Influence is the useful effect of strong stones on nearby fighting or future development. Influence has potential value, but it is not a set of points you can count as territory now.',
      'A lower corner move such as 3–3 emphasizes space near the edges. A higher move such as 4–4 leaves more room underneath but can help your stones develop outward. Neither is always better: they serve different purposes.',
    ],
    diagrams: [lowDiagram, starDiagram],
  },
  {
    id: 'joseki',
    title: 'Understand a sequence before memorizing it',
    paragraphs: [
      'A joseki is a studied local sequence that gives both sides a reasonable result in an appropriate setting. It is not a special rule, a forced response, or a guarantee that the whole board favors you.',
      'Here is the beginning of a 3–3 invasion under a 4–4 stone. White enters near the corner. Black blocks one direction. White extends along the other direction instead of running straight into the block. Read the diagrams in order.',
      'This is an introduction to the exchange, not a completed joseki or a proof that White is already alive. Later moves must settle liberties, connections, and eye space. Study those reasons before adding longer variations.',
    ],
    diagrams: [
      {
        ...starDiagram,
        caption:
          'Starting position: Black’s 4–4 stone approaches the corner from the outside.',
      },
      {
        size: 9,
        stones: positions.invasion,
        label:
          'White has played at the 3–3 point diagonally toward the corner from Black’s 4–4 stone.',
        caption:
          '1. White plays 3–3, aiming for a foothold near the two edges.',
      },
      {
        size: 9,
        stones: positions.block,
        label:
          'Black adds a stone at column four, row three, directly to the right of White’s invading stone.',
        caption:
          '2. Black blocks at column 4, row 3, connecting to the original black stone.',
      },
      {
        size: 9,
        stones: positions.extend,
        label:
          'White extends to column three, row four, connecting to the invading stone and running alongside Black.',
        caption:
          '3. White extends at column 3, row 4. White develops along the other side of the corner.',
      },
    ],
  },
  {
    id: 'whole-board',
    title: 'Look beyond the corner',
    paragraphs: [
      'A local exchange can give one player corner space and the other player useful outside stones. Before choosing a direction, look at where those outside stones would help your existing groups or face open space.',
      'The corner stones below are identical, but the extra black stone is in a different place. The surrounding position changes what Black hopes to build next. Do not copy a sequence without considering that difference.',
      'Opening study continues to evolve. For a beginner, the useful habit is stable: compare the purpose of a move, the opponent’s reply, and the resulting position. Detailed modern variations and engine evaluations can wait.',
    ],
    diagrams: [
      {
        size: 9,
        stones: positions.rightSupport,
        label:
          'The invasion sequence with an additional black stone at column seven, row four, to the right of the local black stones.',
        caption:
          'Support on the right: consider whether the outside black stones can help develop that side.',
      },
      {
        size: 9,
        stones: positions.lowerSupport,
        label:
          'The same invasion sequence with an additional black stone at column four, row seven, below the corner.',
        caption:
          'Support below: the same corner sequence now sits beside a different development plan.',
      },
    ],
  },
  {
    id: 'summary',
    title: 'Choose a purpose, then read a reply',
    paragraphs: [
      'Use the edges to build efficiently. Distinguish secure territory from influence. Treat joseki as examples of cooperation and tradeoffs between moves, and always check the surrounding position.',
      'You now have a first path through placement, life and death, legal moves, scoring, tactics, and opening ideas. Practice on a small board and explain one decision after each game. Long joseki branches, advanced life-and-death puzzles, and complex ko fights can come later.',
    ],
    diagrams: [
      {
        ...starDiagram,
        caption:
          'Before your next move, ask: am I seeking corner space, outside strength, or help for a threatened group?',
      },
    ],
  },
];

const quickCheck: GoQuickCheck = {
  kind: 'move',
  color: 'black',
  question:
    'Your goal is to emphasize corner space. Click the marked starting point that fits this goal more directly: 3–3 or 4–4.',
  diagram: {
    size: 9,
    stones: [],
    markers: [
      { x: 2, y: 2 },
      { x: 3, y: 3 },
    ],
    label:
      'An empty nine by nine board with the upper-left 3–3 and 4–4 points marked. Neither point has been selected yet.',
    caption:
      'Compare 3–3, nearer the corner, with 4–4, farther toward the center. Click one of these two marked points.',
  },
  target: { x: 2, y: 2 },
  incorrectFeedback:
    'That is another possible opening point. For this comparison, choose one of the two marked points: 3–3 or 4–4.',
  hints: [
    {
      point: { x: 3, y: 3 },
      feedback:
        '4–4 is a legal opening move, but it reaches farther outward and leaves more room underneath. For the stated corner-space goal, try the lower marked point.',
    },
  ],
  successFeedback:
    'Correct! Black has played 3–3, emphasizing the corner. Later moves and a living group are still needed to turn potential space into secure territory.',
};

export const josekiAndModernOpeningsOutline = getGoLessonOutline(sections);
export function JosekiAndModernOpeningsLesson() {
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
