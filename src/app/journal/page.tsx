import Image from 'next/image';
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
import { Card, CardContent, CardHeader } from '@/shared/ui/card';

import { getArticles } from '@/features/journal/api/articles';
import { ArticleCard } from '@/features/journal/ui/ArticleCard';
import { ArticlesFilter } from '@/features/journal/ui/ArticlesFilter';
import { ButtonGroup } from '@/shared/ui/button-group';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { ArticlesSidebar } from '@/features/journal/ui/ArticlesSidebar';

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

      <div className="grid grid-cols-[3fr_1fr] gap-x-6">
        <div>
          <ArticlesFilter />

          <main className="grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </main>
        </div>

        <ArticlesSidebar />
      </div>
    </Container>
  );
}
