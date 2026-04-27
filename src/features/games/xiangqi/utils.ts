import { XiangqiBoardMatrix, XiangqiPiece } from './types';

export const CELL = 64;
export const PADDING = 48;

export const COLS = 8;
export const ROWS = 4;

export const BOARD_COLS = COLS + 1;
export const BOARD_ROWS = (ROWS + 1) * 2;

export const GRID_WIDTH = CELL * COLS;
export const GRID_HEIGHT = CELL * (ROWS * 2 + 1);

export const BOARD_WIDTH = GRID_WIDTH + PADDING * 2;
export const BOARD_HEIGHT = GRID_HEIGHT + PADDING * 2;

export const HIT_SIZE = CELL * 0.85;
export const HIT_SIZE_PERCENT = (HIT_SIZE / BOARD_WIDTH) * 100;

export const BOARD_POINTS = Array.from({ length: BOARD_ROWS }, (_, row) =>
  Array.from({ length: BOARD_COLS }, (_, col) => ({ row, col })),
).flat();

export function getPointPosition(row: number, col: number) {
  const x = PADDING + col * CELL;
  const y = PADDING + row * CELL;

  return { left: (x / BOARD_WIDTH) * 100, top: (y / BOARD_HEIGHT) * 100 };
}

function createEmptyBoard(): XiangqiBoardMatrix {
  return Array.from({ length: BOARD_ROWS }, () =>
    Array.from({ length: BOARD_COLS }, () => null),
  );
}

function createInitialXiangqiBoard(): XiangqiBoardMatrix {
  const board = createEmptyBoard();

  // Black side, top
  board[0][0] = { id: 'black-chariot-1', side: 'black', type: 'chariot' };
  board[0][1] = { id: 'black-horse-1', side: 'black', type: 'horse' };
  board[0][2] = { id: 'black-elephant-1', side: 'black', type: 'elephant' };
  board[0][3] = { id: 'black-advisor-1', side: 'black', type: 'advisor' };
  board[0][4] = { id: 'black-general', side: 'black', type: 'general' };
  board[0][5] = { id: 'black-advisor-2', side: 'black', type: 'advisor' };
  board[0][6] = { id: 'black-elephant-2', side: 'black', type: 'elephant' };
  board[0][7] = { id: 'black-horse-2', side: 'black', type: 'horse' };
  board[0][8] = { id: 'black-chariot-2', side: 'black', type: 'chariot' };

  board[2][1] = { id: 'black-cannon-1', side: 'black', type: 'cannon' };
  board[2][7] = { id: 'black-cannon-2', side: 'black', type: 'cannon' };

  board[3][0] = { id: 'black-soldier-1', side: 'black', type: 'soldier' };
  board[3][2] = { id: 'black-soldier-2', side: 'black', type: 'soldier' };
  board[3][4] = { id: 'black-soldier-3', side: 'black', type: 'soldier' };
  board[3][6] = { id: 'black-soldier-4', side: 'black', type: 'soldier' };
  board[3][8] = { id: 'black-soldier-5', side: 'black', type: 'soldier' };

  // Red side, bottom
  board[9][0] = { id: 'red-chariot-1', side: 'red', type: 'chariot' };
  board[9][1] = { id: 'red-horse-1', side: 'red', type: 'horse' };
  board[9][2] = { id: 'red-elephant-1', side: 'red', type: 'elephant' };
  board[9][3] = { id: 'red-advisor-1', side: 'red', type: 'advisor' };
  board[9][4] = { id: 'red-general', side: 'red', type: 'general' };
  board[9][5] = { id: 'red-advisor-2', side: 'red', type: 'advisor' };
  board[9][6] = { id: 'red-elephant-2', side: 'red', type: 'elephant' };
  board[9][7] = { id: 'red-horse-2', side: 'red', type: 'horse' };
  board[9][8] = { id: 'red-chariot-2', side: 'red', type: 'chariot' };

  board[7][1] = { id: 'red-cannon-1', side: 'red', type: 'cannon' };
  board[7][7] = { id: 'red-cannon-2', side: 'red', type: 'cannon' };

  board[6][0] = { id: 'red-soldier-1', side: 'red', type: 'soldier' };
  board[6][2] = { id: 'red-soldier-2', side: 'red', type: 'soldier' };
  board[6][4] = { id: 'red-soldier-3', side: 'red', type: 'soldier' };
  board[6][6] = { id: 'red-soldier-4', side: 'red', type: 'soldier' };
  board[6][8] = { id: 'red-soldier-5', side: 'red', type: 'soldier' };

  return board;
}

export const INITIAL_XIANGQI_BOARD = createInitialXiangqiBoard();

export function getPieceImage(piece: XiangqiPiece) {
  return `/xiangqi/${piece.side}_filled/${piece.type}.svg`;
}
