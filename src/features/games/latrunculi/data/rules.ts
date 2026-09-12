import { GameRule } from '../../model/types';

export const RULES: GameRule[] = [
  {
    order: '01',
    title: 'Movement',
    chinese: 'motus',
    description:
      'Each stone moves any number of empty squares orthogonally — like a chess rook. No jumping. No diagonals. The dux moves the same way.',
  },
  {
    order: '02',
    title: 'Capture by flanking',
    chinese: 'captura',
    description:
      'Surround an enemy stone on two opposite sides — horizontally or vertically — with your stones. The flanked stone is captured and removed. Two flank, one falls.',
  },
  {
    order: '03',
    title: 'Safe entry',
    chinese: 'tutus',
    description:
      'You may move a stone into a position where it sits between two enemy stones without being captured. The flanking must be the active move.',
  },
  {
    order: '04',
    title: 'The dux',
    chinese: 'dux',
    description:
      "In Schädler's reconstruction, capturing the enemy dux is a primary win condition. Other reconstructions treat the dux as merely the last piece standing",
  },
  {
    order: '05',
    title: 'Stalemate',
    chinese: 'incitus',
    description:
      'A player who cannot move — incitus, "without movement" — loses. Roman poet Ovid used the word as a synonym for utter defeat.',
  },
  {
    order: '06',
    title: 'Victory',
    chinese: 'victoria',
    description:
      'Win by capturing all enemy stones, by capturing the dux, or by leaving the opponent with no legal move. The exact balance depends on the variant played.',
  },
];
