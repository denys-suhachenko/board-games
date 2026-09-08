import {
  GoAnalysisRequest,
  GoAnalysisResponse,
  GoStone,
} from '@/features/games/go/types';

const VALID_SIZES = [9, 13, 19];
const VALID_STONES: GoStone[] = ['black', 'white', null];

function isValidStone(value: unknown): value is GoStone {
  return VALID_STONES.includes(value as GoStone);
}

function isValidBoard(board: unknown, size: number): board is GoStone[][] {
  if (!Array.isArray(board) || board.length !== size) {
    return false;
  }

  return board.every(
    (row) =>
      Array.isArray(row) &&
      row.length === size &&
      row.every((cell) => isValidStone(cell)),
  );
}

function isValidGoAnalysisRequest(value: unknown): value is GoAnalysisRequest {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const { board, size, turn } = value as Record<string, unknown>;

  if (typeof size !== 'number' || !VALID_SIZES.includes(size)) {
    return false;
  }

  if (turn !== 'black' && turn !== 'white') {
    return false;
  }

  return isValidBoard(board, size);
}

export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!isValidGoAnalysisRequest(raw)) {
    return Response.json(
      { error: 'Invalid Go analysis request payload.' },
      { status: 400 },
    );
  }

  // TODO: integrate AI provider once selected.
  const response: GoAnalysisResponse = {
    commentary:
      'Placeholder analysis — AI provider integration is not yet implemented.',
  };

  return Response.json(response);
}
