'use client';

import { useMemo, useState } from 'react';

import { Board, BoardOptions, Stone } from '../types';
import { initBoard, createBoardPoints } from '../utils';

import { BoardStones } from './BoardStones';
import { BoardDefs } from './BoardDefs';
import { BoardGrid } from './BoardGrid';
import { HitAreas } from './HitAreas';
import { BoardHoshi } from './BoardHoshi';

type GoBoardProps = {
  options: BoardOptions;
};

export function GoBoard({ options }: GoBoardProps) {
  const [game, setGame] = useState<{
    board: Board;
    turn: Exclude<Stone, null>;
  }>({
    board: initBoard(options.size),
    turn: 'black',
  });

  const { innerSize, canvasSize, points } = useMemo(() => {
    const inner = options.cell * (options.size - 1);
    return {
      innerSize: inner,
      canvasSize: inner + options.padding * 2,
      points: createBoardPoints(options.size, options.cell, options.padding),
    };
  }, [options.size, options.cell, options.padding]);

  const applyMove = (x: number, y: number) => {
    setGame((prev) => {
      if (prev.board[x][y] !== null) {
        return prev;
      }

      const newBoard = prev.board.map((row) => [...row]);
      newBoard[x][y] = prev.turn;

      return {
        board: newBoard,
        turn: prev.turn === 'black' ? 'white' : 'black',
      };
    });
  };

  return (
    <svg
      viewBox={`0 0 ${canvasSize} ${canvasSize}`}
      className="mx-auto h-auto w-full max-w-3xl rounded-md border shadow-md/10"
      role="img"
      aria-label={`Go game board ${options.size} by ${options.size}`}
    >
      <BoardDefs />

      {/* canvas */}
      <rect x={0} y={0} width={canvasSize} height={canvasSize} fill="#F5DEBE" />

      {/* grid lines */}
      <BoardGrid options={options} innerSize={innerSize} />

      {/* hoshi points */}
      <BoardHoshi options={options} />

      <BoardStones board={game.board} points={points} cell={options.cell} />

      <HitAreas options={options} points={points} onClick={applyMove} />
    </svg>
  );
}
