import { GamePiece } from '../../model/types';

export const PIECES: GamePiece[] = [
  {
    title: 'General',
    sign: '將',
    description:
      'Stays inside the palace. Moves one point orthogonally. Cannot face the opposing general on an open file.',
  },
  {
    title: 'Advisor',
    sign: '士',
    description:
      'Stays inside the palace. Moves one point diagonally. Bodyguard to the general.',
  },
  {
    title: 'Elephant',
    sign: '相',
    description:
      'Moves exactly two points diagonally. Cannot cross the river. Blocked if the midpoint is occupied.',
  },
  {
    title: 'Horse',
    sign: '馬',
    description:
      'A capture that would immediately recreate the previous board position is forbidden. The threatened side must play elsewhere first.',
  },
  {
    title: 'Chariot',
    sign: '車',
    description:
      'Moves and captures any number of points orthogonally. The most powerful piece on the board.',
  },
  {
    title: 'Cannon',
    sign: '砲',
    description:
      'Moves like the chariot but captures only by jumping over exactly one piece — friend or foe.',
  },
  {
    title: 'Soldier',
    sign: '兵',
    description:
      'Forward one point. After crossing the river, also sideways. Never retreats. Never promotes.',
  },
];
