import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/_i18n/request.ts');

const nextConfig: NextConfig = {
  experimental: {
    rootParams: true,
  },
};

export default withNextIntl(nextConfig);
