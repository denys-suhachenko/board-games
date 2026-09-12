import { GameRule } from '../../model/types';

export const RULES: GameRule[] = [
  {
    order: '01',
    title: 'The river',
    chinese: '河',
    description:
      'A horizontal gap divides the board between rows 5 and 6. Most pieces cross freely. Elephants cannot. Soldiers gain sideways movement after crossing.',
  },
  {
    order: '02',
    title: 'The palace',
    chinese: '宮',
    description:
      'A 3x3 region at each end, marked by diagonals. Generals and advisors are confined to it for the entire game.',
  },
  {
    order: '03',
    title: 'Flying general',
    chinese: '對面笑',
    description:
      'The two generals may never sit on the same open file with no pieces between them. The threat counts as check.',
  },
  {
    order: '04',
    title: 'Check & checkmate',
    chinese: '將軍',
    description:
      'Standard. The general under attack must escape, block, or capture. A general with no legal response is lost.',
  },
  {
    order: '05',
    title: 'Stalemate',
    chinese: '困斃',
    description:
      'Unlike Western chess, a player with no legal move loses. There are no draws by stalemate.',
  },
  {
    order: '06',
    title: 'Perpetual check',
    chinese: '長將',
    description:
      'Repeatedly checking with no progress is forbidden. The checking side must vary or concede.',
  },
];
