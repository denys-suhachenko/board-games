import Link from 'next/link';

import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const GO_LESSONS: any[] = [
  {
    id: '1',
    title: 'Stones, liberties, territory',
    description:
      'The three rules that contain the entire game. Capture, ko, and counting at the end.',
    level: 'beginner',
  },
  {
    id: '2',
    title: 'Reading life and death',
    description:
      'When does a group live? The two-eye rule and its surprising corner cases — including the seki standoff.',
    level: 'intermediate',
  },
  {
    id: '3',
    title: 'Joseki and modern openings',
    description:
      'Corner sequences memorized for centuries. How to study them — and why the strongest players unlearn them.',
    level: 'advanced',
  },
];

const XIANGQI_LESSONS: any[] = [
  {
    id: '1',
    title: 'Reading the Xiangqi board',
    description:
      'Palace, river, and the cannon — the piece with no chess equivalent. Setup and how each soldier moves.',
    level: 'beginner',
  },
  {
    id: '2',
    title: 'The Cannon Attack opening',
    description:
      'Why two of the first three moves are almost always cannon moves. The screen-horse defense and its counters.',
    level: 'intermediate',
  },
  {
    id: '3',
    title: 'Mating the General',
    description:
      'Standard mating patterns: the chariot pin, the horse-cannon double, and the famous flying-general endgame.',
    level: 'advanced',
  },
];

const SHOGI_LESSONS: any[] = [
  {
    id: '1',
    title: 'Shogi drops, explained',
    description:
      'Why captured pieces come back, and how it changes everything you know about chess. The 二歩 rule and how to avoid losing on it.',
    level: 'beginner',
  },
  {
    id: '2',
    title: 'Static rook openings',
    description:
      'The Yagura formation and why most professional games begin with the same eight moves. Building a castle around your king.',
    level: 'intermediate',
  },
  {
    id: '3',
    title: 'Tsume problems',
    description:
      'Forced-mate puzzles, sometimes 30 moves deep. The grandmaster training tool that shaped a century of Japanese chess.',
    level: 'advanced',
  },
];

const LATRUNCULI_LESSONS: any[] = [
  {
    id: '1',
    title: 'The Roman game of brigands',
    description:
      'How the soldiers move, how to flank, and how to win. The Schädler reconstruction that nearly every modern player uses.',
    level: 'beginner',
  },
  {
    id: '2',
    title: 'Tempo and the vagus stone',
    description:
      'When is a stone "loose"? Roman writers used a vocabulary of vulnerability we are still trying to recover.',
    level: 'intermediate',
  },
  {
    id: '3',
    title: 'Reading ancient game-records',
    description:
      'There are no surviving Roman game-records. But there are descriptions in poetry and prose — and they reveal more than they say.',
    level: 'advanced',
  },
];

const GAMES = [
  {
    id: 'go',
    title: 'Go',
    native: '囲碁',
    lessons: GO_LESSONS,
  },
  {
    id: 'xiangqi',
    title: 'Xiangqi',
    native: '象棋',
    lessons: XIANGQI_LESSONS,
  },
  {
    id: 'shogi',
    title: 'Shogi',
    native: '将棋',
    lessons: SHOGI_LESSONS,
  },
  {
    id: 'latrunculi',
    title: 'Latrunculi',
    lessons: LATRUNCULI_LESSONS,
  },
];

export default function LearnPage() {
  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Learn</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Start <span className="text-primary">anywhere.</span>
        </h1>
      </header>

      <main>
        {GAMES.map((game) => (
          <section key={game.id} className="border-t py-10">
            <header className="mb-6">
              <h2 className="text-3xl font-medium md:text-4xl">
                {game.title}{' '}
                {game.native && (
                  <span className="text-muted-foreground text-2xl">
                    {game.native}
                  </span>
                )}
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {game.lessons.map((lesson) => (
                <Link
                  key={`${game.id}-${lesson.id}`}
                  href="/learn"
                  className="group bg-card flex cursor-pointer flex-col overflow-hidden rounded-md border p-6 transition-transform hover:translate-y-[-3px]"
                >
                  <div className="mb-auto flex items-center justify-between gap-3">
                    <span className="text-muted-foreground text-xs font-medium uppercase">
                      Lesson {lesson.id}
                    </span>
                    <LevelBadge level={lesson.level} />
                  </div>

                  <h3 className="leading[1.2] group-hover:text-primary my-3 text-2xl font-medium tracking-[-0.01em] text-pretty transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-sm leading-[1.55] text-pretty text-gray-300">
                    {lesson.description}
                  </p>

                  <div className="text-muted-foreground mt-4 flex items-center justify-between border-t pt-4 text-xs uppercase">
                    <span>Read lesson</span>
                    <ArrowRightIcon className="group-hover:text-primary size-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
}

function LevelBadge({
  level,
}: {
  level: 'beginner' | 'intermediate' | 'advanced';
}) {
  const labelColor = {
    beginner: 'text-green-500',
    intermediate: 'text-yellow-500',
    advanced: 'text-destructive',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-1 text-xs text-[11px] font-medium uppercase',
        labelColor[level],
      )}
    >
      {level}
    </span>
  );
}
