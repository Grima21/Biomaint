import { Search, ChevronDown } from "lucide-react";

export default function InventoryToolBar() {
  return (
    <div className="flex flex-col gap-density-sm lg:flex-row mt-density-lg">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Buscar por serie, activo, modelo o proovedor..."
          type="search"
        />
      </div>
      <div className="flex flex-wrap gap-density-sm ">
        <button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-density-md py-density-sm text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 md:text-sm w-full sm:w-40">
          Piso: Todos
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-density-md py-density-sm text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 md:text-sm w-full sm:w-36">
          Riesgos:Todos
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-density-md py-density-sm text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 md:text-sm w-full sm:w-44">
          Todos
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
