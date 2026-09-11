import { Fragment } from 'react';
import { GoLessonDiagram } from './GoLessonDiagram';
import { GoBoardQuickCheck } from './GoBoardQuickCheck';
import type { GoLessonSection, GoQuickCheck } from './go-lesson-types';
import { cn } from '@/shared/lib/utils';

export function getGoLessonOutline(sections: readonly GoLessonSection[]) {
  return sections.flatMap(({ id, title }) =>
    id === 'summary'
      ? [
          { id: 'quick-check', title: 'Quick Check' },
          { id, title },
        ]
      : [{ id, title }],
  );
}

export function GoLessonArticle({
  sections,
  quickCheck,
}: {
  sections: readonly GoLessonSection[];
  quickCheck: GoQuickCheck;
}) {
  return (
    <article className="flex min-w-0 flex-col gap-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-relaxed [&_section]:flex [&_section]:scroll-mt-8 [&_section]:flex-col [&_section]:gap-5">
      {sections.map((section) => (
        <Fragment key={section.id}>
          {section.id === 'summary' && (
            <section id="quick-check" aria-labelledby="quick-check-heading">
              <h2 id="quick-check-heading">Quick Check</h2>
              <GoBoardQuickCheck
                key={quickCheck.question}
                exercise={quickCheck}
              />
            </section>
          )}
          <section id={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div
              className={cn(
                'grid gap-4',
                section.diagrams.length > 1 && 'sm:grid-cols-2',
              )}
            >
              {section.diagrams.map((diagram) => (
                <GoLessonDiagram key={diagram.caption} {...diagram} />
              ))}
            </div>
          </section>
        </Fragment>
      ))}
    </article>
  );
}
