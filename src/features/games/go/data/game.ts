import { Game } from '../../model/types';

import { HISTORY } from './history';
import { PIECES } from './pieces';
import { RULES } from './rules';

export const Go: Game = {
  id: 'go',
  title: 'Go',
  originalTitle: '围棋',
  subtitle: 'Wéiqí · Baduk · Igo',
  description:
    'Two players, two colors of stones, one grid. The rules fit on an index card — and yet the legal positions outnumber the atoms in the observable universe by many orders of magnitude. The oldest game still played.',
  origin: 'China · ~2500 yrs',
  players: 2,
  size: '19 × 19 lines',
  pieces: {
    title: 'Four ideas, infinite play.',
    items: PIECES,
    total: '360 (180 each)',
    columns: 4,
  },
  rules: {
    title: "Six rules, that's all.",
    items: RULES,
    columns: 3,
  },
  history: {
    title: 'Twenty-five centuries of play.',
    items: HISTORY,
    columns: 4,
  },
};
