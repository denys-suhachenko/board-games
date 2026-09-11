import type { GoLessonPoint, GoLessonStone } from './go-lesson-types';

type MoveResult =
  | { legal: true; stones: readonly GoLessonStone[] }
  | { legal: false; reason: 'outside' | 'occupied' | 'self-capture' };

// Resolve a single lesson move. Ko restrictions belong to the exercise,
// which knows the previous position; this helper has no game-history state.
export function playLessonMove(
  stones: readonly GoLessonStone[],
  size: number,
  point: GoLessonPoint,
  color: GoLessonStone['color'],
): MoveResult {
  const { x, y } = point;
  if (
    !Number.isInteger(x) ||
    !Number.isInteger(y) ||
    x < 0 ||
    y < 0 ||
    x >= size ||
    y >= size
  ) {
    return { legal: false, reason: 'outside' };
  }
  const board = new Map(
    stones.map((stone) => [stone.y * size + stone.x, stone.color]),
  );
  const target = y * size + x;
  if (board.has(target)) return { legal: false, reason: 'occupied' };

  function neighbors(id: number) {
    const column = id % size;
    const row = Math.floor(id / size);
    return [
      ...(column > 0 ? [id - 1] : []),
      ...(column < size - 1 ? [id + 1] : []),
      ...(row > 0 ? [id - size] : []),
      ...(row < size - 1 ? [id + size] : []),
    ];
  }

  function group(start: number) {
    const connected = new Set([start]);
    const liberties = new Set<number>();
    const pending = [start];
    for (let index = 0; index < pending.length; index++) {
      for (const neighbor of neighbors(pending[index])) {
        if (!board.has(neighbor)) liberties.add(neighbor);
        else if (
          board.get(neighbor) === board.get(start) &&
          !connected.has(neighbor)
        ) {
          connected.add(neighbor);
          pending.push(neighbor);
        }
      }
    }
    return { connected, liberties };
  }

  board.set(target, color);
  for (const neighbor of neighbors(target)) {
    if (board.has(neighbor) && board.get(neighbor) !== color) {
      const opponent = group(neighbor);
      if (opponent.liberties.size === 0) {
        for (const captured of opponent.connected) board.delete(captured);
      }
    }
  }
  if (group(target).liberties.size === 0)
    return { legal: false, reason: 'self-capture' };
  return {
    legal: true,
    stones: Array.from(board, ([id, stoneColor]) => ({
      x: id % size,
      y: Math.floor(id / size),
      color: stoneColor,
    })),
  };
}
