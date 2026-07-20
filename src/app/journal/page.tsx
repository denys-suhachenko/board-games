import Image from 'next/image';
import Link from 'next/link';

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
import { getArticles } from '@/features/journal/api/articles';

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

export default async function JournalPage() {
  const articles = await getArticles();

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
        {articles.map((article, index) => (
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
                'relative aspect-4/3 shrink-0 overflow-hidden border-b',
                index === 0 &&
                  'aspect-video md:aspect-auto md:min-w-[50%] md:border-r md:border-b-0',
              )}
            >
              <Image
                src={article.image}
                alt={article.title}
                width={640}
                height={480}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
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
