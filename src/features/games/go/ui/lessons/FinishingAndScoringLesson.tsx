import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { scoringPositions as positions } from './go-practice-positions';

const settledDiagram = {
  stones: positions.settled,
  label:
    'A settled five by five board. Black has eleven stones on the left and two enclosed points at column one, rows one and three. White has ten stones on the right and two enclosed points at column five, rows one and three.',
  caption:
    'Both groups have two eyes. All boundaries are closed, and there are no dead stones left to remove.',
};

const sections: readonly GoLessonSection[] = [
  {
    id: 'overview',
    title: 'From playing moves to counting points',
    paragraphs: [
      'Go is about controlling more of the board than your opponent. A game does not end at the first capture or when the board is full. You stop when both players are ready to count.',
      'This lesson uses Chinese-style area counting: your stones on the board plus the empty points they enclose. We use a tiny settled board so you can check every point. Other rulesets count differently; agree on rules and komi before a real game.',
    ],
    diagrams: [settledDiagram],
  },
  {
    id: 'keep-playing',
    title: 'When to keep playing',
    paragraphs: [
      'Before passing, look for unfinished boundaries, groups that still need protection, and moves that gain points or reduce the opponent’s area. A gap between Black and White is not automatically territory for either side.',
      'An empty point touching both colors is neutral unless further play changes the boundary. Under area counting, safely occupying a neutral point adds a stone to your score, so useful neutral moves should usually be played before passing.',
    ],
    diagrams: [
      {
        stones: positions.unfinished,
        markers: [{ x: 2, y: 1 }],
        label:
          'The settled example with a black stone missing at column three, row two. That empty point touches both black and white stones.',
        caption:
          'Black to play: the marked gap is neutral now. Black can legally fill it and gain one point of area.',
      },
      {
        ...settledDiagram,
        caption:
          'After Black fills the gap, Black has eleven stones and two enclosed empty points.',
      },
    ],
  },
  {
    id: 'passing',
    title: 'Passing and agreeing what remains',
    paragraphs: [
      'Passing uses your turn without placing a stone. Two consecutive passes signal that the players are ready to finish. First agree which groups are alive and which are dead. Remove agreed dead stones before counting.',
      'A dead group cannot avoid eventual capture with correct defense. Do not remove a group merely because it looks surrounded. If you disagree, continue playing according to your agreed rules and resolve its status. The previous lesson on life and death helps with this decision.',
      'The lone white stone in the upper-left corner below is dead: it cannot escape, and Black has another eye. Both players agree to remove it. The large white group on the right and bottom is alive and stays.',
    ],
    diagrams: [
      {
        stones: positions.deadBefore,
        markers: [{ x: 0, y: 1 }],
        label:
          'A lone white stone at the upper left has one liberty below. It is enclosed by a black group with another eye at column three, row one.',
        caption:
          'After both players pass: the lone corner stone is agreed dead. Its remaining liberty is marked.',
      },
      {
        stones: positions.deadRemoved,
        label:
          'The agreed dead white corner stone has been removed. Its former point and the point below now belong to Black’s enclosed space.',
        caption:
          'Remove only the agreed dead stone. Its former intersection becomes part of Black’s area.',
      },
    ],
  },
  {
    id: 'area-counting',
    title: 'Count stones and enclosed empty points',
    paragraphs: [
      'For area counting, each of your stones remaining on the board is one point. Each empty intersection enclosed only by your living stones and the board edge is also one point. Add these two counts.',
      'In this settled example, Black has 11 stones and 2 enclosed empty points: 13 points of area. White has 10 stones and 2 enclosed empty points: 12 points. Together they account for all 25 intersections.',
      'Captured stones kept beside the board are not added separately in this method. Empty neutral points count for neither player while empty. Japanese-style territory counting uses a different formula; do not mix that formula with area counting.',
    ],
    diagrams: [
      {
        ...settledDiagram,
        markers: [
          { x: 0, y: 0 },
          { x: 0, y: 2 },
        ],
        caption: 'Black: 11 stones + the 2 marked empty points = 13.',
      },
      {
        ...settledDiagram,
        markers: [
          { x: 4, y: 0 },
          { x: 4, y: 2 },
        ],
        caption:
          'White: 10 stones + the 2 marked empty points = 12, before komi.',
      },
    ],
  },
  {
    id: 'komi',
    title: 'Include the agreed komi',
    paragraphs: [
      'Black moves first. Komi is an agreed number of points added to White’s score to compensate for that advantage. It is part of the final calculation, not a stone placed on the board.',
      'For an arithmetic example, suppose the agreed komi is 7.5. Black’s score stays 13; White’s becomes 12 + 7.5 = 19.5. White wins by 6.5 points. A half-point allowance avoids a tied total.',
      'The appropriate komi depends on the rules and game arrangement. This tiny board demonstrates the calculation; it does not prescribe a handicap or komi for every board size.',
    ],
    diagrams: [
      {
        ...settledDiagram,
        caption:
          'With the stated 7.5 komi: Black 13, White 19.5. The stones do not change when komi is added.',
      },
    ],
  },
  {
    id: 'summary',
    title: 'Finish, agree, count',
    paragraphs: [
      'Check for useful moves before passing. After consecutive passes, agree on living and dead groups. Remove agreed dead stones, count each player’s area, and add the agreed komi to White.',
      'You now have the essentials for completing a small game. Next, practice protecting your groups through connections and reading the opponent’s reply.',
    ],
    diagrams: [settledDiagram],
  },
];

const quickCheck: GoQuickCheck = {
  kind: 'area',
  color: 'black',
  question:
    'Count Black’s area by selecting every black stone and every empty intersection enclosed by Black.',
  diagram: {
    ...settledDiagram,
    caption:
      'Select each point of Black’s area once. Count stones as well as enclosed empty points; leave White’s area unselected.',
  },
  territory: [
    { x: 0, y: 0 },
    { x: 0, y: 2 },
  ],
  successFeedback:
    'All 13 points found! Black has 11 stones and 2 enclosed empty points: 11 + 2 = 13. These markers count area; they do not place new stones.',
};

export const finishingAndScoringOutline = getGoLessonOutline(sections);
export function FinishingAndScoringLesson() {
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
