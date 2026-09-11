type Stone = { x: number; y: number; color: 'black' | 'white' };

// Rows run from top to bottom. B = black, W = white, . = empty.
function position(rows: readonly string[]): readonly Stone[] {
  return rows.flatMap((row, y) =>
    Array.from(row).flatMap((point, x): Stone[] =>
      point === 'B' || point === 'W'
        ? [{ x, y, color: point === 'B' ? 'black' : 'white' }]
        : [],
    ),
  );
}

export const eyeExample = position([
  '.B...',
  'BB...',
  '.....',
  '.....',
  '.....',
]);
export const oneEye = position(['.BW..', 'BBW..', 'WWW..', '.....', '.....']);
export const oneEyeCaptured = position([
  'W.W..',
  '..W..',
  'WWW..',
  '.....',
  '.....',
]);
export const twoEyes = position(['.B.BW', 'BBBBW', 'WWWWW', '.....', '.....']);
export const unsettled = position([
  '...BW',
  'BBBBW',
  'WWWWW',
  '.....',
  '.....',
]);
export const falseEye = position(['.BW..', 'BW...', 'BB...', '.....', '.....']);
export const falseEyeCaptured = position([
  'W.W..',
  'BW...',
  'BB...',
  '.....',
  '.....',
]);

export const eyePoints = [
  { x: 0, y: 0 },
  { x: 2, y: 0 },
] as const;
