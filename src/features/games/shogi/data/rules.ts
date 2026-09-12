import { GameRule } from '../../model/types';

export const RULES: GameRule[] = [
  {
    order: '01',
    title: 'Drops',
    chinese: '打',
    description:
      'Captured pieces switch sides and join your reserve. On your turn, instead of moving, you may drop any reserve piece on any empty square — a move unique to shogi.',
  },
  {
    order: '02',
    title: 'Promotion zone',
    chinese: '敵陣',
    description:
      "The opponent's last three ranks. A piece that moves into, within, or out of this zone may promote. Most promotions add Gold-like movement.",
  },
  {
    order: '03',
    title: 'Forced promotion',
    chinese: '不成禁',
    description:
      'A pawn or lance on the last rank, or a knight on the last two, has no legal move. It must have promoted on the move that took it there.',
  },
  {
    order: '04',
    title: 'Two pawns',
    chinese: '二歩',
    description:
      'You may not have two unpromoted pawns on the same file. Dropping a second is illegal — and an instant loss in tournament play.',
  },
  {
    order: '05',
    title: 'Drop pawn mate',
    chinese: '打ち歩詰め',
    description:
      'You may not deliver checkmate by dropping a pawn. Pushing a pawn to mate is fine; dropping one is forbidden.',
  },
  {
    order: '06',
    title: 'Repetition',
    chinese: '千日手',
    description:
      'The same position with the same player to move, repeated four times, is a draw — unless the repetition involves perpetual check, which loses.',
  },
];
