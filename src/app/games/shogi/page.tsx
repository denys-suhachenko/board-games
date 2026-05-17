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

const pieces = [
  {
    title: 'King',
    sign: '王',
    description:
      'One step in any direction. Sente uses 王將, gote uses 玉將 — the same role with different kanji by tradition.',
  },
  {
    title: 'Rook',
    sign: '飛',
    description:
      'Any number of squares orthogonally. Promotes to Dragon King (龍王), gaining one-step diagonal moves.',
  },
  {
    title: 'Bishop',
    sign: '角',
    description:
      'Any number of squares diagonally. Promotes to Dragon Horse (龍馬), gaining one-step orthogonal moves.',
  },
  {
    title: 'Gold General',
    sign: '金',
    description:
      'One step in any direction except the two diagonal-back squares. Does not promote.',
  },
  {
    title: 'Silver General',
    sign: '銀',
    description:
      'One step diagonally or straight forward. Promotes to a Gold-equivalent piece (成銀).',
  },
  {
    title: 'Knight',
    sign: '桂',
    description:
      'Jumps two forward and one sideways — only forward. The only piece that can jump. Promotes to Gold.',
  },
  {
    title: 'Lance',
    sign: '香',
    description:
      'Any number of squares straight forward. Never sideways or backward. Promotes to Gold.',
  },
  {
    title: 'Pawn',
    sign: '歩',
    description:
      'One square straight forward. Captures the same way it moves. Promotes to Tokin (と) — a Gold-equivalent.',
  },
];

const rules = [
  {
    order: '01',
    title: 'Drops',
    chinese: '打',
    description:
      'Captured pieces switch sides and join your reserve. On your turn, instead of moving, you may drop any reserve piece on any empty square — a move unique to shogi.',
  },
  {
    order: '02',
    title: 'Promotion zone',
    chinese: '敵陣',
    description:
      "The opponent's last three ranks. A piece that moves into, within, or out of this zone may promote. Most promotions add Gold-like movement.",
  },
  {
    order: '03',
    title: 'Forced promotion',
    chinese: '不成禁',
    description:
      'A pawn or lance on the last rank, or a knight on the last two, has no legal move. It must have promoted on the move that took it there.',
  },
  {
    order: '04',
    title: 'Two pawns',
    chinese: '二歩',
    description:
      'You may not have two unpromoted pawns on the same file. Dropping a second is illegal — and an instant loss in tournament play.',
  },
  {
    order: '05',
    title: 'Drop pawn mate',
    chinese: '打ち歩詰め',
    description:
      'You may not deliver checkmate by dropping a pawn. Pushing a pawn to mate is fine; dropping one is forbidden.',
  },
  {
    order: '06',
    title: 'Repetition',
    chinese: '千日手',
    description:
      'The same position with the same player to move, repeated four times, is a draw — unless the repetition involves perpetual check, which loses.',
  },
];

const history = [
  {
    date: 'c. 1100',
    title: 'Heian shogi',
    description:
      'Earliest documented form. A smaller board, fewer pieces, no drops yet — the game arrives in Japan from the Asian chess family.',
  },
  {
    date: 'c. 1590',
    title: 'Drops introduced',
    description:
      'The radical drop rule appears, possibly inspired by the practice of releasing captured samurai. It transforms shogi into a uniquely attacking game.',
  },
  {
    date: '1612',
    title: 'Edo professionalism',
    description:
      'Tokugawa Ieyasu grants stipends to top players, founding hereditary shogi houses. The Meijin title — held for life — is established.',
  },
  {
    date: '2017',
    title: 'AI reaches the top',
    description:
      'Ponanza decisively defeats reigning Meijin Amahiko Satō, marking the moment computers surpassed the strongest human shogi players.',
  },
];

export default function ShogiPage() {
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
            <BreadcrumbPage>Shogi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-32 lg:grid-cols-[4fr_3fr]">
        <div>
          <header>
            <h1 className="font-serif text-6xl font-medium">
              Shogi (
              <span className="text-primary" lang="zh-Hans">
                将棋
              </span>
              )
            </h1>

            <p className="text-muted-foreground mt-4 text-sm font-medium">
              Japanese chess &middot; shōgi
            </p>

            <p className="text-muted-foreground mt-6">
              Captured pieces switch sides and return to the board. There are no
              draws by material - both armies stay in play forever. The result
              is the most attacking, least drawish chess variant ever
              standardized.
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-4 gap-8 border-y py-4">
            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Origin
              </dt>
              <dt className="text-lg font-semibold">Japan &middot; ~12th c.</dt>
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
              <dt className="text-lg font-semibold">9 &times; 9 squares</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Pieces
              </dt>
              <dt className="text-lg font-semibold">40 (20 each)</dt>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="shadow-primary/20 border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="/games">
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

        <div className="aspect-square h-full w-full rounded-md border bg-[#F5DEBE] shadow-md/10" />
      </div>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">
          Eight types, <span className="text-primary">most promote.</span>
        </h2>

        <div className="bg-border grid grid-cols-4 gap-px border">
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
        <h2 className="mb-12 text-5xl font-medium">
          What <span className="text-primary">chess players</span> notice first.
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
          Nine centuries <span className="text-primary">of play.</span>
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
