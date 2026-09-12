import { Link } from '@/shared/i18n/navigation';
import Image from 'next/image';
import { Article } from '../model/types';

type RelatedArticlesProps = {
  articles: Article[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  const related = articles.slice(0, 3);

  return (
    <div>
      <div className="text-muted-foreground mb-8 text-xs font-medium tracking-wider uppercase">
        Related reading
      </div>
      <div className="grid grid-cols-3 gap-8">
        {related.map((article) => (
          <Link
            key={article.id}
            href={`/journal/${article.id}`}
            className="group block"
          >
            <div className="relative mb-4 aspect-3/2 overflow-hidden border transition-colors group-hover:border-gray-700">
              <Image
                src={article.image}
                alt={article.title}
                width={640}
                height={480}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase">
              <span>{article.tag}</span>
              &middot;
              <span>{article.date}</span>
            </div>
            <h3 className="group-hover:text-primary text-xl leading-5 font-medium tracking-[-0.01em] transition-colors">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
