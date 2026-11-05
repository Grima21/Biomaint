"use client";
import KpisInventory from "@/components/Inventory/kpisInventory";
import InventoryToolBar from "@/components/Inventory/InventoryToolBar";
import { FileSpreadsheetIcon, Plus } from "lucide-react";
import { mockInventory } from "@/lib/inventory/mockTableData";
import { ChevronRight, Box } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import InventoryForm from "@/components/Inventory/InventoryForm";

export default function Inventory() {
  const [isOpen, setIsOpen] = useState(false);

  const priorityStyles = {
    Alto: "bg-destructive text-white",
    Medio: "bg-warning text-white",
    Bajo: "bg-succes text-white",
  };

  return (
    <div className="p-density-lg">
      <div className="flex flex-col gap-density-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-semibold text-foreground">
            Inventario de Equipos
          </h1>
          <p className="text-sm text-muted-foreground">
            Gestion de activos y lotes biomédicos hospitalarios
          </p>
        </div>
        <div className="flex items-center gap-density-sm ">
          <button className="inline-flex items-center justify-center shrink-0 whitespace-nowrap gap-density-sm font-medium text-sm border border-border rounded-lg text-card-foreground h-10 px-density-lg py-density-sm hover:bg-accent cursor-pointer transition-colors">
            <FileSpreadsheetIcon className="h-4 w-4" />
            Importar Excel
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center shrink-0 whitespace-nowrap gap-density-sm font-medium  text-sm bg-primary/90 h-10  rounded-lg border text-white border-border  px-density-lg py-density-sm hover:bg-primary/80 transition-colors cursor-pointer"
          >
            <Plus className="h4 w-4" />
            Agregar Equipo
          </button>
        </div>
      </div>
      <KpisInventory />
      <InventoryToolBar />

      <section className="w-full overflow-x-auto h-full rounded-lg border border-border mt-4">
        <table className="w-full min-w-[1200px] h-full text-sm">
          <thead className="py-2">
            <tr className="h-2 border-y border-border bg-muted/50 text-center text-card-foreground">
              <th className="whitespace-nowrap px-4 py-3">Codigo de Equipos</th>
              <th className="whitespace-nowrap px-4 py-3">Equipo</th>
              <th className="whitespace-nowrap px-4 py-3">Marca</th>
              <th className="whitespace-nowrap px-4 py-3">Modelo</th>
              <th className="whitespace-nowrap px-4 py-3">Proveedor</th>
              <th className="whitespace-nowrap px-4 py-3">Cantidad</th>
              <th className="whitespace-nowrap px-4 py-3">
                Ubicacion / Distribución
              </th>
              <th className="whitespace-nowrap px-4 py-3">Estado General</th>
              <th className="whitespace-nowrap px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="w-full min-w-[900px] h-full">
            {mockInventory.map((inventory) => (
              <tr
                className=" border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                key={inventory.id}
              >
                <td className="align-middle p-density-xl  ">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <p className="text-sm font-semibold ">
                      {inventory.lotCode}
                    </p>
                  </div>
                </td>
                <td className="p-density-xl align-middle has-[[role=checkbox]]:pr-0">
                  <div>
                    <p className="font-semibold">{inventory.equipment.name}</p>

                    <span
                      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs leading-none font-medium ${priorityStyles[inventory.equipment.priority]}`}
                    >
                      {inventory.equipment.priority}
                    </span>
                  </div>
                </td>
                <td className="align-middle p-density-xl ">
                  <p className="text-sm text-muted-foreground">
                    {inventory.equipment.brand}
                  </p>
                </td>
                <td className="align-middle p-density-xl ">
                  <p className="text-sm text-muted-foreground">
                    {inventory.equipment.model}
                  </p>
                </td>
                <td className="align-middle p-density-xl ">
                  <p className="text-sm text-muted-foreground">
                    {inventory.supplier}
                  </p>
                </td>
                <td className="align-middle text-center p-density-xl">
                  <p className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs leading-none font-bold bg-blue-600 text-white">
                    {inventory.quantity}
                  </p>
                </td>
                <td className="align-middle text-muted-foreground text-sm p-density-xl">
                  {(() => {
                    const visibleLocations = inventory.locations.slice(0, 3);
                    const remaining = inventory.locations.length - 3;

                    return (
                      <>
                        {visibleLocations.join(", ")}
                        {remaining > 0 &&
                          ` +${remaining} ${remaining === 1 ? "nivel" : "niveles"}`}
                      </>
                    );
                  })()}
                </td>
                <td className="align-middle p-density-xl">
                  <div className="flex flex-wrap max-h-40  items-center gap-1 overflow-hidden text-xs">
                    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-1.5 py-0.5">
                      <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-warning" />
                      {inventory.status.maintenance} Mantenimiento
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-1.5 py-0.5">
                      <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
                      {inventory.status.operational} Operativo
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-1.5 py-0.5">
                      <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-destructive" />
                      {inventory.status.outOfService} F. de Servicio
                    </span>
                  </div>
                </td>
                <td className="align-middle p-density-xl">
                  <button className="inline-flex items-center justify-center gap-density-sm whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-density-md cursor-pointer">
                    Ver unidades 100
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* Modal Reutilizable */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Agregar equipo"
      >
        <InventoryForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
