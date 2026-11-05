import { providers } from "@/lib/provider/mockdata";
import { Truck, Mail, File } from "lucide-react";
export default function ProviderCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {providers.map((p) => (
        <div
          key={p.id}
          className="bg-card rounded-lg shadow-retool-md border border-border p-4 "
        >
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between gap-2">
              <div className="flex min-w-0 gap-2 items-center">
                <div className="bg-primary/30 rounded-lg p-2">
                  <Truck className="h-5 w-5  font-semibold text-primary" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <h3 className="truncate text-md font-semibold">{p.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground ">
                    {p.specialty}
                  </p>
                </div>
              </div>
              <div className="shrink-0 rounded-lg bg-secondary px-2 py-1 text-[11px] max-h-[44px] leading-none text-secondary-foreground font-medium whitespace-nowrap sm:px-3 sm:py-0.5 sm:text-xs flex items-center">
                {p.contractCount}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-xs ">
                    Cumplimiento SLA
                  </span>
                  <span className="text-xs">{p.slaCompliance}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${p.slaCompliance}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-2">
                <span className="flex min-w-0 items-center gap-1 break-all text-xs text-muted-foreground">
                  <Mail className="w-3.5 h-3.5" />
                  {p.email}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                  <File className="h-3.5 w-3.5" />
                  {p.contractStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
