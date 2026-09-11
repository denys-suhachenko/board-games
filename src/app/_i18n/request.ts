import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import * as rootParams from 'next/root-params';
import { notFound } from 'next/navigation';
import { routing } from '@/shared/i18n/routing';
import { getMessagesForLocale } from './messages';

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = locale ?? (await rootParams.locale());

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  return {
    locale: requestedLocale,
    messages: getMessagesForLocale(requestedLocale),
  };
});
