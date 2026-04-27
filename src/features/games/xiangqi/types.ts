export type XiangqiBoardSide = 'red' | 'black';

export type XiangqiPieceType =
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
  type: XiangqiPieceType;
};

export type XiangqiBoardMatrix = Array<Array<XiangqiPiece | null>>;
