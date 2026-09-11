import { useTranslations } from 'next-intl';
import type { GoLessonTranslator } from '../../i18n/types';
import { GoLessonDiagram } from './GoLessonDiagram';
import { GoEyesQuickCheck } from './GoEyesQuickCheck';
import {
  eyeExample,
  eyePoints,
  falseEye,
  falseEyeCaptured,
  oneEye,
  oneEyeCaptured,
  twoEyes,
  unsettled,
} from './life-and-death-positions';

export function getReadingLifeAndDeathOutline(t: GoLessonTranslator) {
  return [
    { id: 'overview', title: t('readingLifeAndDeath.sections.overview.title') },
    { id: 'eyes', title: t('readingLifeAndDeath.sections.eyes.title') },
    { id: 'one-eye', title: t('readingLifeAndDeath.sections.oneEye.title') },
    { id: 'two-eyes', title: t('readingLifeAndDeath.sections.twoEyes.title') },
    {
      id: 'group-status',
      title: t('readingLifeAndDeath.sections.groupStatus.title'),
    },
    {
      id: 'false-eyes',
      title: t('readingLifeAndDeath.sections.falseEyes.title'),
    },
    { id: 'quick-check', title: t('labels.quickCheck') },
    { id: 'summary', title: t('readingLifeAndDeath.sections.summary.title') },
  ];
}

export function ReadingLifeAndDeathLesson() {
  const t = useTranslations('go.lessons');
  return (
    <article className="flex min-w-0 flex-col gap-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-relaxed [&_section]:flex [&_section]:scroll-mt-8 [&_section]:flex-col [&_section]:gap-5">
      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">
          {t('readingLifeAndDeath.sections.overview.title')}
        </h2>
        <p>{t('readingLifeAndDeath.sections.overview.paragraph1')}</p>
        <GoLessonDiagram
          stones={unsettled}
          label={t(
            'readingLifeAndDeath.sections.overview.diagrams.diagram1.label',
          )}
          caption={t(
            'readingLifeAndDeath.sections.overview.diagrams.diagram1.caption',
          )}
        />
        <p className="text-muted-foreground">
          {t('readingLifeAndDeath.sections.overview.paragraph2')}
        </p>
      </section>

      <section id="eyes" aria-labelledby="eyes-heading">
        <h2 id="eyes-heading">
          {t('readingLifeAndDeath.sections.eyes.title')}
        </h2>
        <p>{t('readingLifeAndDeath.sections.eyes.paragraph1')}</p>
        <GoLessonDiagram
          stones={eyeExample}
          markers={[{ x: 0, y: 0 }]}
          label={t('readingLifeAndDeath.sections.eyes.diagrams.diagram1.label')}
          caption={t(
            'readingLifeAndDeath.sections.eyes.diagrams.diagram1.caption',
          )}
        />
        <p>{t('readingLifeAndDeath.sections.eyes.paragraph2')}</p>
      </section>

      <section id="one-eye" aria-labelledby="one-eye-heading">
        <h2 id="one-eye-heading">
          {t('readingLifeAndDeath.sections.oneEye.title')}
        </h2>
        <p>{t('readingLifeAndDeath.sections.oneEye.paragraph1')}</p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={oneEye}
            markers={[{ x: 0, y: 0 }]}
            label={t(
              'readingLifeAndDeath.sections.oneEye.diagrams.diagram1.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.oneEye.diagrams.diagram1.caption',
            )}
          />
          <GoLessonDiagram
            stones={oneEyeCaptured}
            label={t(
              'readingLifeAndDeath.sections.oneEye.diagrams.diagram2.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.oneEye.diagrams.diagram2.caption',
            )}
          />
        </div>
        <p>{t('readingLifeAndDeath.sections.oneEye.paragraph2')}</p>
        <p className="text-muted-foreground">
          {t('readingLifeAndDeath.sections.oneEye.paragraph3')}
        </p>
      </section>

      <section id="two-eyes" aria-labelledby="two-eyes-heading">
        <h2 id="two-eyes-heading">
          {t('readingLifeAndDeath.sections.twoEyes.title')}
        </h2>
        <GoLessonDiagram
          stones={twoEyes}
          markers={eyePoints}
          label={t(
            'readingLifeAndDeath.sections.twoEyes.diagrams.diagram1.label',
          )}
          caption={t(
            'readingLifeAndDeath.sections.twoEyes.diagrams.diagram1.caption',
          )}
        />
        <p>{t('readingLifeAndDeath.sections.twoEyes.paragraph1')}</p>
        <p>{t('readingLifeAndDeath.sections.twoEyes.paragraph2')}</p>
        <p className="text-muted-foreground">
          {t('readingLifeAndDeath.sections.twoEyes.paragraph3')}
        </p>
      </section>

      <section id="group-status" aria-labelledby="group-status-heading">
        <h2 id="group-status-heading">
          {t('readingLifeAndDeath.sections.groupStatus.title')}
        </h2>
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>
            {t.rich('readingLifeAndDeath.sections.groupStatus.item1', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </li>
          <li>
            {t.rich('readingLifeAndDeath.sections.groupStatus.item2', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </li>
          <li>
            {t.rich('readingLifeAndDeath.sections.groupStatus.item3', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </li>
        </ul>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={unsettled}
            markers={[{ x: 1, y: 0 }]}
            label={t(
              'readingLifeAndDeath.sections.groupStatus.diagrams.diagram1.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.groupStatus.diagrams.diagram1.caption',
            )}
          />
          <GoLessonDiagram
            stones={twoEyes}
            markers={eyePoints}
            label={t(
              'readingLifeAndDeath.sections.groupStatus.diagrams.diagram2.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.groupStatus.diagrams.diagram2.caption',
            )}
          />
        </div>
        <p>{t('readingLifeAndDeath.sections.groupStatus.paragraph1')}</p>
      </section>

      <section id="false-eyes" aria-labelledby="false-eyes-heading">
        <h2 id="false-eyes-heading">
          {t('readingLifeAndDeath.sections.falseEyes.title')}
        </h2>
        <p>{t('readingLifeAndDeath.sections.falseEyes.paragraph1')}</p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={falseEye}
            markers={[{ x: 0, y: 0 }]}
            label={t(
              'readingLifeAndDeath.sections.falseEyes.diagrams.diagram1.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.falseEyes.diagrams.diagram1.caption',
            )}
          />
          <GoLessonDiagram
            stones={falseEyeCaptured}
            label={t(
              'readingLifeAndDeath.sections.falseEyes.diagrams.diagram2.label',
            )}
            caption={t(
              'readingLifeAndDeath.sections.falseEyes.diagrams.diagram2.caption',
            )}
          />
        </div>
        <p>{t('readingLifeAndDeath.sections.falseEyes.paragraph2')}</p>
      </section>

      <section id="quick-check" aria-labelledby="quick-check-heading">
        <h2 id="quick-check-heading">{t('labels.quickCheck')}</h2>
        <GoEyesQuickCheck />
      </section>

      <section id="summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">
          {t('readingLifeAndDeath.sections.summary.title')}
        </h2>
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>{t('readingLifeAndDeath.sections.summary.item1')}</li>
          <li>{t('readingLifeAndDeath.sections.summary.item2')}</li>
          <li>{t('readingLifeAndDeath.sections.summary.item3')}</li>
          <li>{t('readingLifeAndDeath.sections.summary.item4')}</li>
          <li>{t('readingLifeAndDeath.sections.summary.item5')}</li>
        </ul>
        <p className="text-muted-foreground">
          {t('readingLifeAndDeath.sections.summary.paragraph1')}
        </p>
      </section>
    </article>
  );
}
