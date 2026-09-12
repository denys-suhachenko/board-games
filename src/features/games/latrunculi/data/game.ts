import { Game } from '../../model/types';

import { HISTORY } from './history';
import { PIECES } from './pieces';
import { RULES } from './rules';

export const Latrunculi: Game = {
  id: 'Latrunculi',
  title: 'Latrunculi',
  originalTitle: '',
  subtitle: 'The game of brigands · Rome, 1ST c. BCE',
  description:
    'A war game played across the Roman Empire for six centuries. Pieces slide like rooks; captures happen by flanking on opposite sides — a tactical idea older than chess. The exact rules are partly lost; what survives is reconstructed from poets, mosaics, and broken boards.',
  origin: 'Rome · 1st c. BCE',
  players: 2,
  size: '7 × 7 squares',
  pieces: {
    title: 'Two ranks, one chief.',
    items: PIECES,
    total: '28 (14 each)',
    columns: 3,
  },
  rules: {
    title: 'Six rules, partially reconstructed.',
    items: RULES,
    columns: 3,
  },
  history: {
    title: 'Two thousand years between matches.',
    items: HISTORY,
    columns: 4,
  },
};
