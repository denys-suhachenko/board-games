import { Game } from '../../model/types';

import { HISTORY } from './history';
import { PIECES } from './pieces';
import { RULES } from './rules';

export const Shogi: Game = {
  id: 'shogi',
  title: 'Shogi',
  originalTitle: '将棋',
  subtitle: 'Japanese chess · shōgi',
  description:
    'Captured pieces switch sides and return to the board. There are no draws by material - both armies stay in play forever. The result is the most attacking, least drawish chess variant ever standardized.',
  origin: 'Japan · ~12th c.',
  players: 2,
  size: '9 × 9 squares',
  pieces: {
    title: 'Eight types, most promote.',
    items: PIECES,
    total: '40 (20 each)',
    columns: 4,
  },
  rules: {
    title: 'What chess players notice first.',
    items: RULES,
    columns: 3,
  },
  history: {
    title: 'Nine centuries of play.',
    items: HISTORY,
    columns: 4,
  },
};
