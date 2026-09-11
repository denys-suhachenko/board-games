import { getTranslations } from 'next-intl/server';

import { Container } from './Container';

export async function Footer() {
  const t = await getTranslations('common.footer');

  return (
    <footer className="border-t">
      <Container className="text-muted-foreground py-6 text-center text-sm">
        &copy; 2026 Board Games. {t('copyright')}
      </Container>
    </footer>
  );
}
