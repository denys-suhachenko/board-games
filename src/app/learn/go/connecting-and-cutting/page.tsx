import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { GO_LESSONS } from '@/features/learn/data/lessons';
import { LessonHeader } from '@/features/learn/ui/LessonHeader';
import { LessonOutline } from '@/features/learn/ui/LessonOutline';
import { LessonNavigation } from '@/features/learn/ui/LessonNavigation';
import {
  ConnectingAndCuttingLesson,
  connectingAndCuttingOutline,
} from '@/features/games/go/ui/lessons/ConnectingAndCuttingLesson';

const lesson = GO_LESSONS[4];

export const metadata: Metadata = {
  title: `${lesson.title} | Go lessons | Board Games`,
  description: lesson.description,
};

export default function ConnectingAndCuttingPage() {
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
            <BreadcrumbLink asChild>
              <Link href="/learn">Learn</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/learn#go">Go</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <LessonHeader
        game="Go"
        lesson={lesson}
        totalLessons={GO_LESSONS.length}
      />
      <div className="grid items-start gap-x-6 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <LessonOutline items={connectingAndCuttingOutline} />
        <div className="min-w-0">
          <ConnectingAndCuttingLesson />
          <LessonNavigation
            previousLesson={GO_LESSONS[3]}
            nextLesson={GO_LESSONS[5]}
          />
        </div>
      </div>
    </Container>
  );
}
