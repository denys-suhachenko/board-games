import { SearchIcon } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

const filterItems = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'History',
    value: 'history',
  },
  {
    label: 'News',
    value: 'news',
  },
  {
    label: 'Strategy',
    value: 'strategy',
  },
  {
    label: 'Reviews',
    value: 'analysis',
  },
  {
    label: 'Interviews',
    value: 'interviews',
  },
];

export function ArticlesFilter() {
  return (
    <div className="border-y py-6">
      <div className="flex items-center justify-between gap-x-6">
        <ToggleGroup
          type="single"
          defaultValue="all"
          variant="outline"
          spacing={2}
        >
          {filterItems.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
              className="rounded-full"
            >
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <InputGroup className="max-w-64">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
