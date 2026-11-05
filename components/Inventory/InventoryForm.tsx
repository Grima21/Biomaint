import { PackagePlus } from "lucide-react";

interface InventoryFormProps {
  onClose: () => void;
}

export default function InventoryForm({ onClose }: InventoryFormProps) {
  return (
    <div className="fixed inset-x-3 top-1/2 z-50 flex max-h-[90vh] max-h-[90dvh] w-[calc(100%-1.5rem)] -translate-y-1/2 flex-col gap-density-md overflow-hidden border bg-background p-density-md text-foreground shadow-retool-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:left-1/2 sm:right-auto sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:gap-density-lg sm:p-density-xl rounded-lg">
      <div className="flex shrink-0 flex-col space-y-density-xs  sm:text-left ">
        <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
          <PackagePlus className="h-5 w-5 text-primary" />
          Agregar Grupo de Equipos
        </h2>
        <p className="text-sm text-muted-foreground ">
          Registra una compra por volumen. Cada unidadfisica se generará con su
          propio N° de activo, serie y ubicación
        </p>
      </div>
      <form className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nombre del equipo
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Monitor de signos vitales"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Marca
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Mindray"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Modelo
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: uMEC12"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Proveedor
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Electro Médica Panamá"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Codigo de equipos
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: 0453"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="status"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nivel de riesgo
            </label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              id="status"
            >
              <option value="Alto">Alto</option>
              <option value="Medio">Medio</option>
              <option value="Bajo">Bajo</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Cantidad de unidades
            </label>
            <input
              type="number"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="10"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Prox. Calibración
            </label>
            <input
              type="date"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Monitor de signos vitales"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Pisos de distribución
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Piso 1, piso2, planta baja"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ubicacion especifica
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: UCI-Cama "
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <button
          onClick={onClose}
          type="button"
          className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors sm:w-auto"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-85 cursor-pointer transition-colors sm:w-auto"
        >
          Agregar Equipo
        </button>
      </div>
    </div>
  );
}
