import 'server-only';
import type { Locale } from 'next-intl';

import commonEN from '@/shared/i18n/en.json';
import homeEN from '@/features/home/i18n/en.json';
import authEN from '@/features/auth/i18n/en.json';
import journalEN from '@/features/journal/i18n/en.json';
import learnEN from '@/features/learn/i18n/en.json';
import gamesCatalogEN from '@/features/games/i18n/en.json';
import goEN from '@/features/games/go/i18n/en.json';
import xiangqiEN from '@/features/games/xiangqi/i18n/en.json';
import shogiEN from '@/features/games/shogi/i18n/en.json';
import latrunculiEN from '@/features/games/latrunculi/i18n/en.json';
import commonUK from '@/shared/i18n/uk.json';
import homeUK from '@/features/home/i18n/uk.json';
import authUK from '@/features/auth/i18n/uk.json';
import journalUK from '@/features/journal/i18n/uk.json';
import learnUK from '@/features/learn/i18n/uk.json';
import gamesCatalogUK from '@/features/games/i18n/uk.json';
import goUK from '@/features/games/go/i18n/uk.json';
import xiangqiUK from '@/features/games/xiangqi/i18n/uk.json';
import shogiUK from '@/features/games/shogi/i18n/uk.json';
import latrunculiUK from '@/features/games/latrunculi/i18n/uk.json';

const messages = {
  en: {
    common: commonEN,
    home: homeEN,
    auth: authEN,
    journal: journalEN,
    learn: learnEN,
    gamesCatalog: gamesCatalogEN,
    go: goEN,
    xiangqi: xiangqiEN,
    shogi: shogiEN,
    latrunculi: latrunculiEN,
  },
  uk: {
    common: commonUK,
    // Keep the homepage usable until its Ukrainian catalog is populated.
    home: { ...homeEN, ...homeUK },
    auth: authUK,
    journal: journalUK,
    learn: learnUK,
    gamesCatalog: gamesCatalogUK,
    go: goUK,
    xiangqi: xiangqiUK,
    shogi: shogiUK,
    latrunculi: latrunculiUK,
  },
};

export type Messages = typeof messages.en;

export function getMessagesForLocale(locale: Locale): Messages {
  return messages[locale];
}
