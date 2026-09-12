export type GamePiece = {
  title: string;
  sign: string;
  description: string;
};

export type GameRule = {
  title: string;
  chinese: string;
  order: string;
  description: string;
};

export type GameHistoryItem = {
  title: string;
  description: string;
  date: string;
};

export type Game = {
  id: string;
  title: string;
  originalTitle?: string;
  subtitle?: string;
  description: string;
  img?: string;
  origin: string;
  category?: string;
  country?: string;
  players: number;
  size: string;
  pieces: {
    title: string;
    items: GamePiece[];
    total: string;
    columns?: number;
  };
  rules: {
    title: string;
    items: GameRule[];
    columns?: number;
  };
  history: {
    title: string;
    items: GameHistoryItem[];
    columns?: number;
  };
};

export type GameListItem = {
  id: string;
  title: string;
  description: string;
  img: string;
  country: string;
  category: string;
  size: string;
  players: number;
};
