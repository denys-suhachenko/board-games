export type GoBoardSize = 9 | 13 | 19;

export type GoBoardOptions = {
  size: GoBoardSize;
  cell: number;
  padding: number;
};

export type GoStonePosition = {
  x: number;
  y: number;
};

export type GoStonePoint = GoStonePosition & {
  cx: number;
  cy: number;
};

export type GoStone = 'white' | 'black' | null;

export type GoBoard = GoStone[][];
