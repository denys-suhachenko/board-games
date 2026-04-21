import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <div className="md:py-8">
        <p className="text-primary text-sm font-medium">Play. Discover. Win.</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your World of Board Games Starts Here
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 sm:text-lg">
          Find the perfect board game for quiet evenings, shared laughs, and
          memorable nights.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="shadow-primary/20 border-ring h-12 min-w-[200px] rounded-full px-8 shadow-md"
          >
            <Link href="/games/go">
              Explore games
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/20 bg-background/50 h-12 min-w-[200px] rounded-full px-8"
          >
            <Link href="/">Sign up to play</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
