import { FormEvent } from "react";
import { Clock, Pin, PinIcon } from "lucide-react";
interface ServiceProps {
  onClose: () => void;
}

export default function ServiceTab({ onClose }: ServiceProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };
  return (
    <div>
      <div className="flex flex-col shrink-0  mb-4  sm:text-left ">
        <div className="flex items-center gap-2 space-y-density-xs">
          <div className="h-6 w-1 shrink-0 self-center rounded-full bg-primary" />
          <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
            Servicios y capacidades
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Selecciona los servicios que ofrece el proveedor y las marcas que
          atiende.
        </p>
      </div>
      <form
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        onSubmit={handleSubmit}
      >
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Mantenimiento Correctivo
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Mantenimineto Preventivo
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Calibracion
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Instalación y Puesta en Marcha
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Soporte Técnico Remoto
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Capacitación
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Venta de Equipos
            </label>
          </div>
          <div className="space-y-1.5 ">
            <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <input
                type="checkbox"
                id="name"
                className="h-6 w-4 shrink-0 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ej: Drager Medical S.A.C"
              />
              Contacto Principal
            </label>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Marcas que atiende (opcional)
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: General de Servicio"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Cobertura geográfica
            </label>

            <div className="relative">
              <PinIcon
                aria-hidden="true"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Ej: Lunes a Viernes de 8:00 am a 5:00 pm"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Horario de atención
            </label>
            <div className="relative">
              <Clock
                aria-hidden="true"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 pl-9 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Ej: Lunes a Viernes de 8:00 am a 5:00 pm"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
