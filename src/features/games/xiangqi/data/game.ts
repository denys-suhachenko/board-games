import { Game } from '../../model/types';

import { HISTORY } from './history';
import { PIECES } from './pieces';
import { RULES } from './rules';

export const Xiangqi: Game = {
  id: 'xiangqi',
  title: 'Xiangqi',
  originalTitle: '象棋',
  subtitle: 'Chinese chess · Xiàngqí',
  description:
    'A river divides the board. Generals never meet face-to-face. The cannon captures by jumping. Older than the chess most of the world plays — and, by player count, far larger.',
  origin: 'China · ~9th c.',
  players: 2,
  size: '9 × 10 lines',
  pieces: {
    title: 'Seven types, one army.',
    items: PIECES,
    total: '32 (16 each)',
    columns: 7,
  },
  rules: {
    title: 'Six things chess players notice first.',
    items: RULES,
    columns: 3,
  },
  history: {
    title: 'Twelve centuries of play.',
    items: HISTORY,
    columns: 4,
  },
};
