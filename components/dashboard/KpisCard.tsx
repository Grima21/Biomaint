"use client";

import { Boxes, ShieldCheck, ClipboardList, Timer } from "lucide-react";

export default function KpisCard() {
  const maintenanceStats = [
    {
      title: "Equipos Registrados",
      value: 448,
      description: "En todas las sedes activas",
      icon: Boxes,
    },
    {
      title: "Cumplimiento Preventivo (SLA)",
      value: 78,
      description: null,
      progress: 78,
      icon: ShieldCheck,
    },
    {
      title: "Órdenes de Trabajo Abiertas",
      value: 5,
      description: "2 críticas pendientes de atención",
      criticalCount: 2,
      icon: ClipboardList,
    },
    {
      title: "Tiempo Promedio de Respuesta",
      value: 1.8,
      suffix: "hrs",
      description: "Últimos 30 días",
      icon: Timer,
    },
  ];

  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 p-density-lg">
      {maintenanceStats.map((stats, index) => (
        <div
          className="rounded-lg border border-border  bg-card text-card-foreground shadow-retool-sm    "
          key={index}
        >
          <div className=" space-y-density-xs p-density-xl flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-sm text-muted-foreground ">{stats.title}</h2>
            <stats.icon className="h-4 w-4 text-muted-foreground " />
          </div>
          <div className="p-density-xl pt-0 ">
            <div className="text-3xl font-bold text-foreground">
              {stats.value}
            </div>
            {stats.description && (
              <p className="text-xs text-muted-foreground mt-1">
                {stats.description}
              </p>
            )}
            {stats.progress !== undefined && (
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted-foreground">Cumplimiento</span>
                  <span className="font-medium">{stats.progress}%</span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${stats.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
