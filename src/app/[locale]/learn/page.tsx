import { Link } from '@/shared/i18n/navigation';

import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { GAMES } from '@/features/learn/data/lessons';
import { LearnCatalog } from '@/features/learn/ui/LearnCatalog';

export default function LearnPage() {
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
            <BreadcrumbPage>Learn</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-12">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Start <span className="text-primary">anywhere.</span>
        </h1>
      </header>

      <LearnCatalog games={GAMES} />
    </Container>
  );
}
