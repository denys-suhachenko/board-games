import Link from 'next/link';
import { DicesIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from '../ui/button';
import { Container } from './Container';

type NavbarProps = {
  transparent?: boolean;
};

const navItems = [
  // {
  //   href: '/games/chess',
  //   label: 'Chess',
  // },
  // {
  //   href: '/games/checkers',
  //   label: 'Checkers',
  // },
  {
    href: '/games/go',
    label: 'Go',
  },
  // {
  //   href: '/games/shogi',
  //   label: 'Shogi',
  // },
  {
    href: '/games/xiangqi',
    label: 'Xiangqi',
  },
  {
    href: '/games/latrunculi',
    label: 'Latrunculi',
  },
];

export function Navbar({ transparent }: NavbarProps) {
  return (
    <header
      className={cn(
        'relative z-50 w-full border-b transition-all duration-300',
        transparent
          ? 'backdrop-blur-sm dark:bg-zinc-900/10'
          : 'darkbg-zinc-900',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-x-2 font-semibold tracking-tight text-nowrap md:text-xl"
        >
          <DicesIcon /> Board Games
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-muted-foreground hover:text-foreground text-sm font-medium transition-colors',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/">Sign in</Link>
          </Button>

          <Button asChild>
            <Link href="/">Sign up</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
