'use client';

import { useState, useMemo } from 'react';

import { GoBoard as GoBoardType, GoBoardOptions, GoStone } from '../types';
import { createBoardPoints, initBoard } from '../utils';

import { BoardDefs } from './BoardDefs';
import { GoBoardGrid } from './GoBoardGrid';
import { GoHitAreas } from './GoHitAreas';
import { GoBoardStones } from './BoardStones';

type GoBoardProps = {
  options: GoBoardOptions;
};

export function GoBoard({ options }: GoBoardProps) {
  const [game, setGame] = useState<{
    board: GoBoardType;
    turn: Exclude<GoStone, null>;
  }>({
    board: initBoard(options.size),
    turn: 'black',
  });

  const { innerSize, canvasSize, points } = useMemo(() => {
    const inner = options.cell * (options.size - 1);

    return {
      innerSize: inner,
      canvasSize: inner + options.padding * 2,
      points: createBoardPoints(options),
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
    <div className="flex h-dvh items-center justify-center p-4">
      <svg
        viewBox={`0 0 ${canvasSize} ${canvasSize}`}
        role="img"
        className="block h-full w-auto max-w-full rounded-md border shadow-md/10"
        aria-label={`Go game board ${options.size} by ${options.size}`}
      >
        <BoardDefs />

        <GoBoardGrid
          innerSize={innerSize}
          canvasSize={canvasSize}
          options={options}
        />

        <GoBoardStones board={game.board} points={points} cell={options.cell} />

        <GoHitAreas
          board={game.board}
          points={points}
          options={options}
          onClick={applyMove}
        />
      </svg>
    </div>
  );
}
