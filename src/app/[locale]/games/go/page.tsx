import { Link } from '@/shared/i18n/navigation';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { Button } from '@/shared/ui/button';
import { GoBoard } from '@/features/games/go/ui/board/GoBoard';

const pieces = [
  {
    title: 'Stones',
    sign: '石',
    description:
      'Players take turns placing one stone of their color on any empty intersection. Stones do not move once placed — only captured.',
  },
  {
    title: 'Liberties',
    sign: '気',
    description:
      'Empty intersections directly adjacent to a stone. A stone or group with no liberties is captured and removed from the board.',
  },
  {
    title: 'Territory',
    sign: '地',
    description:
      'Empty intersections completely surrounded by one color count as that player’s points. The player with more territory wins.',
  },
  {
    title: 'Ko',
    sign: '劫',
    description:
      'A capture that would immediately recreate the previous board position is forbidden. The threatened side must play elsewhere first.',
  },
];

const history = [
  {
    date: 'c. 500 BCE',
    title: 'Origins in China',
    description:
      'Earliest references to weiqi appear in the Analects of Confucius and the Zuo Zhuan, suggesting the game was already old.',
  },
  {
    date: '500-00 CE',
    title: 'To Korea & Japan',
    description:
      'Go reaches Korea (baduk) and Japan (igo) via diplomatic and Buddhist exchanges, where it becomes a noble pursuit.',
  },
  {
    date: '1612',
    title: 'Japanese schools',
    description:
      'The Tokugawa shogunate establishes four official Go schools, formalizing the dan ranking system still used today.',
  },
  {
    date: '2016',
    title: 'AlphaGo',
    description:
      'A neural network defeats Lee Sedol 4-1, ending two decades of debate over whether computers could ever master the game.',
  },
];

const rules = [
  {
    order: '01',
    title: 'Placement',
    chinese: '着手',
    description:
      'On your turn, place a stone on any empty intersection. Black plays first. You may also pass — two passes end the game.',
  },
  {
    order: '02',
    title: 'Capture',
    chinese: '取り',
    description:
      'When a stone or connected group has no remaining liberties, it is captured and removed. Captures count toward the final score.',
  },
  {
    order: '03',
    title: 'Suicide',
    chinese: '自殺手',
    description:
      'You may not place a stone that has no liberties — unless that placement captures opposing stones, freeing a liberty.',
  },
  {
    order: '04',
    title: 'Ko rule',
    chinese: '劫',
    description:
      'You cannot make a move that returns the board to its exact previous position. This prevents infinite capture-and-recapture loops.',
  },
  {
    order: '05',
    title: 'Scoring',
    chinese: '計算',
    description:
      'Surrounded empty points plus captured stones equal your score. Komi (typically 6.5) is added to White to compensate for going second.',
  },
  {
    order: '06',
    title: 'Resignation',
    chinese: '投了',
    description:
      'A player who sees no path to win may resign at any time. At pro level, most games end this way rather than by counting.',
  },
];

export default function GoPage() {
  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/games">Games</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Go</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-32 lg:grid-cols-[4fr_3fr]">
        <div>
          <header>
            <h1 className="font-serif text-6xl font-medium">
              Go (
              <span className="text-primary" lang="zh-Hans">
                围棋
              </span>
              )
            </h1>

            <p className="text-muted-foreground mt-4 text-sm font-medium">
              Wéiqí &middot; Baduk &middot; Igo
            </p>

            <p className="text-muted-foreground mt-6">
              Two players, two colors of stones, one grid. The rules fit on an
              index card — and yet the legal positions outnumber the atoms in
              the observable universe by many orders of magnitude. The oldest
              game still played.
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-4 gap-8 border-y py-4">
            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Origin
              </dt>
              <dt className="text-lg font-semibold">
                China &middot; ~2500 yrs
              </dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Players
              </dt>
              <dt className="text-lg font-semibold">2</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Board
              </dt>
              <dt className="text-lg font-semibold">19 &times; 19 lines</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Pieces
              </dt>
              <dt className="text-lg font-semibold">360 (180 each)</dt>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="shadow-primary/20 border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="/games/go/play">
                Play now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 h-10 rounded-full px-8 backdrop-blur-sm"
            >
              <Link href="/games">Read the rules</Link>
            </Button>
          </div>
        </div>

        <GoBoard
          options={{
            size: 19,
            cell: 32,
            padding: 32,
          }}
        />
      </div>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">
          Four ideas, <span className="text-primary">infinite play.</span>
        </h2>

        <div className="bg-border grid grid-cols-4 gap-px border">
          {pieces.map((piece) => (
            <div
              key={piece.title}
              className="bg-background hover:bg-card p-6 transition-colors duration-300"
            >
              <div className="text-primary mb-4 text-5xl font-medium">
                {piece.sign}
              </div>
              <h3 className="mb-4 text-lg font-medium">{piece.title}</h3>
              <p className="text-muted-foreground text-[13px]">
                {piece.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">
          Six rules, <span className="text-primary">that's all.</span>
        </h2>

        <div className="bg-border grid grid-cols-3 gap-px border">
          {rules.map((rule) => (
            <div key={rule.order} className="bg-background p-6">
              <div className="text-muted-foreground mb-4 text-xs">
                {rule.order}
              </div>
              <h3 className="mb-4 text-xl font-medium">
                {rule.title} (
                <span className="text-primary">{rule.chinese}</span>)
              </h3>
              <p className="text-muted-foreground text-sm">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">
          Twenty-five centuries <span className="text-primary">of play.</span>
        </h2>

        <div className="grid grid-cols-4 gap-px divide-x border-t">
          {history.map((item) => (
            <div
              key={item.date}
              className="before:bg-primary relative p-6 before:absolute before:-top-2 before:-left-2 before:size-3 before:rounded-full"
            >
              <div className="text-muted-foreground mb-4 text-xs">
                {item.date}
              </div>
              <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-medium">
            Ready to <span className="text-primary">play?</span>
          </h2>

          <div className="flex items-center gap-x-4">
            <Button
              asChild
              className="border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="/games">
                Quick match
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-full px-8"
            >
              <Link href="/games">vs Engine</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-full px-8"
            >
              <Link href="/games">vs Friend</Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
