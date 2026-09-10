export type LessonSummary = {
  order: number;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  href?: `/learn/${string}`;
  readingMinutes?: number;
};

export type LessonGame = {
  id: string;
  title: string;
  native?: string;
  lessons: readonly LessonSummary[];
};

export type LessonOutlineItem = { id: string; title: string };
