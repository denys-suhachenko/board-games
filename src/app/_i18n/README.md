# Internationalization

The website supports `/en/...` and `/uk/...` using next-intl. Unprefixed
requests use its locale negotiation (cookie, Accept-Language, then English).
API endpoints and assets are not localized.

The language switcher performs a full document navigation, preserving the
pathname, query, and fragment. This avoids next-themes 0.4.6's inline-script
warning when React remounts the locale root layout on a soft navigation.
In-memory UI/game state resets when switching languages; persisted theme
preferences remain intact. Revisit this workaround when next-themes fixes
https://github.com/pacocoursey/next-themes/issues/397.

Existing content is still English. Homepage copy is in `features/home/i18n/en.json`;
other catalogs remain empty. The Ukrainian homepage uses the English catalog
as a fallback. Ukrainian overrides replace whole top-level entries, so supply
complete nested sections when adding them. The Ukrainian route is not yet a
translated edition.

## Adding messages

Add matching keys to a feature's `i18n/en.json` and `i18n/uk.json` files.
`messages.ts` assembles them under feature namespaces such as `go`, `auth`,
and `journal`. The JSON itself does not need that namespace wrapper.
Shared interface messages belong to `src/shared/i18n` under `common`.

Use `getTranslations('go')` from `next-intl/server` in async Server Components,
or `useTranslations('go')` from `next-intl` in synchronous components.
For client components, pass translated props or wrap the relevant subtree
in `NextIntlClientProvider` with only the messages it needs. The root provider
deliberately uses `messages={null}` to avoid sending all catalogs to the browser.
Nested provider message objects replace rather than deep-merge parent messages.

Use navigation exports from `@/shared/i18n/navigation` for internal page links.
Keep asset paths, API URLs, domain IDs, and game logic locale-independent.

The loader lives in `app` so `shared` never imports feature dictionaries.
Register new features in `messages.ts`; `types.d.ts` derives message keys from
the English catalog. No fallback translations are invented automatically.

Next.js 16.2.4 requires `experimental.rootParams` for the current next-intl
request-locale integration. Revisit that flag when upgrading Next.js.
