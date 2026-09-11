import type { LessonGame, LessonSummary } from '../types';

export const GO_LESSONS: readonly LessonSummary[] = [
  {
    order: 1,
    title: 'Stones, liberties, territory',
    href: '/learn/go/stones-liberties-territory',
    readingMinutes: 6,
    description:
      'Learn where stones go, how liberties keep them on the board, and how surrounding space builds territory.',
    level: 'beginner',
  },
  {
    order: 2,
    title: 'Reading life and death',
    href: '/learn/go/reading-life-and-death',
    readingMinutes: 8,
    description:
      'Recognize eyes, understand why two eyes protect a group, and spot a simple false eye.',
    level: 'intermediate',
  },
  {
    order: 3,
    title: 'Legal moves and ko',
    href: '/learn/go/legal-moves-and-ko',
    readingMinutes: 6,
    description:
      'Know where you may play, distinguish capture from self-capture, and understand why ko prevents an immediate repeat.',
    level: 'beginner',
  },
  {
    order: 4,
    title: 'Finishing and scoring a game',
    href: '/learn/go/finishing-and-scoring',
    readingMinutes: 7,
    description:
      'Learn when to pass, agree which stones remain, and count a result using Chinese-style area scoring.',
    level: 'beginner',
  },
  {
    order: 5,
    title: 'Connecting, cutting, and saving stones',
    href: '/learn/go/connecting-and-cutting',
    readingMinutes: 7,
    description:
      'Keep stones working together, recognize cutting points, and read a reply before trying to save a group.',
    level: 'intermediate',
  },
  {
    order: 6,
    title: 'Joseki and modern openings',
    href: '/learn/go/joseki-and-modern-openings',
    readingMinutes: 7,
    description:
      'Explore corners, territory, and influence. Understand the purpose of a short corner sequence before memorizing moves.',
    level: 'intermediate',
  },
];

const XIANGQI_LESSONS: readonly LessonSummary[] = [
  {
    order: 1,
    title: 'Reading the Xiangqi board',
    description:
      'Palace, river, and the cannon — the piece with no chess equivalent. Setup and how each soldier moves.',
    level: 'beginner',
  },
  {
    order: 2,
    title: 'The Cannon Attack opening',
    description:
      'Why two of the first three moves are almost always cannon moves. The screen-horse defense and its counters.',
    level: 'intermediate',
  },
  {
    order: 3,
    title: 'Mating the General',
    description:
      'Standard mating patterns: the chariot pin, the horse-cannon double, and the famous flying-general endgame.',
    level: 'advanced',
  },
];

const SHOGI_LESSONS: readonly LessonSummary[] = [
  {
    order: 1,
    title: 'Shogi drops, explained',
    description:
      'Why captured pieces come back, and how it changes everything you know about chess. The 二歩 rule and how to avoid losing on it.',
    level: 'beginner',
  },
  {
    order: 2,
    title: 'Static rook openings',
    description:
      'The Yagura formation and why most professional games begin with the same eight moves. Building a castle around your king.',
    level: 'intermediate',
  },
  {
    order: 3,
    title: 'Tsume problems',
    description:
      'Forced-mate puzzles, sometimes 30 moves deep. The grandmaster training tool that shaped a century of Japanese chess.',
    level: 'advanced',
  },
];

const LATRUNCULI_LESSONS: readonly LessonSummary[] = [
  {
    order: 1,
    title: 'The Roman game of brigands',
    description:
      'How the soldiers move, how to flank, and how to win. The Schädler reconstruction that nearly every modern player uses.',
    level: 'beginner',
  },
  {
    order: 2,
    title: 'Tempo and the vagus stone',
    description:
      'When is a stone "loose"? Roman writers used a vocabulary of vulnerability we are still trying to recover.',
    level: 'intermediate',
  },
  {
    order: 3,
    title: 'Reading ancient game-records',
    description:
      'There are no surviving Roman game-records. But there are descriptions in poetry and prose — and they reveal more than they say.',
    level: 'advanced',
  },
];

export const GAMES: readonly LessonGame[] = [
  {
    id: 'go',
    title: 'Go',
    native: '囲碁',
    lessons: GO_LESSONS,
  },
  {
    id: 'xiangqi',
    title: 'Xiangqi',
    native: '象棋',
    lessons: XIANGQI_LESSONS,
  },
  {
    id: 'shogi',
    title: 'Shogi',
    native: '将棋',
    lessons: SHOGI_LESSONS,
  },
  {
    id: 'latrunculi',
    title: 'Latrunculi',
    lessons: LATRUNCULI_LESSONS,
  },
];
