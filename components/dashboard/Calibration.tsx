"use client";
import { CalibrationAlert, calibrationAlerts } from "@/lib/dashboard/mockData";
import { TriangleAlert, ArrowRight } from "lucide-react";
export default function Calibration() {
  const priorityStyles = {
    Alto: "bg-destructive",
    Medio: "bg-warning",
    Bajo: "bg-success",
  };
  return (
    <section className="rounded-lg border bg-card text-card-foreground shadow-retool-lg lg:col-span-2 border-destructive/30  ">
      <div className="flex flex-col gap-2  p-density-xl pb-density-sm">
        <div className="flex gap-2">
          <TriangleAlert className="h-w5 w-5 text-destructive" />
          <h3 className="font-semibold tracking-tight text-base">
            Calibraciones Vencidas de este mes
          </h3>
        </div>
        <div>
          <p className="text-sm text-muted-foreground space-y-density-xs">
            Equipos que requieren atencion prioritaria
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-0.5 p-density-xl pt-0 space-y-density-sm">
        {calibrationAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between gap-density-sm rounded-md border border-border p-density-sm"
          >
            <div>
              <div>
                <p className="text-sm font-medium text-foreground truncate">
                  {alert.equipmentName}
                </p>
              </div>
              <div className="text-xs text-muted-foreground truncate flex gap-2">
                <span>{alert.department} ·</span>
                <span>{alert.location}</span>
                <span>{alert.expirationDate}</span>
              </div>
            </div>
            <div
              className={`inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${priorityStyles[alert.priority]}`}
            >
              {alert.priority}
            </div>
          </div>
        ))}
        <a className="inline-flex items-center gap-density-sm whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-density-md w-full justify-between mt-1 cursor-pointer">
          <span>Ver todas las alertas</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
