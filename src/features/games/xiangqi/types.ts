export type XiangqiBoardSide = 'red' | 'black';

export type XiangqiieceType =
  | 'general'
  | 'advisor'
  | 'elephant'
  | 'horse'
  | 'chariot'
  | 'cannon'
  | 'soldier';

export type XiangqiPiece = {
  id: string;
  side: XiangqiBoardSide;
  type: XiangqiieceType;
};

export type XiangqiBoardMatrix = Array<Array<XiangqiPiece | null>>;
