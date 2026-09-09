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
import { LatrunculiGameBoard } from '@/features/games/latrunculi/ui/LatrunculiGameBoard';

const pieces = [
  {
    title: 'The Stones',
    sign: 'Calculus',
    description:
      'Plain pieces — sometimes also called latro (brigand) or miles (soldier). All move identically. Twelve per side in the standard reconstruction.',
  },
  {
    title: 'The Dux',
    sign: 'Dux',
    description:
      'One stone per side, marked as the chief. In some reconstructions, the dux moves the same as a calculus; in others it has special powers or must survive to win.',
  },
  {
    title: 'A Vagus Stone',
    sign: 'Vagus',
    description:
      'A stone that has been separated from its lines and become a vulnerable target. Roman writers used the term as a metaphor for an exposed soldier.',
  },
];

const rules = [
  {
    order: '01',
    title: 'Movement',
    chinese: 'motus',
    description:
      'Each stone moves any number of empty squares orthogonally — like a chess rook. No jumping. No diagonals. The dux moves the same way.',
  },
  {
    order: '02',
    title: 'Capture by flanking',
    chinese: 'captura',
    description:
      'Surround an enemy stone on two opposite sides — horizontally or vertically — with your stones. The flanked stone is captured and removed. Two flank, one falls.',
  },
  {
    order: '03',
    title: 'Safe entry',
    chinese: 'tutus',
    description:
      'You may move a stone into a position where it sits between two enemy stones without being captured. The flanking must be the active move.',
  },
  {
    order: '04',
    title: 'The dux',
    chinese: 'dux',
    description:
      "In Schädler's reconstruction, capturing the enemy dux is a primary win condition. Other reconstructions treat the dux as merely the last piece standing",
  },
  {
    order: '05',
    title: 'Stalemate',
    chinese: 'incitus',
    description:
      'A player who cannot move — incitus, "without movement" — loses. Roman poet Ovid used the word as a synonym for utter defeat.',
  },
  {
    order: '06',
    title: 'Victory',
    chinese: 'victoria',
    description:
      'Win by capturing all enemy stones, by capturing the dux, or by leaving the opponent with no legal move. The exact balance depends on the variant played.',
  },
];

const history = [
  {
    date: 'c. 116 BCE',
    title: "Varro's mention",
    description:
      'The polymath Marcus Terentius Varro names the game in De Lingua Latina — the earliest surviving reference to ludus latrunculorum by name.',
  },
  {
    date: 'c. 8 CE',
    title: "Ovid's strategies",
    description:
      'Ovid describes the game in his Ars Amatoria, recommending it as a courtship skill. He uses incitus — stalemate — as shorthand for defeat in love.',
  },
  {
    date: '1st-4th c.',
    title: 'Empire-wide play',
    description:
      "Boards appear from Hadrian's Wall to North Africa, scratched into pavements, basilicas, and the steps of the Forum. The game travels with the legions.",
  },
  {
    date: '1994',
    title: 'Modern revival',
    description:
      'Historian Ulrich Schädler publishes the most cited reconstruction, drawing on archaeological boards and ancient texts. Latrunculi returns to play.',
  },
];

export default function LatrunculiPage() {
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
            <BreadcrumbPage>Latrunculi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-32 lg:grid-cols-[4fr_3fr]">
        <div>
          <header>
            <h1 className="font-serif text-6xl font-medium">
              Latrunculi (
              <span className="text-primary" lang="zh-Hans">
                LVDVS LATRVNCVLORVM
              </span>
              )
            </h1>

            <p className="text-muted-foreground mt-4 text-sm font-medium">
              The game of brigands &middot; Rome, 1ST c. BCE
            </p>

            <p className="text-muted-foreground mt-6">
              A war game played across the Roman Empire for six centuries.
              Pieces slide like rooks; captures happen by flanking on opposite
              sides — a tactical idea older than chess. The exact rules are
              partly lost; what survives is reconstructed from poets, mosaics,
              and broken boards.
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-4 gap-8 border-y py-4">
            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Origin
              </dt>
              <dt className="text-lg font-semibold">
                Rome &middot; 1st c. BCE
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
              <dt className="text-lg font-semibold">7 &times; 7 squares</dt>
            </div>

            <div>
              <dt className="text-muted-foreground mb-2 text-xs font-medium uppercase">
                Pieces
              </dt>
              <dt className="text-lg font-semibold">28 (14 each)</dt>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="shadow-primary/20 border-ring h-10 rounded-full px-8 shadow-md"
            >
              <Link href="#">
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
              <Link href="#">Read the rules</Link>
            </Button>
          </div>
        </div>

        <LatrunculiGameBoard />
      </div>

      <section className="mt-10 border-t py-10">
        <h2 className="mb-12 text-5xl font-medium">
          Two ranks, <span className="text-primary">one chief.</span>
        </h2>

        <div className="bg-border grid grid-cols-3 gap-px border">
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
          Six rules,{' '}
          <span className="text-primary">partially reconstructed.</span>
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
          Two thousand years{' '}
          <span className="text-primary">between matches.</span>
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
              <Link href="#">
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
              <Link href="#">vs Engine</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-full px-8"
            >
              <Link href="#">vs Friend</Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
