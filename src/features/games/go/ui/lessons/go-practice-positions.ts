import type { GoDiagram } from './go-lesson-types';

type Stone = GoDiagram['stones'][number];

// Top-to-bottom rows: B = black, W = white, . = empty.
function stones(rows: readonly string[]): readonly Stone[] {
  return rows.flatMap((row, y) =>
    Array.from(row).flatMap((point, x): Stone[] =>
      point === 'B' || point === 'W'
        ? [{ x, y, color: point === 'B' ? 'black' : 'white' }]
        : [],
    ),
  );
}

const koBefore = stones(['..W..', '.W.W.', '.BWB.', '..B..', '.....']);
const koAfter = stones(['..W..', '.WBW.', '.B.B.', '..B..', '.....']);
const remoteMoves = [
  { x: 0, y: 4, color: 'white' },
  { x: 4, y: 4, color: 'black' },
] as const;

export const legalPositions = {
  occupied: stones(['.....', '.....', '..B..', '.....', '.....']),
  selfCapture: stones(['.....', '..W..', '.W.W.', '..W..', '.....']),
  koBefore,
  koAfter,
  koElsewhere: [...koAfter, ...remoteMoves],
  koRecaptured: [...koBefore, ...remoteMoves],
};

export const scoringPositions = {
  unfinished: stones(['.BWW.', 'BB.WW', '.BWW.', 'BBBWW', 'BBBWW']),
  settled: stones(['.BWW.', 'BBBWW', '.BWW.', 'BBBWW', 'BBBWW']),
  deadBefore: stones(['WB.BW', '.BBBW', 'BBBWW', 'WWWWW', 'W.W.W']),
  deadRemoved: stones(['.B.BW', '.BBBW', 'BBBWW', 'WWWWW', 'W.W.W']),
};

const atari = stones(['.....', '..W..', '.WBW.', '.....', '.BBB.']);
const connected = [...atari, { x: 2, y: 3, color: 'black' } as const];
const cutBefore = stones(['.....', '..W..', '.B.B.', '.....', '.....']);

export const connectionPositions = {
  solid: stones(['.....', '.....', '.BB..', '.....', '.....']),
  diagonal: stones(['.....', '.B...', '..B..', '.....', '.....']),
  cutBefore,
  cutAfter: [...cutBefore, { x: 2, y: 2, color: 'white' } as const],
  atari,
  connected,
  afterReply: [...connected, { x: 1, y: 3, color: 'white' } as const],
  captureEscape: stones(['.....', '.BW..', '.WBW.', '.B...', '.....']),
  captureEscapeAfter: stones(['.....', '.BW..', 'B.BW.', '.B...', '.....']),
  trapped: stones(['BW...', '.W...', '.W...', 'W....', '.....']),
  delayed: stones(['BW...', 'BW...', '.W...', 'W....', '.....']),
  captured: stones(['.W...', '.W...', 'WW...', 'W....', '.....']),
};

const star: readonly Stone[] = [{ x: 3, y: 3, color: 'black' }];
const invasion: readonly Stone[] = [...star, { x: 2, y: 2, color: 'white' }];
const block: readonly Stone[] = [...invasion, { x: 3, y: 2, color: 'black' }];
const extend: readonly Stone[] = [...block, { x: 2, y: 3, color: 'white' }];

export const openingPositions = {
  lowCorner: [{ x: 2, y: 2, color: 'black' }] as readonly Stone[],
  star,
  invasion,
  block,
  extend,
  rightSupport: [...extend, { x: 6, y: 3, color: 'black' } as const],
  lowerSupport: [...extend, { x: 3, y: 6, color: 'black' } as const],
};
