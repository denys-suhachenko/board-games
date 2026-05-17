import { Container } from '@/shared/layout';
import { cn } from '@/shared/lib/utils';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';
import Link from 'next/link';

const filterItems = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Essay',
    value: 'essay',
  },
  {
    label: 'Profile',
    value: 'profile',
  },
  {
    label: 'History',
    value: 'history',
  },
  {
    label: 'Analysis',
    value: 'analysis',
  },
];

const ARTICLES = [
  {
    id: 'lost-rules',
    tag: 'History',
    title: 'The lost rules of Latrunculi',
    description:
      'Roman soldiers played it across an empire, but the exact rules vanished with Rome. A century of scholarship has tried to reassemble them from poetry, mosaics, and broken boards — with predictably partial results.',
    date: 'May 12, 2026',
    read: '14 min',
    author: 'Marcus Bell',
    thumb: 'POSITIO LATRUNCULORUM · BRITAIN c. 200 CE',
    feature: true,
  },
  {
    id: 'go-vs-chess',
    tag: 'Essay',
    title: 'What Go teaches that chess cannot',
    description:
      'Two ancient games, two utterly different theories of conflict. A look at how the geometry of a 19×19 grid shapes a player\u2019s mind in ways the 64 squares never can.',
    date: 'Apr 28, 2026',
    read: '12 min',
    author: 'Yuki Tanaka',
    thumb: 'GO STONES · CLOSE-UP',
  },
  {
    id: 'xiangqi-street',
    tag: 'Profile',
    title: 'The last living grandmasters of Xiangqi street play',
    description:
      'In Guangzhou, a generation of park players resists the pull of the screen. We spent a week with them at the People\u2019s Park boards.',
    date: 'Apr 24, 2026',
    read: '9 min',
    author: 'Linh Pham',
    thumb: 'STREET MATCH · GUANGZHOU',
  },
  {
    id: 'engines-converge',
    tag: 'Analysis',
    title: 'Why every chess engine eventually plays the same way',
    description:
      'Stockfish, Leela, Komodo. Three top engines, one position. The convergence is unsettling — and reveals something quiet about what chess actually is.',
    date: 'Apr 19, 2026',
    read: '11 min',
    author: 'Anders Nilsson',
    thumb: 'EVAL DIAGRAM · POSITION 81',
  },
  {
    id: 'checkers-boom',
    tag: 'History',
    title: 'The 19th-century checkers boom',
    description:
      'For a game now mostly played by children and computers, draughts once filled European tournament halls. The story of how it rose, peaked, and was solved.',
    date: 'Apr 12, 2026',
    read: '8 min',
    author: 'Edith Caldwell',
    thumb: 'ARCHIVAL PHOTO · LONDON 1872',
  },
  {
    id: 'drops',
    tag: 'Essay',
    title: 'The drop rule changes everything',
    description:
      'Captured pieces switch sides. Three words that turn the chess family upside down. A close reading of shogi\u2019s most distinctive idea — and what it costs to play it well.',
    date: 'Apr 5, 2026',
    read: '10 min',
    author: 'Yuki Tanaka',
    thumb: 'SHOGI BOARD · MID-GAME',
  },
  {
    id: 'magnus-profile',
    tag: 'Profile',
    title: 'After the crown: a year with Magnus',
    description:
      'He stepped down as world champion in 2023. What happens to a chess prodigy when he stops needing to defend the title?',
    date: 'Mar 28, 2026',
    read: '18 min',
    author: 'Per Olafsson',
    thumb: 'PORTRAIT · OSLO 2026',
  },
  {
    id: 'alphago',
    tag: 'Analysis',
    title: 'Re-reading move 37, ten years on',
    description:
      'AlphaGo\u2019s move 37 in game 2 against Lee Sedol shocked professionals in 2016. A decade later, what looked like a mistake reads as the first sentence of a new dialect.',
    date: 'Mar 14, 2026',
    read: '15 min',
    author: 'Yuki Tanaka',
    thumb: 'MOVE 37 · GAME 2',
  },
  {
    id: 'shatranj',
    tag: 'History',
    title: 'Shatranj: the chess before chess',
    description:
      'The 7th-century Persian ancestor of every chess in the world. Its queen moved one square. Its bishop jumped exactly two. Both moves were lost to time — for good reason.',
    date: 'Mar 2, 2026',
    read: '7 min',
    author: 'Reza Akbari',
    thumb: 'MANUSCRIPT · BAGHDAD c. 850',
  },
];

export default function JournalPage() {
  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Journal</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Notes on <span className="text-primary">play.</span>
        </h1>
      </header>

      <div className="border-y py-6">
        <div className="flex items-center gap-x-6">
          <div className="text-muted-foreground text-sm">Filter by tag</div>
          <ToggleGroup
            type="single"
            defaultValue="all"
            variant="outline"
            spacing={2}
          >
            {filterItems.map((item) => (
              <ToggleGroupItem
                key={item.value}
                value={item.value}
                aria-label={item.label}
                className="rounded-full"
              >
                <div className="text-muted-foreground text-sm">
                  {item.label}
                </div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <main className="grid grid-cols-3 gap-6 pt-10 pb-20">
        {ARTICLES.map((article, index) => (
          <Link
            key={article.id}
            href={`/journal/${article.id}`}
            className={cn(
              'group bg-card col-span-1 flex cursor-pointer flex-col overflow-hidden rounded-md border transition-transform hover:translate-y-[-3px]',
              index === 0 && 'flex-col md:col-span-2 md:flex-row',
            )}
          >
            <div
              className={cn(
                'relative aspect-4/3 shrink-0 border-b bg-[#1b222e]',
                index === 0 &&
                  'aspect-video md:aspect-auto md:min-w-[50%] md:border-r md:border-b-0',
              )}
            />
            <div className="flex min-w-0 flex-1 flex-col p-6">
              <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase">
                <span className="text-primary">{article.tag}</span>
                &middot;
                <span>{article.date}</span>
                &middot;
                <span>{article.read}</span>
              </div>
              <h2
                className={cn(
                  'group-hover:text-primary mb-3 leading-[1.2] font-medium text-pretty transition-colors',
                  index === 0
                    ? 'mb-4 text-2xl tracking-[-0.02em] md:text-4xl'
                    : 'mb-3 text-xl tracking-[-0.01em]',
                )}
              >
                {article.title}
              </h2>
              <p
                className={cn(
                  'mb-4 text-pretty text-gray-300',
                  index === 0
                    ? 'text-[15px] leading-[1.6]'
                    : 'text-sm leading-[1.55]',
                )}
              >
                {article.description}
              </p>
              <div className="text-muted-foreground mt-auto border-t pt-4 text-xs uppercase">
                By {article.author}
              </div>
            </div>
          </Link>
        ))}
      </main>
    </Container>
  );
}
