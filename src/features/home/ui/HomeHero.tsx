import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/shared/i18n/navigation';
import {
  ArrowRightIcon,
  BookOpenIcon,
  ChartNoAxesColumnIncreasingIcon,
  UsersIcon,
} from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/layout';

export async function HomeHero() {
  const t = await getTranslations('home.hero');
  return (
    <section className="relative isolate min-h-155 overflow-hidden border-b">
      <Image
        src="/hero-board-games.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center] md:object-[68%_center]"
      />

      <div className="from-background via-background/95 to-background/60 md:via-background/90 md:to-background/20 absolute inset-0 -z-10 bg-linear-to-r" />

      <div className="bg-background/10 absolute inset-0 -z-10" />

      <Container className="min-h-155">
        <div className="max-w-2xl py-20">
          <div className="text-muted-foreground mb-6 text-sm font-medium">
            {t('eyebrow')}
          </div>

          <h1 className="mb-6 text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl">
            {t('title')}
            <br />
            <span className="text-primary">{t('titleAccent')}</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 md:text-lg">
            {t('description')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="shadow-primary/20 border-ring h-12 min-w-50 rounded-full px-8 shadow-md"
            >
              <Link href="/games">
                {t('playNow')}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground h-12 min-w-50 rounded-full px-8 backdrop-blur-sm"
            >
              <Link href="/learn">{t('learnRules')}</Link>
            </Button>
          </div>

          <div className="text-muted-foreground mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div className="flex flex-nowrap items-center gap-3">
              <UsersIcon />
              {t('worldwide')}
            </div>
            <div className="flex flex-nowrap items-center gap-3">
              <BookOpenIcon />
              {t('guides')}
            </div>
            <div className="flex flex-nowrap items-center gap-3">
              <ChartNoAxesColumnIncreasingIcon />
              {t('skills')}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
