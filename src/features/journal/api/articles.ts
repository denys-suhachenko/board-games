import type { Article } from '../types';

const ARTICLES: Article[] = [
  {
    id: 'lost-rules',
    tag: 'History',
    title: 'The lost rules of Latrunculi',
    description:
      'Roman soldiers played it across an empire, but the exact rules vanished with Rome.',
    date: 'May 12, 2026',
    read: '14 min',
    author: 'Marcus Bell',
    thumb: 'POSITIO LATRUNCULORUM · BRITAIN c. 200 CE',
    image: '/articles/ancient_latrunculi_board.webp',
  },
  {
    id: 'go-vs-chess',
    tag: 'Essay',
    title: 'What Go teaches that chess cannot',
    description:
      'Two ancient games, two utterly different theories of conflict.',
    date: 'Apr 28, 2026',
    read: '12 min',
    author: 'Yuki Tanaka',
    thumb: 'GO STONES · CLOSE-UP',
    image: '/articles/go.png',
  },
  {
    id: 'xiangqi-street',
    tag: 'Profile',
    title: 'The last living grandmasters of Xiangqi street play',
    description:
      'In Guangzhou, a generation of park players resists the pull of the screen.',
    date: 'Apr 24, 2026',
    read: '9 min',
    author: 'Linh Pham',
    thumb: 'STREET MATCH · GUANGZHOU',
    image: '/articles/xiangqi.png',
  },
  {
    id: 'engines-converge',
    tag: 'Analysis',
    title: 'Why every chess engine eventually plays the same way',
    description: 'Stockfish, Leela, Komodo. Three top engines, one position.',
    date: 'Apr 19, 2026',
    read: '11 min',
    author: 'Anders Nilsson',
    thumb: 'EVAL DIAGRAM · POSITION 81',
    image: '/articles/ancient_latrunculi_board.webp',
  },
  {
    id: 'checkers-boom',
    tag: 'History',
    title: 'The 19th-century checkers boom',
    description:
      'For a game now mostly played by children and computers, draughts once filled European tournament halls.',
    date: 'Apr 12, 2026',
    read: '8 min',
    author: 'Edith Caldwell',
    thumb: 'ARCHIVAL PHOTO · LONDON 1872',
    image: '/articles/checkers.png',
  },
  {
    id: 'drops',
    tag: 'Essay',
    title: 'The drop rule changes everything',
    description:
      'Captured pieces switch sides. Three words that turn the chess family upside down.',
    date: 'Apr 5, 2026',
    read: '10 min',
    author: 'Yuki Tanaka',
    thumb: 'SHOGI BOARD · MID-GAME',
    image: '/articles/shogi.png',
  },
  {
    id: 'magnus-profile',
    tag: 'Profile',
    title: 'After the crown: a year with Magnus',
    description:
      'He stepped down as world champion in 2023. What happens to a chess prodigy when he stops needing to defend the title?',
    date: 'Mar 28, 2026',
    read: '18 min',
    author: 'Per Olafsson',
    thumb: 'PORTRAIT · OSLO 2026',
    image: '/articles/ancient_latrunculi_board.webp',
  },
  {
    id: 'alphago',
    tag: 'Analysis',
    title: 'Re-reading move 37, ten years on',
    description:
      'AlphaGo’s move 37 in game 2 against Lee Sedol shocked professionals in 2016.',
    date: 'Mar 14, 2026',
    read: '15 min',
    author: 'Yuki Tanaka',
    thumb: 'MOVE 37 · GAME 2',
    image: '/articles/go.png',
  },
  {
    id: 'shatranj',
    tag: 'History',
    title: 'Shatranj: the chess before chess',
    description:
      'The 7th-century Persian ancestor of every chess in the world. Its queen moved one square.',
    date: 'Mar 2, 2026',
    read: '7 min',
    author: 'Reza Akbari',
    thumb: 'MANUSCRIPT · BAGHDAD c. 850',
    image: '/articles/ancient_latrunculi_board.webp',
  },
];

export async function getArticles(): Promise<Article[]> {
  return ARTICLES;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  return ARTICLES.find((article) => article.id === id);
}
