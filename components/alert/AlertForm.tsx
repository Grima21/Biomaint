import { MapPin, CalendarClock, Truck, ClipboardList } from "lucide-react";

interface AlertFormProps {
  onClose: () => void;
}

export default function AlertForm({ onClose }: AlertFormProps) {
  const priorityStyles = {
    Alto: "bg-destructive text-white",
    Medio: "bg-warning text-white",
    Bajo: "bg-success text-white",
  };
  return (
    <div className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-hidden border bg-background p-4 text-foreground shadow-retool-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:gap-density-lg sm:rounded-lg sm:p-density-xl">
      <div className="flex shrink-0 flex-col space-y-density-xs">
        <h2 className="flex items-center gap-2 text-base font-semibold leading-tight tracking-tight text-foreground sm:text-lg">
          <ClipboardList className="h-5 w-5 text-primary" />
          Programar Calibración / Mantenimiento
        </h2>
        <p className="text-sm text-muted-foreground">
          Se generará una Orden de Trabajo con los datos del equipo ya cargados.
        </p>
      </div>
      <div className="bg-card border border-border p-density-md rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-sm">Electrobisturí Valleylab</p>
          <span
            className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs leading-none font-medium bg-destructive text-white`}
          >
            Alto
          </span>
        </div>
        <div className="border-b border-border " />
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="mt-2">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Quirófano 1
            </span>
          </div>
          <div className="mt-2">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <CalendarClock className="h-4 w-4" />
              Vence:2026-05-05
            </span>
          </div>
          <div className="mt-2">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Truck className="h-4 w-4" />
              Cormay S.A de C.V
            </span>
          </div>
        </div>
      </div>
      <form className="min-h-0 flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Responsable
            </label>

            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              id="status"
            >
              <option value="Critica">Ing. Carlos Ruiz</option>
              <option value="Alta">Ing. Laura Gómez</option>
              <option value="">Tec. Andres Peña</option>
              <option value="Baja">Tec. Monica Díaz</option>
            </select>
          </div>

          <div className=" space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Tipo
            </label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              id="status"
            >
              <option value="Preventivo">Preventivo</option>
              <option value="Correctivo">Correctivo</option>
            </select>
          </div>
          <div className=" space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Prioridad
            </label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              id="status"
            >
              <option value="Critica">Critica</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Fecha programada
            </label>
            <input
              type="date"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Monitor de signos vitales"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Notas
            </label>
            <textarea
              id="name"
              rows={3}
              className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Escribe notas adicionales"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <button
          onClick={onClose}
          type="button"
          className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer sm:w-auto"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-85 cursor-pointer sm:w-auto"
        >
          <ClipboardList className="h-4 w-4" />
          Generar Orden de trabajo
        </button>
      </div>
    </div>
  );
}
