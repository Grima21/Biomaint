import { inventoryStats } from "@/lib/inventory/mockData";
export default function KpisInventory() {
  const priorityStyles = {
    ShieldCheck: "text-success",
    Wrench: "text-warning",
    CircleX: "text-destructive",
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-density-sm">
      {inventoryStats.map((inventory) => {
        const Icon = inventory.icon;

        return (
          <div
            className="flex items-center gap-3 bg-card border border-border rounded-lg shadow-retool-lg px-4 py-3 mt-density-lg "
            key={inventory.id}
          >
            <Icon
              className={
                priorityStyles[
                  Icon.displayName as keyof typeof priorityStyles
                ] ?? "text-gray-500"
              }
            />

            <div className="flex flex-col min-w-0">
              <span className="text-lg font-semibold leading-tight text-foreground">
                {inventory.value}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {inventory.title}
              </span>
            </div>
            <div />
          </div>
        );
      })}
    </div>
  );
}
