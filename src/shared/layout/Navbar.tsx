import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/shared/i18n/navigation';
import { DicesIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Container } from './Container';
import { LocaleSwitcher } from './LocaleSwitcher';

type NavbarProps = {
  transparent?: boolean;
  actions?: ReactNode;
};

const navItems = [
  {
    href: '/games',
    labelKey: 'games',
  },
  {
    href: '/learn',
    labelKey: 'learn',
  },
  {
    href: '/journal',
    labelKey: 'journal',
  },
] as const;

export async function Navbar({ transparent, actions }: NavbarProps) {
  const t = await getTranslations('common.navbar');

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
              key={link.labelKey}
              href={link.href}
              className={cn(
                'text-muted-foreground hover:text-foreground text-sm font-medium transition-colors',
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-x-4 text-sm md:flex">
          <LocaleSwitcher />
          {actions}
        </div>
      </Container>
    </header>
  );
}
