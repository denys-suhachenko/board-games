import Link from 'next/link';
import { ArrowRightIcon, DicesIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Container } from './Container';

type NavbarProps = {
  transparent?: boolean;
};

const navItems = [
  {
    href: '/games',
    label: 'Games',
  },
  {
    href: '/learn',
    label: 'Learn',
  },
  {
    href: '/journal',
    label: 'Journal',
  },
];

export function Navbar({ transparent }: NavbarProps) {
  return (
    <header
      className={cn(
        'border-border/70 bg-background/80 relative z-50 w-full border-b transition-all duration-300',
        transparent
          ? 'backdrop-blur-sm dark:bg-zinc-900/10'
          : 'darkbg-zinc-900',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-x-2 font-medium tracking-tight text-nowrap md:text-xl"
        >
          <DicesIcon className="text-primary size-6" /> Board Games
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

        <div className="hidden items-center gap-x-4 text-sm md:flex">
          <Link
            href="/"
            className={cn(
              'text-muted-foreground hover:text-foreground font-medium transition-colors',
            )}
          >
            Sign in
          </Link>
          <Link
            href="/"
            className={cn(
              'text-primary flex items-center gap-x-1 font-medium transition-colors',
            )}
          >
            Play
            <ArrowRightIcon className="h-3 w-3" />
          </Link>
        </div>
      </Container>
    </header>
  );
}
