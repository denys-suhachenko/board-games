import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Field, FieldGroup } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

export function SignInDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            Sign in
          </Button>
        </DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Welcome</DialogTitle>
            <DialogDescription>Sign in to Continue</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label>Email</Label>
              <Input type="email" />
            </Field>
            <Field>
              <Label>Password</Label>
              <Input type="password" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="submit">Log in</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
