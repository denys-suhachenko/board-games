import type { useTranslations } from 'next-intl';

export type GoLessonTranslator = ReturnType<
  typeof useTranslations<'go.lessons'>
>;
