import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Merriweather } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { DicesIcon } from 'lucide-react';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

const serif = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Board games catalog',
  description: 'Find your perfect game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-gray-100">
        <header className="flex h-16 w-full items-center justify-center gap-x-6 border-b border-[#e5e7eb] bg-white backdrop-blur-md transition-all duration-300">
          <Link
            href="/"
            className="flex items-center gap-x-2 font-semibold tracking-tight text-nowrap md:text-xl"
          >
            <DicesIcon /> Board Games
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
