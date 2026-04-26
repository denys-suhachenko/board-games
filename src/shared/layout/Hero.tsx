import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Container, Navbar } from '@/shared/layout';

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden">
      <Image
        src="/hero.png"
        alt="Classic board games including chess, go, shogi and xiangqi"
        fill
        preload
        sizes="100vw"
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-black/35" />

      <Navbar transparent />

      <Container className="relative z-10 flex min-h-[640px] flex-col justify-center">
        <div className="grid lg:grid-cols-2">
          <div className="space-y-10 md:py-8">
            <p className="text-primary text-sm font-medium">
              Play. Discover. Win.
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your World of Board Games Starts Here
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg">
              Find the perfect board game for quiet evenings, shared laughs, and
              memorable nights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="shadow-primary/20 border-ring h-12 min-w-[200px] rounded-full px-8 shadow-md"
              >
                <Link href="/games">
                  Explore games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 h-12 min-w-[200px] rounded-full px-8 backdrop-blur-sm"
              >
                <Link href="/">Sign up to play</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
