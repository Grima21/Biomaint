import type { FormEvent } from "react";

interface ContactProps {
  onClose: () => void;
}

export default function ContactTab({ onClose }: ContactProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div>
      <div className="flex shrink-0 items-center gap-2 space-y-density-xs  sm:text-left mb-4">
        <div className="h-6 w-1 shrink-0 self-center rounded-full bg-primary" />
        <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
          Informacion de contacto
        </h2>
      </div>
      <form
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
        onSubmit={handleSubmit}
      >
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Contacto Principal
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
              Cargo
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
              Teléfono directo
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
              Correo electrónico
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Electro Médica Panamá"
            />
          </div>
          <div className="space-y-1.5 ">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telefono de soporte (opcional)
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Ingrese la dirección de la empresa"
            />
          </div>
          <div className="border-b h-4 w-full border-border col-span-2" />
          <div className="col-span-2 shrink-0 space-y-density-xs sm:text-left mb-1 flex flex-col ">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 shrink-0 rounded-full bg-primary" />
              <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground">
                Informacion de adicional
              </h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Información complementaria del proveedor.
            </p>
          </div>
          <div className="space-y-1.5 col-span-2">
            <textarea
              id="name"
              className="flex h-20 w-full rounded-md px-3 border border-input bg-background disabled:cursor-not-allowed disabled:opacity-50 md:text-sm "
              placeholder="Ej: Electro Médica Panamá"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

ContactTab.displayName = "ContactTab";
