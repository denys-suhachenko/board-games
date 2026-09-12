import { GameRule } from '../../model/types';

export const RULES: GameRule[] = [
  {
    order: '01',
    title: 'Placement',
    chinese: '着手',
    description:
      'On your turn, place a stone on any empty intersection. Black plays first. You may also pass — two passes end the game.',
  },
  {
    order: '02',
    title: 'Capture',
    chinese: '取り',
    description:
      'When a stone or connected group has no remaining liberties, it is captured and removed. Captures count toward the final score.',
  },
  {
    order: '03',
    title: 'Suicide',
    chinese: '自殺手',
    description:
      'You may not place a stone that has no liberties — unless that placement captures opposing stones, freeing a liberty.',
  },
  {
    order: '04',
    title: 'Ko rule',
    chinese: '劫',
    description:
      'You cannot make a move that returns the board to its exact previous position. This prevents infinite capture-and-recapture loops.',
  },
  {
    order: '05',
    title: 'Scoring',
    chinese: '計算',
    description:
      'Surrounded empty points plus captured stones equal your score. Komi (typically 6.5) is added to White to compensate for going second.',
  },
  {
    order: '06',
    title: 'Resignation',
    chinese: '投了',
    description:
      'A player who sees no path to win may resign at any time. At pro level, most games end this way rather than by counting.',
  },
];
