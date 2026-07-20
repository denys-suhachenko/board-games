import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/layout';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative z-10 flex flex-col justify-center">
        <div className="grid grid-cols-2 py-20">
          <div>
            <p className="text-muted-foreground mb-6 text-sm">
              Play &middot; Discover &middot; Win.
            </p>

            <h1 className="mb-6 text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl">
              The eternal games,{' '}
              <span className="text-primary">played anywhere.</span>
            </h1>

            <div className="text-muted-foreground mb-10 space-y-2 text-base leading-7 sm:text-lg">
              <p>
                Find the perfect board game for quiet evenings, shared laughs,
                and memorable nights.
              </p>
              <p>
                Chess, Go, Xiangqi — against people, against engines, at any
                strength. No downloads, no accounts to start.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="shadow-primary/20 border-ring h-12 min-w-[200px] rounded-full px-8 shadow-md"
              >
                <Link href="/games">
                  Play now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-foreground h-12 min-w-[200px] rounded-full px-8 backdrop-blur-sm"
              >
                <Link href="/">Learn the rules</Link>
              </Button>
            </div>
          </div>

          <div className="w-full max-w-[560px] justify-self-end">
            <Image
              src="/hero_img.png"
              alt="Game board"
              width={560}
              height={560}
              loading="eager"
              className="aspect-square h-full w-full rounded-md border object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
