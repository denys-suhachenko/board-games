import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLibertiesQuickCheck } from './GoLibertiesQuickCheck';
import { GoLessonDiagram } from './GoLessonDiagram';

export function getStonesLibertiesTerritoryOutline(t: GoLessonTranslator) {
  return [
    {
      id: 'overview',
      title: t('stonesLibertiesTerritory.sections.overview.title'),
    },
    {
      id: 'stones',
      title: t('stonesLibertiesTerritory.sections.stones.title'),
    },
    {
      id: 'liberties',
      title: t('stonesLibertiesTerritory.sections.liberties.title'),
    },
    {
      id: 'capturing',
      title: t('stonesLibertiesTerritory.sections.capturing.title'),
    },
    { id: 'quick-check', title: t('labels.quickCheck') },
    {
      id: 'summary',
      title: t('stonesLibertiesTerritory.sections.summary.title'),
    },
  ];
}

export function StonesLibertiesTerritoryLesson() {
  const t = useTranslations('go.lessons');
  return (
    <article className="flex min-w-0 flex-col gap-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-relaxed [&_section]:flex [&_section]:scroll-mt-8 [&_section]:flex-col [&_section]:gap-5">
      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">
          {t('stonesLibertiesTerritory.sections.overview.title')}
        </h2>
        <p>{t('stonesLibertiesTerritory.sections.overview.paragraph1')}</p>
        <p className="text-muted-foreground">
          {t('stonesLibertiesTerritory.sections.overview.paragraph2')}
        </p>
      </section>
      <section id="stones" aria-labelledby="stones-heading">
        <h2 id="stones-heading">
          {t('stonesLibertiesTerritory.sections.stones.title')}
        </h2>
        <p>{t('stonesLibertiesTerritory.sections.stones.paragraph1')}</p>
        <p>{t('stonesLibertiesTerritory.sections.stones.paragraph2')}</p>
        <GoLessonDiagram
          label={t(
            'stonesLibertiesTerritory.sections.stones.diagrams.diagram1.label',
          )}
          caption={t(
            'stonesLibertiesTerritory.sections.stones.diagrams.diagram1.caption',
          )}
          stones={[
            { x: 1, y: 2, color: 'black' },
            { x: 2, y: 2, color: 'black' },
            { x: 3, y: 1, color: 'white' },
          ]}
        />
      </section>
      <section id="liberties" aria-labelledby="liberties-heading">
        <h2 id="liberties-heading">
          {t('stonesLibertiesTerritory.sections.liberties.title')}
        </h2>
        <p>{t('stonesLibertiesTerritory.sections.liberties.paragraph1')}</p>
        <p>{t('stonesLibertiesTerritory.sections.liberties.paragraph2')}</p>
        <GoLessonDiagram
          label={t(
            'stonesLibertiesTerritory.sections.liberties.diagrams.diagram1.label',
          )}
          caption={t(
            'stonesLibertiesTerritory.sections.liberties.diagrams.diagram1.caption',
          )}
          stones={[{ x: 2, y: 2, color: 'black' }]}
          markers={[
            { x: 1, y: 2 },
            { x: 3, y: 2 },
            { x: 2, y: 1 },
            { x: 2, y: 3 },
          ]}
        />
      </section>
      <section id="capturing" aria-labelledby="capturing-heading">
        <h2 id="capturing-heading">
          {t('stonesLibertiesTerritory.sections.capturing.title')}
        </h2>
        <p>
          {t.rich('stonesLibertiesTerritory.sections.capturing.paragraph1', {
            em: (chunks) => <em>{chunks}</em>,
          })}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            label={t(
              'stonesLibertiesTerritory.sections.capturing.diagrams.diagram1.label',
            )}
            caption={t(
              'stonesLibertiesTerritory.sections.capturing.diagrams.diagram1.caption',
            )}
            stones={[
              { x: 2, y: 2, color: 'white' },
              { x: 1, y: 2, color: 'black' },
              { x: 3, y: 2, color: 'black' },
              { x: 2, y: 1, color: 'black' },
            ]}
            markers={[{ x: 2, y: 3 }]}
          />
          <GoLessonDiagram
            label={t(
              'stonesLibertiesTerritory.sections.capturing.diagrams.diagram2.label',
            )}
            caption={t(
              'stonesLibertiesTerritory.sections.capturing.diagrams.diagram2.caption',
            )}
            stones={[
              { x: 1, y: 2, color: 'black' },
              { x: 3, y: 2, color: 'black' },
              { x: 2, y: 1, color: 'black' },
              { x: 2, y: 3, color: 'black' },
            ]}
          />
        </div>
        <p className="text-muted-foreground">
          {t('stonesLibertiesTerritory.sections.capturing.paragraph2')}
        </p>
      </section>
      <section id="quick-check" aria-labelledby="quick-check-heading">
        <h2 id="quick-check-heading">{t('labels.quickCheck')}</h2>
        <GoLibertiesQuickCheck />
      </section>
      <section id="summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">
          {t('stonesLibertiesTerritory.sections.summary.title')}
        </h2>
        <p>{t('stonesLibertiesTerritory.sections.summary.paragraph1')}</p>
        <GoLessonDiagram
          label={t(
            'stonesLibertiesTerritory.sections.summary.diagrams.diagram1.label',
          )}
          caption={t(
            'stonesLibertiesTerritory.sections.summary.diagrams.diagram1.caption',
          )}
          stones={[
            { x: 2, y: 0, color: 'black' },
            { x: 2, y: 1, color: 'black' },
            { x: 2, y: 2, color: 'black' },
            { x: 1, y: 2, color: 'black' },
            { x: 0, y: 2, color: 'black' },
          ]}
          markers={[
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
          ]}
        />
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>{t('stonesLibertiesTerritory.sections.summary.item1')}</li>
          <li>{t('stonesLibertiesTerritory.sections.summary.item2')}</li>
          <li>{t('stonesLibertiesTerritory.sections.summary.item3')}</li>
          <li>{t('stonesLibertiesTerritory.sections.summary.item4')}</li>
        </ul>
        <p className="text-muted-foreground">
          {t('stonesLibertiesTerritory.sections.summary.paragraph2')}
        </p>
      </section>
    </article>
  );
}
