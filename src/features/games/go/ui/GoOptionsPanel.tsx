import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Field, FieldLabel } from '@/shared/ui/field';
import { Label } from '@/shared/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

export function GoOptionsPanel() {
  return (
    <aside className="space-y-4">
      <div className="space-y-6 rounded-md border bg-[#1d1d1f] p-4">
        <Field>
          <FieldLabel className="text-gray-400">Opponent</FieldLabel>

          <ToggleGroup
            type="single"
            variant="outline"
            defaultValue="computer"
            className="w-full"
          >
            <ToggleGroupItem value="computer" className="flex-1">
              Computer
            </ToggleGroupItem>
            <ToggleGroupItem value="online" className="flex-1">
              Online
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>

        <Field>
          <FieldLabel className="text-gray-400">Difficulty</FieldLabel>

          <RadioGroup defaultValue="comfortable" className="w-fit">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Beginner</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Casual</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Strong</Label>
            </div>
          </RadioGroup>
        </Field>

        <Field>
          <FieldLabel className="text-gray-400">Board size</FieldLabel>

          <ToggleGroup
            type="single"
            defaultValue="19"
            variant="outline"
            className="grid w-full grid-cols-3 p-1"
          >
            <ToggleGroupItem value="9" className="w-full">
              9x9
            </ToggleGroupItem>

            <ToggleGroupItem value="13" className="w-full">
              13x13
            </ToggleGroupItem>

            <ToggleGroupItem value="19" className="w-full">
              19x19
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>
      </div>

      <Button size="lg" className="w-full">
        Start new game
      </Button>

      <div className="rounded-md border bg-[#1d1d1f] p-4">
        <div className="mb-4 flex items-center justify-between text-xs font-medium">
          <span className="text-gray-400 uppercase">Quick rules</span>
          <Link href="/" className="flex items-center gap-x-1">
            Full guide <ArrowRightIcon className="size-3" />
          </Link>
        </div>

        <ol className="list-inside list-decimal space-y-2 text-sm/normal text-gray-300 marker:text-white">
          <li>Place stones on intersections.</li>
          <li>Surround opponent stones to capture them.</li>
          <li>Most surrounded territory wins.</li>
        </ol>
      </div>
    </aside>
  );
}
