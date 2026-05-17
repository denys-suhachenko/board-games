import Link from 'next/link';

import { Container, Hero } from '@/shared/layout';
import { Button } from '@/shared/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';
import { Badge } from '@/shared/ui/badge';
import { ArrowRightIcon } from 'lucide-react';

const games = [
  {
    title: 'Go',
    description: 'Surround territory. Simple rules, infinite depth.',
    slug: 'go',
  },
  {
    title: 'Xiangqi',
    description: 'Chinese chess. Cross the river, capture the king.',
    slug: 'xiangqi',
  },
  {
    title: 'Shogi',
    description: 'Japanese chess. Captured pieces switch sides.',
    slug: 'shogi',
  },
  {
    title: 'Latrunculi',
    description: 'An ancient Roman two-player strategy board game',
    slug: 'latrunculi',
  },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'history', label: 'History' },
  { value: 'rules', label: 'Rules' },
  { value: 'strategy', label: 'Strategy' },
] as const;

const articles = [
  {
    id: 1,
    title: 'Why Go is older than chess',
    description: 'Tracing 4,000 years of stones across the Asian continent.',
    category: 'History',
    duration: '8 min',
    link: '',
  },
  {
    id: 2,
    title: 'Xiangqi in five minutes',
    description:
      'The river, the palace, and seven piece types - explained simply.',
    category: 'Rules',
    duration: '5 min',
    link: '',
  },
  {
    id: 3,
    title: 'Drop rules in Shogi',
    description:
      'How captured pieces re-enter the fight and change everything.',
    category: 'Strategy',
    duration: '12 min',
    link: '',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-8">
        <Container>
          <h2 className="sr-only">Popular games</h2>

          <div className="grid grid-cols-4 gap-6">
            {games.map((game) => (
              <article
                key={game.slug}
                className="bg-card rounded-md border px-6 py-10 text-center"
              >
                <h3 className="text-lg font-semibold">{game.title}</h3>

                <p className="text-muted-foreground mt-2 text-sm font-medium">
                  {game.description}
                </p>

                <Button asChild className="mt-6 rounded-full px-4">
                  <Link href={`/games/${game.slug}`}>Play</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="mb-6 text-3xl font-semibold">Read & learn</h2>

            <Link
              href="/"
              className="text-primary flex items-center gap-x-1 text-sm font-medium"
            >
              View all <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <ToggleGroup
            type="single"
            defaultValue="all"
            className="justify-start"
            variant="outline"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category.value}
                value={category.value}
                className="px-6 py-3"
              >
                {category.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="mt-6 grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={article.link}
                className="bg-card group rounded-md border p-6 transition-transform hover:translate-y-[-3px]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary" className="uppercase">
                    {article.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {article.duration}
                  </span>
                </div>

                <h3 className="group-hover:text-primary text-lg font-medium transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mt-2 text-sm">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
