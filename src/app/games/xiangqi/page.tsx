import Link from 'next/link';
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
import { XiangqiBoard } from '@/features/games/xiangqi/ui/board/XiangqiBoard';

const pieces = [
  {
    title: 'General',
    sign: '將',
    description:
      'Stays inside the palace. Moves one point orthogonally. Cannot face the opposing general on an open file.',
  },
  {
    title: 'Advisor',
    sign: '士',
    description:
      'Stays inside the palace. Moves one point diagonally. Bodyguard to the general.',
  },
  {
    title: 'Elephant',
    sign: '相',
    description:
      'Moves exactly two points diagonally. Cannot cross the river. Blocked if the midpoint is occupied.',
  },
  {
    title: 'Horse',
    sign: '馬',
    description:
      'One step orthogonal then one diagonal outward. Blocked if the orthogonal step is occupied — "hobbling the horse".',
  },
  {
    title: 'Chariot',
    sign: '車',
    description:
      'Moves and captures any number of points orthogonally. The most powerful piece on the board.',
  },
  {
    title: 'Cannon',
    sign: '砲',
    description:
      'Moves like the chariot but captures only by jumping over exactly one piece — friend or foe.',
  },
  {
    title: 'Soldier',
    sign: '兵',
    description:
      'Forward one point. After crossing the river, also sideways. Never retreats. Never promotes.',
  },
];

const history = [
  {
    date: 'c. 569 CE',
    title: 'Earliest reference',
    description:
      'Emperor Wu of Northern Zhou writes a treatise titled Xiang Jing — the oldest known mention of a game by this name.',
  },
  {
    date: 'c. 9th c.',
    title: 'Modern rules emerge',
    description:
      'Emperor Wu of Northern Zhou writes a treatise titled Xiang Jing — the oldest known mention of a game by this name.',
  },
  {
    date: '1132',
    title: 'First treatise',
    description:
      'Emperor Wu of Northern Zhou writes a treatise titled Xiang Jing — the oldest known mention of a game by this name.',
  },
  {
    date: '1956',
    title: 'Modern era',
    description:
      'Emperor Wu of Northern Zhou writes a treatise titled Xiang Jing — the oldest known mention of a game by this name.',
  },
];

const rules = [
  {
    order: '01',
    title: 'The river',
    chinese: '河',
    description:
      'A horizontal gap divides the board between rows 5 and 6. Most pieces cross freely. Elephants cannot. Soldiers gain sideways movement after crossing.',
  },
  {
    order: '02',
    title: 'The palace',
    chinese: '宮',
    description:
      'A 3x3 region at each end, marked by diagonals. Generals and advisors are confined to it for the entire game.',
  },
  {
    order: '03',
    title: 'Flying general',
    chinese: '對面笑',
    description:
      'The two generals may never sit on the same open file with no pieces between them. The threat counts as check.',
  },
  {
    order: '04',
    title: 'Check & checkmate',
    chinese: '將軍',
    description:
      'Standard. The general under attack must escape, block, or capture. A general with no legal response is lost.',
  },
  {
    order: '05',
    title: 'Stalemate',
    chinese: '困斃',
    description:
      'Unlike Western chess, a player with no legal move loses. There are no draws by stalemate.',
  },
  {
    order: '06',
    title: 'Perpetual check',
    chinese: '長將',
    description:
      'Repeatedly checking with no progress is forbidden. The checking side must vary or concede.',
  },
];

export default function XiangqiPage() {
  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/games">Games</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Xiangqi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-32 lg:grid-cols-[4fr_3fr]">
        <div>
          <header>
            <h1 className="font-serif text-6xl font-medium">
              Xiangqi (
              <span className="text-primary" lang="zh-Hans">
                象棋
              </span>
              )
            </h1>

            <p className="text-muted-foreground mt-4 text-sm font-medium">
              Chinese chess &middot; Xiàngqí
            </p>

            <p className="text-muted-foreground mt-6">
              A river divides the board. Generals never meet face-to-face. The
              cannon captures by jumping. Older than the chess most of the world
              plays — and, by player count, far larger.
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-4 gap-8 border-y py-4">
            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Origin
              </dt>
              <dt className="text-lg font-semibold">China &middot; ~9th c.</dt>
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
              <dt className="text-lg font-semibold">9 &times; 10 lines</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Pieces
              </dt>
              <dt className="text-lg font-semibold">32 (16 each)</dt>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="shadow-primary/20 border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="/games/xiangqi/play">
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

        <XiangqiBoard />
      </div>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-semibold">
          Seven types, <span className="text-primary">one army.</span>
        </h2>

        <div className="bg-border grid grid-cols-7 gap-px border">
          {pieces.map((piece) => (
            <div
              key={piece.title}
              className="bg-background hover:bg-card p-6 transition-colors duration-300"
            >
              <div className="text-primary mb-4 font-serif text-5xl font-medium">
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
        <h2 className="mb-12 text-5xl font-semibold">
          Six things <span className="text-primary">chess players</span> notice
          first.
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
        <h2 className="mb-12 text-5xl font-semibold">
          Twelve centuries <span className="text-primary">of play.</span>
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
            <Button asChild size="lg" className="h-12 rounded-full px-8">
              <Link href="/games">
                Quick match <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-8"
            >
              <Link href="/games">vs Engine</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-8"
            >
              <Link href="/games">vs Friend</Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
