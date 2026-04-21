export type BoardSize = 9 | 13 | 19;

export type BoardOptions = {
  size: BoardSize;
  cell: number;
  padding: number;
};

export type Position = {
  x: number;
  y: number;
};

export type Point = Position & {
  cx: number;
  cy: number;
};

export type Stone = 'white' | 'black' | null;

export type Board = Stone[][];
