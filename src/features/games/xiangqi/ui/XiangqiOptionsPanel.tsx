import { Link } from '@/shared/i18n/navigation';
import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Field, FieldLabel } from '@/shared/ui/field';
import { Label } from '@/shared/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

export function XiangqiOptionsPanel() {
  return (
    <aside className="space-y-4">
      <div className="bg-card space-y-6 rounded-md border p-4">
        <Field>
          <FieldLabel className="text-muted-foreground">Opponent</FieldLabel>

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
          <FieldLabel className="text-muted-foreground">Difficulty</FieldLabel>

          <RadioGroup defaultValue="beginner" className="w-fit">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="beginner" id="r1" />
              <Label htmlFor="r1">Beginner</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="casual" id="r2" />
              <Label htmlFor="r2">Casual</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="strong" id="r3" />
              <Label htmlFor="r3">Strong</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="master" id="r4" />
              <Label htmlFor="r3">Master</Label>
            </div>
          </RadioGroup>
        </Field>

        <Field>
          <FieldLabel className="text-muted-foreground">Your color</FieldLabel>

          <ToggleGroup
            type="single"
            defaultValue="black"
            variant="outline"
            spacing={2}
            size="lg"
            className="grid w-full grid-cols-3"
          >
            <ToggleGroupItem
              value="red"
              aria-label="Red"
              className="flex h-18 flex-col items-center justify-center gap-2 rounded-xl"
            >
              <div className="size-4 shrink-0 rounded-full bg-red-700" />
              <div className="text-muted-foreground text-sm">Red</div>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="black"
              aria-label="Black"
              className="flex h-18 flex-col items-center justify-center gap-2 rounded-xl"
            >
              <div className="size-4 shrink-0 rounded-full bg-gray-700" />
              <div className="text-muted-foreground text-sm font-medium">
                Black
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="random"
              aria-label="Random"
              className="flex h-18 flex-col items-center justify-center gap-2 rounded-xl"
            >
              <div className="text-muted-foreground text-sm">Random</div>
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>
      </div>

      <Button size="lg" className="w-full">
        Start new game
      </Button>

      <div className="bg-card rounded-md border p-4">
        <div className="mb-4 flex items-center justify-between text-xs font-medium">
          <span className="text-muted-foreground uppercase">Quick rules</span>
          <Link href="/" className="flex items-center gap-x-1">
            Full guide <ArrowRightIcon className="size-3" />
          </Link>
        </div>

        <ol className="text-muted-foreground marker:text-primary list-inside list-decimal space-y-2 text-sm/normal">
          <li>Pieces move along lines, not squares.</li>
          <li>Generals stay in their palaces.</li>
          <li>Capture the enemy general to win.</li>
        </ol>
      </div>
    </aside>
  );
}
