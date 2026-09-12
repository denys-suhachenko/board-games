import { GamePiece } from '../../model/types';

export const PIECES: GamePiece[] = [
  {
    title: 'King',
    sign: '王',
    description:
      'One step in any direction. Sente uses 王將, gote uses 玉將 — the same role with different kanji by tradition.',
  },
  {
    title: 'Rook',
    sign: '飛',
    description:
      'Any number of squares orthogonally. Promotes to Dragon King (龍王), gaining one-step diagonal moves.',
  },
  {
    title: 'Bishop',
    sign: '角',
    description:
      'Any number of squares diagonally. Promotes to Dragon Horse (龍馬), gaining one-step orthogonal moves.',
  },
  {
    title: 'Gold General',
    sign: '金',
    description:
      'One step in any direction except the two diagonal-back squares. Does not promote.',
  },
  {
    title: 'Silver General',
    sign: '銀',
    description:
      'One step diagonally or straight forward. Promotes to a Gold-equivalent piece (成銀).',
  },
  {
    title: 'Knight',
    sign: '桂',
    description:
      'Jumps two forward and one sideways — only forward. The only piece that can jump. Promotes to Gold.',
  },
  {
    title: 'Lance',
    sign: '香',
    description:
      'Any number of squares straight forward. Never sideways or backward. Promotes to Gold.',
  },
  {
    title: 'Pawn',
    sign: '歩',
    description:
      'One square straight forward. Captures the same way it moves. Promotes to Tokin (と) — a Gold-equivalent.',
  },
];
