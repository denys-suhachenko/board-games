import { XiangqiBoard } from './XiangqiBoard';

export function XiangqiGameContainer() {
  return (
    <div className="bg-card flex flex-col rounded-md border p-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="text-foreground text-lg font-semibold">
            Computer &middot; Black
          </div>
          <div className="text-muted-foreground text-sm">Captured: 3</div>
        </div>

        <div className="text-muted-foreground font-medium">11:24</div>
      </div>

      <XiangqiBoard />

      <div className="mt-8 flex items-center justify-between">
        <div>
          <div className="text-foreground text-lg font-semibold">
            You &middot; Red
          </div>
          <div className="text-primary text-sm font-medium">Your turn</div>
        </div>

        <div className="text-foreground font-medium">12:47</div>
      </div>
    </div>
  );
}
