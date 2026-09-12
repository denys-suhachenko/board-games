import Image from 'next/image';
import { Link } from '@/shared/i18n/navigation';

import { Article } from '../model/types';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      key={article.id}
      href={`/journal/${article.id}`}
      className="group bg-card col-span-1 flex cursor-pointer flex-col overflow-hidden rounded-md border"
    >
      <div className="relative aspect-3/2 shrink-0 overflow-hidden border-b">
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
        <div className="text-muted-foreground mb-3 text-xs font-medium uppercase">
          <span className="text-primary">{article.tag}</span>
        </div>
        <h2 className="group-hover:text-primary mb-3 text-xl leading-[1.2] font-medium tracking-[-0.01em] text-pretty transition-colors">
          {article.title}
        </h2>
        <p className="text-muted-foreground mb-4 text-sm leading-[1.55] text-pretty">
          {article.description}
        </p>
        <div className="text-muted-foreground mt-auto flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs">
          {article.date} &middot; {article.read}
        </div>
      </div>
    </Link>
  );
}
