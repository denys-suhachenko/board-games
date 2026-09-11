import type { routing } from '@/shared/i18n/routing';
import type { Messages } from './messages';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
