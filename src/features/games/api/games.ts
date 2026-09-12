import { Game, GameListItem } from '../model/types';

import { Go } from '../go/data/game';
import { Xiangqi } from '../xiangqi/data/game';
import { Shogi } from '../shogi/data/game';
import { Latrunculi } from '../latrunculi/data/game';

const GAMES: GameListItem[] = [
  {
    id: 'go',
    title: 'Go',
    description:
      'An ancient game of territory and influence. Capture more ground than your opponent.',
    img: '/categories/go/go_angle.png',
    country: 'China',
    category: 'Abstract',
    size: '19×19',
    players: 2,
  },
  {
    id: 'xiangqi',
    title: 'Xiangqi',
    description: 'A river divides the board. Generals never meet face-to-face.',
    img: '/categories/xiangqi/xiangqi.png',
    country: 'Ancient China',
    category: 'Wargame',
    size: '9×10',
    players: 2,
  },
  {
    id: 'shogi',
    title: 'Shogi',
    description:
      'Captured pieces switch sides and re-enter play. The most aggressive of the chess family.',
    img: '/categories/shogi/shogi.png',
    country: 'Japan',
    category: 'Wargame',
    size: '8×8',
    players: 2,
  },
  {
    id: 'latrunculi',
    title: 'Latrunculi',
    description:
      'A strategic game from the Roman Empire. Build formations and outflank your rival.',
    img: '/categories/latrunculi/4b3e643e.png',
    country: 'Ancient Rome',
    category: 'Historical',
    size: '9×9',
    players: 2,
  },
];

export async function getGames(): Promise<GameListItem[]> {
  return GAMES;
}

export async function getGameById(id: string): Promise<Game | undefined> {
  switch (id) {
    case 'go':
      return Promise.resolve(Go);
    case 'xiangqi':
      return Promise.resolve(Xiangqi);
    case 'shogi':
      return Promise.resolve(Shogi);
    case 'latrunculi':
      return Promise.resolve(Latrunculi);
    default:
      return undefined;
  }
}
