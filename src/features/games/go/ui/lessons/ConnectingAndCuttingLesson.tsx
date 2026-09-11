import { GoLessonArticle, getGoLessonOutline } from './GoLessonArticle';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { connectionPositions as positions } from './go-practice-positions';

const atariDiagram = {
  stones: positions.atari,
  markers: [{ x: 2, y: 3 }],
  label:
    'A black stone at column three, row three is surrounded by White above, left, and right. Its last liberty is below, between it and three black stones along the bottom edge.',
  caption:
    'Black to play. The center stone is in atari. The marked point connects it to the black stones below.',
};
const connectedDiagram = {
  stones: positions.connected,
  label:
    'Black has played at column three, row four, joining the center stone to the three black stones on the bottom edge.',
  caption:
    'After connecting, all five black stones share four liberties. White cannot capture them in one move.',
};

const sections: readonly GoLessonSection[] = [
  {
    id: 'overview',
    title: 'Help your stones work together',
    paragraphs: [
      'A stone in danger may be able to join a stronger group. A safe-looking pair may instead be separated by an enemy move. Connections and cuts help you understand both possibilities.',
      'This lesson builds on liberties, capturing, and legal moves. You will identify a cutting point, compare ways to answer atari, and look at one reply before deciding that a move works. Saving stones here means escaping the immediate threat; it does not automatically mean making two eyes.',
    ],
    diagrams: [atariDiagram],
  },
  {
    id: 'connections',
    title: 'Solid connections and diagonal neighbors',
    paragraphs: [
      'Stones of the same color touching along a grid line form a connected group and share liberties. The opponent cannot place a stone between two stones that already touch.',
      'Diagonal neighbors do not share a direct connection. They may be able to connect on the next move, but nearby enemy stones can affect whether that connection is safe. Trace the grid lines instead of judging by appearance.',
    ],
    diagrams: [
      {
        stones: positions.solid,
        label: 'Two black stones touch horizontally in the center.',
        caption:
          'A solid connection: these stones already share their liberties.',
      },
      {
        stones: positions.diagonal,
        markers: [
          { x: 2, y: 1 },
          { x: 1, y: 2 },
        ],
        label:
          'Two diagonal black stones with the two intersections that could join them marked.',
        caption:
          'Separate groups for now. Either marked move would join them on this otherwise empty board.',
      },
    ],
  },
  {
    id: 'cuts',
    title: 'Recognize a cutting point',
    paragraphs: [
      'A cut occupies a point that your opponent would like to use to connect. It can force nearby stones to fight as separate groups. A cut is useful only if the cutting stones can survive or achieve something worthwhile.',
      'In this example, Black could join the two stones by filling the gap. White can instead occupy the gap and connect to the white stone above. Black must now look for another way to connect or support each side.',
    ],
    diagrams: [
      {
        stones: positions.cutBefore,
        markers: [{ x: 2, y: 2 }],
        label:
          'Two black stones on row three are separated by one empty intersection. A white stone sits just above the gap.',
        caption:
          'White to play. The marked gap is Black’s direct connecting point.',
      },
      {
        stones: positions.cutAfter,
        label:
          'White has filled the gap between the two black stones and connected upward to another white stone.',
        caption:
          'White cuts. The black stones remain separate; they have not been captured.',
      },
    ],
  },
  {
    id: 'answer-atari',
    title: 'Three ways to answer atari',
    paragraphs: [
      'Atari means a group has just one liberty. Before moving, consider extending into that liberty, connecting to friendly stones, or capturing an adjacent attacker to create new liberties.',
      'A move can do more than one of these things. Below, Black extends downward and connects to support at the same time. In the second example, Black can instead capture a white attacker on the left.',
      'Recount the liberties after the move. Do not assume that adding one more stone always saves the group.',
    ],
    diagrams: [
      atariDiagram,
      connectedDiagram,
      {
        stones: positions.captureEscape,
        markers: [{ x: 0, y: 2 }],
        label:
          'Black’s center stone is in atari. The white attacker immediately to its left also has one liberty, at the marked left edge point.',
        caption:
          'Another position, Black to play: the left-hand white attacker can be captured at the dot.',
      },
      {
        stones: positions.captureEscapeAfter,
        label:
          'Black has played at the left edge and removed the adjacent white stone. The center black stone now has liberties below and to its left.',
        caption:
          'After the capture, the center black stone has two liberties. The threat of immediate capture is gone.',
      },
    ],
  },
  {
    id: 'read-a-reply',
    title: 'Read the opponent’s reply',
    paragraphs: [
      'Reading starts with a short question: if I play here, what can the opponent do next? A group may gain a stone but still have only one liberty. That move delays capture without solving the problem.',
      'Compare the trapped corner stones with the connected group from before. In the corner, extending leads straight to another atari. In the connected example, White can fill one liberty but several remain.',
    ],
    diagrams: [
      {
        stones: positions.trapped,
        markers: [{ x: 0, y: 1 }],
        label:
          'A black stone at the top left corner has its only liberty directly below. White blocks the route to the right and farther down the edge.',
        caption:
          'Black to play. Extending down at the dot looks like an escape.',
      },
      {
        stones: positions.delayed,
        markers: [{ x: 0, y: 2 }],
        label:
          'Two black stones on the left edge have only one liberty left, at column one, row three.',
        caption:
          'After Black extends, White plays at the marked last liberty and captures both stones.',
      },
      {
        stones: positions.captured,
        label:
          'White has played at column one, row three. The two black stones above have been removed.',
        caption: 'After White’s reply: the extension only delayed the capture.',
      },
      {
        stones: positions.afterReply,
        label:
          'The five connected black stones remain after White fills the liberty at column two, row four.',
        caption:
          'By contrast, the connected group still has three liberties after this White reply.',
      },
    ],
  },
  {
    id: 'summary',
    title: 'Connect, count, then read',
    paragraphs: [
      'Identify which stones are actually connected. Look for gaps an opponent can cut. When a group is in atari, compare extending, connecting, and capturing; then count the liberties after the opponent’s likely reply.',
      'Not every threatened stone is worth saving. For now, practice recognizing a move that works locally. Opening strategy comes next: deciding where your stones can work together across a larger board.',
    ],
    diagrams: [connectedDiagram],
  },
];

const quickCheck: GoQuickCheck = {
  kind: 'move',
  color: 'black',
  question:
    'Black to play. Click the move that connects the threatened center stone to support and prevents its capture on White’s next turn.',
  diagram: {
    ...atariDiagram,
    markers: [],
    caption:
      'Find the center stone’s last liberty. Rows count from top to bottom and columns from left to right.',
  },
  target: { x: 2, y: 3 },
  incorrectFeedback:
    'That move leaves the center stone in atari. White can still capture it at column 3, row 4. Try connecting through its last liberty.',
  hints: [
    {
      point: { x: 1, y: 1 },
      feedback:
        'Diagonal contact does not connect the center stone. White can still fill its last liberty below. Try a connection along the grid lines.',
    },
  ],
  successFeedback:
    'Correct! Black’s new stone joins all five black stones into one group with four liberties. White cannot capture that group in a single reply.',
};

export const connectingAndCuttingOutline = getGoLessonOutline(sections);
export function ConnectingAndCuttingLesson() {
  return <GoLessonArticle sections={sections} quickCheck={quickCheck} />;
}
