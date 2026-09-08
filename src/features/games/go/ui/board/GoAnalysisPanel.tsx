'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/button';

import {
  GoAnalysisRequest,
  GoAnalysisResponse,
  GoBoard,
  GoBoardSize,
  GoStone,
} from '../../types';

type GoAnalysisPanelProps = {
  board: GoBoard;
  size: GoBoardSize;
  turn: Exclude<GoStone, null>;
};

type AnalysisState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; commentary: string }
  | { status: 'error'; message: string };

export function GoAnalysisPanel({ board, size, turn }: GoAnalysisPanelProps) {
  const [state, setState] = useState<AnalysisState>({ status: 'idle' });

  const analyze = async () => {
    setState({ status: 'loading' });

    try {
      const requestBody: GoAnalysisRequest = { board, size, turn };

      const response = await fetch('/api/go/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        setState({
          status: 'error',
          message: 'Could not analyze the position. Please try again.',
        });
        return;
      }

      const data: GoAnalysisResponse = await response.json();
      setState({ status: 'success', commentary: data.commentary });
    } catch {
      setState({
        status: 'error',
        message: 'Could not analyze the position. Please try again.',
      });
    }
  };

  return (
    <div className="w-full max-w-md space-y-3">
      <Button
        onClick={analyze}
        disabled={state.status === 'loading'}
        variant="secondary"
        className="w-full"
      >
        {state.status === 'loading' ? 'Analyzing…' : 'Analyze position'}
      </Button>

      <div aria-live="polite">
        {state.status === 'success' && (
          <p role="status" className="text-muted-foreground text-sm">
            {state.commentary}
          </p>
        )}

        {state.status === 'error' && (
          <p role="alert" className="text-destructive text-sm">
            {state.message}
          </p>
        )}
      </div>
    </div>
  );
}
