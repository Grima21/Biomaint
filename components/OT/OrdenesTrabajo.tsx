"use client";

import { workOrders } from "@/lib/Ot/mockOtData";

export default function WorkOrden() {
  const priorityStyles = {
    Wrench: "text-warning",
    AlertCircle: "text-warning",
  };
  const priorityStyle: Record<string, string> = {
    Alta: "bg-warning text-warning-foreground",
    Crítica: "bg-destructive text-warning-foreground",
    Media: "bg-muted text-black",
    Baja: "bg-card text-card-foreground border border-border",
  };
  const statusStyles: Record<string, string> = {
    Abierta: "bg-success text-white ",
    "En progreso": "bg-warning text-white",
    Cerrada: "bg-green-600 text-white",
  };

  return (
    <section className="mt-4 w-full overflow-auto rounded-lg border border-border shadow-retool-sm box-shadow">
      <table className="w-full min-w-[1200px] text-sm ">
        <thead className="py-12">
          <tr className="h-2 border border-border bg-muted/50 text-center text-card-foreground">
            <th className="whitesPace-nowrap px-4 py-3">OT</th>
            <th className="whitesPace-nowrap px-4 py-3">Equipo</th>
            <th className="whitesPace-nowrap px-4 py-3">Proveedor</th>
            <th className="whitesPace-nowrap px-4 py-3">Tipo</th>
            <th className="whitesPace-nowrap px-4 py-3">Prioridad</th>
            <th className="whitesPace-nowrap px-4 py-3">Estado</th>
            <th className="whitesPace-nowrap px-4 py-3">Asignado a</th>
            <th className="whitesPace-nowrap px-4 py-3">Creada</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.map((work) => {
            const Icon = work.icon;

            return (
              <tr
                key={work.id}
                className="border-t border-b border-border h-24 [&>td]:h-20 [&>td]:px-8"
              >
                <td className="align-middle">
                  <p className="text-sm font-medium">{work.id}</p>
                </td>
                <td className="align-middle">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-sm">
                      {work.equipment}
                    </span>
                    <span className="text-xs text-left text-muted-foreground">
                      {work.location}
                    </span>
                  </div>
                </td>
                <td className="align-middle">
                  <p className="text-sm">{work.provider}</p>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Icon
                      className={`h-4 w-4 ${priorityStyles[Icon.displayName as keyof typeof priorityStyles] ?? "text-gray-500"}`}
                    />
                    <span className="text-sm">{work.type}</span>
                  </div>
                </td>
                <td className="align-middle">
                  <div
                    className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs leading-none font-bold ${priorityStyle[work.priority] ?? "bg-gray-500 text-white"}`}
                  >
                    {work.priority}
                  </div>
                </td>
                <td className="align-middle">
                  <div
                    className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs leading-none font-bold ${statusStyles[work.status] ?? "bg-muted"}`}
                  >
                    {work.status}
                  </div>
                </td>
                <td>
                  <p className="text-sm font-medium">{work.assignedTo}</p>
                </td>
                <td>
                  <p className="text-sm ">{work.createdAt}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
