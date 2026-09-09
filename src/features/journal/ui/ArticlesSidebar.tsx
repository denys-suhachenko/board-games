import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { ButtonGroup } from '@/shared/ui/button-group';
import { Card, CardHeader, CardContent } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';

export function ArticlesSidebar() {
  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader className="text-xl font-medium">
          Stories, strategy <br /> and a more playful world.
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Get the best board game articles, news and interviews in your inbox.
          </p>

          <ButtonGroup className="mt-4 w-full">
            <Input placeholder="your@email.com" className="bg-background" />
            <Button>Search</Button>
          </ButtonGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-xl font-medium">Trending Now</CardHeader>
        <CardContent>
          <ol className="divide-muted-foreground/25 text-muted-foreground marker:text-primary list-inside list-decimal divide-y text-sm/normal font-medium">
            <li className="py-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                The Long Road of the Eurogame
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                5 Modern Classics You Should Pay
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Inside the Indie Board Game Boom
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How to Teach Games Like a Pro
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                The History of the Shogi
              </Link>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-xl font-medium">Popular Tags</CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-card w-auto cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors">
              #eurogames
            </div>
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-card w-auto cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors">
              #strategy
            </div>
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-card w-auto cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors">
              #game-design
            </div>
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-card w-auto cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors">
              #how-to-play
            </div>
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-card w-auto cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors">
              #reviews
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
