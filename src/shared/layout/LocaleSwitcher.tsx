'use client';

import { useState } from 'react';
import { hasLocale, useLocale } from 'next-intl';
import { getPathname, usePathname } from '@/shared/i18n/navigation';
import { routing } from '@/shared/i18n/routing';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, setIsPending] = useState(false);

  return (
    <ToggleGroup
      type="single"
      size="sm"
      variant="outline"
      value={locale}
      disabled={isPending}
      aria-label="Language"
      onValueChange={(value) => {
        if (!hasLocale(routing.locales, value) || value === locale) return;

        const destination = getPathname({ href: pathname, locale: value });
        setIsPending(true);
        // next-themes 0.4.6 inserts an inline script that React cannot execute
        // when a locale change remounts the root layout during soft navigation.
        window.location.replace(
          `${destination}${window.location.search}${window.location.hash}`,
        );
      }}
    >
      <ToggleGroupItem value="en" aria-label="English" lang="en">
        EN
      </ToggleGroupItem>
      <ToggleGroupItem value="uk" aria-label="Українська" lang="uk">
        UK
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
