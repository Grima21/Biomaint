interface OtFormProps {
  onClose: () => void;
}

export default function OtForm({ onClose }: OtFormProps) {
  return (
    <div className="fixed left-[50%] top-[50%] z-50 flex max-h-[85vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-density-lg overflow-hidden border bg-background text-foreground p-density-xl shadow-retool-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-lg">
      <div className="flex shrink-0 flex-col space-y-density-xs r">
        <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
          Nueva Orden de Trabajo
        </h2>
        <p className="text-sm text-muted-foreground">
          Registra una nueva OT preventiva o correctiva
        </p>
      </div>
      <form className="min-h-0 flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Equipo
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Monitor de Signos Vitales Mindray"
            />
          </div>
          <div className="col-span-2 space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ubicación
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: UCI - Cama 4"
            />
          </div>
          <div className="col-span-2 space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Codigo de equipo
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: 0420"
            />
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
          <div className=" space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Asignado a
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
        </div>
      </form>
      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={onClose}
          type="button"
          className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-85 cursor-pointer transition-colors"
        >
          Agregar Equipo
        </button>
      </div>
    </div>
  );
}
