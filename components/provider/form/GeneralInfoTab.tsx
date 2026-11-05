import { PackagePlus } from "lucide-react";

interface GeneralFormProps {
  onClose: () => void;
}

export default function GeneeralInfoTab({ onClose }: GeneralFormProps) {
  return (
    <div>
      <div className="flex shrink-0 items-center gap-2 space-y-density-xs  sm:text-left mb-4">
        <div className="h-6 w-1 shrink-0 self-center rounded-full bg-primary" />
        <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
          Informacion de la Empresa
        </h2>
      </div>
      <form className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 ">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nombre de la empresa
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Drager Medical S.A.C"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              RUC
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Ingrese RUC"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Servicio / Especialidad
            </label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              id="status"
            >
              <option value="Alto">Seleccione una especialidad</option>
              <option value="Medio">Medio</option>
              <option value="Bajo">Bajo</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Pais
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Electro Médica Panamá"
            />
          </div>
          <div className="space-y-1.5 col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Dirección
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Ingrese la dirección de la empresa"
            />
          </div>
          <div className="border-b h-4 w-full border-border col-span-2" />

          <div className="col-span-2 flex shrink-0 items-center gap-2 space-y-density-xs  sm:text-left mb-4">
            <div className="h-6 w-1 shrink-0 self-center rounded-full bg-primary" />
            <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
              Informacion de contacto
            </h2>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="status"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Contacto principal
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
              Correo electronico
            </label>
            <input
              type="number"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="correo@empresa.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telefono
            </label>
            <input
              type="number"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="+507 6000-0000"
            />
          </div>
          <div className="space-y-1.5 ">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sito web (opcional)
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full px-3 rounded-md border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Piso 1, piso2, planta baja"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
