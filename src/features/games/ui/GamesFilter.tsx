import { getTranslations } from 'next-intl/server';

import { Input } from '@/shared/ui/input';
import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select';

export default async function GamesFilter() {
  const t = await getTranslations('games');

  return (
    <div className="border-y py-6">
      <div className="flex flex-col gap-x-4 lg:flex-row lg:items-center">
        <Input
          placeholder={t('filter.search.placeholder')}
          className="w-auto min-w-3xs rounded-full"
        />
        <div className="mt-4 flex flex-wrap items-center gap-4 lg:mt-0">
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue
                placeholder={t('filter.origin.placeholder')}
              ></SelectValue>
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue
                placeholder={t('filter.players.placeholder')}
              ></SelectValue>
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="rounded-full">
              <SelectValue
                placeholder={t('filter.complexity.placeholder')}
              ></SelectValue>
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
}
