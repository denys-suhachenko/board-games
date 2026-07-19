# Board Games

## Project overview

Board Games is Next.js App Router application for playing and learning traditional strategy board games.

Current games and game-related features include Go, Xiangqi, Shogi, Latrunculi and Chess.

## Technology stack

- Next.js 16
- React 19
- TypeScript with strict mode
- Tailwind CSS 4
- shadcn/ui using the Radix Nova style
- Radix UI primitives
- Lucide icons
- npm with `package-lock.json`

Do not switch package managers or create another lockfile.

## Framework source of truth

This project uses a recent Next.js version with APIs and conventions that may differ from older training data.

Before implementing unfamiliar Next.js APIs or patterns:

1. Inspect the existing project code.
2. Follow current deprecation notices.
3. Do not rely only on remembered Next.js behaviour.

## Commands

- `npm install` - install dependencies
- `npm run dev` - start the local development server
- `npm run lint` - run ESLint
- `npm run build` - create a production build
- `npm run start` - run the production build
- `npm run format` - format the entire repository with Prettier

There is currently no automated test script. Do not claim that tests were run unless a test command has actually been added and executed.

Prefer formatting only touched files with:

`npx prettier --write <file-paths>`

Avoid formatting the entire repository for a small unrelated change.

## Project structure

- `src/app` - contains App Router routes, layouts and route composition
- `src/features/games` - contains game-specific code
- `src/shared/ui` - contains reusable UI primitives and shadcn components
- `src/shared/lib` - contains generic utilities
- `src/shared/providers` - contain application-level providers
- `public/` - contains static assets

Use the `@/` alias for imports from `src`.

Examples:

- `@/shared/ui/button`
- `@/shared/layout`
- `@/features/games/go`

## Architecture rules

- Keep route files focused on route-level composition
- Put game-specific behavior inside the relevant game feature
- Reuse existing components before creating new primitives
- Avoid circular dependencies between `app`, `features`, and `shared`
- `features` must not import from `app`.
- `shared` must not import from `features` or `app`
- One game feature should not directly depend on another game feature
- Keep feature-specific code inside its feature

The preferred dependency direction is:

`app → features → shared`

## Framework rules

- Keep strict TypeScript enabled
- Avoid `any`
- Prefer Server Components by default
- Use `next/link` for internal navigation
- Use `next/image` for content images when appropriate
- Keep metadata in the App Router metadata APIs rather than manually writing document head markup
- Do not convert an entrire page or layout into Client Component only because one nested component is interactive

## UI rules

- Prefer existing components from `src/shared/ui`
- Use Lucide for interface icons
- Avoid emoji as interfrace icons
- Use semantic HTML
- Use `button` and `a` elements instead of clickable `div` elements
- Use semantic design tokens such as `bg-card`, `text-muted-foreground`, `border`, and `text-primary` instead of hardcoded colors when possible

## Verifications

For normal code changes:

1. Run `npm run lint`
2. Run `npm run build`
3. Report exactly which commands were run
4. Do not report a command as successful when it was skipped or failed
