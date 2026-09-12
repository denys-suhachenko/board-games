import { GamePiece } from '../../model/types';

export const PIECES: GamePiece[] = [
  {
    title: 'Stones',
    sign: '石',
    description:
      'Players take turns placing one stone of their color on any empty intersection. Stones do not move once placed — only captured.',
  },
  {
    title: 'Liberties',
    sign: '気',
    description:
      'Empty intersections directly adjacent to a stone. A stone or group with no liberties is captured and removed from the board.',
  },
  {
    title: 'Territory',
    sign: '地',
    description:
      "Empty intersections completely surrounded by one color count as that player's points. The player with more territory wins.",
  },
  {
    title: 'Ko',
    sign: '劫',
    description:
      'A capture that would immediately recreate the previous board position is forbidden. The threatened side must play elsewhere first.',
  },
];
