import {
  Save,
  BuildingComplex,
  Settings,
  UserRound,
  Handshake,
} from "lucide-react";
import { useState } from "react";
import GeneeralInfoTab from "./GeneralInfoTab";
import ContactTab from "./ContactTab";
import ServiceTab from "./ServiceTab";
interface ProviderFormProps {
  onClose: () => void;
}

export default function ProviderForm({ onClose }: ProviderFormProps) {
  const [activeSection, setActiveSection] = useState("general");
  return (
    <div className="fixed left-1/2 top-1/2 z-50 flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-hidden border bg-background p-4 text-foreground shadow-retool-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:gap-density-lg sm:rounded-lg sm:p-density-lg">
      <div className="flex shrink-0 gap-4 items-center space-y-density-xs text-center sm:text-left ">
        <Handshake className="h-12 w-12 text-primary" />
        <div>
          <h2 className="text-2xl font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
            Agregar Provedor
          </h2>
          <p className="text-sm text-muted-foreground ">
            Registra la empresa de servicio técnico que dará mantenimiento a los
            equipos.
          </p>
        </div>
      </div>
      <div className="border-b border-border flex ">
        <button
          type="button"
          onClick={() => setActiveSection("general")}
          className={`rounded-t-xl px-3 py-2 flex gap-2 items-center cursor-pointer font-semibold ${activeSection === "general" ? "bg-accent text-primary border-b-2 border-primary " : "bg-muted text-muted-foreground"}`}
        >
          <BuildingComplex className="h-5 w-5" />
          Información General
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("contact")}
          className={`rounded-t-xl px-3 py-2 flex gap-2 items-center cursor-pointer font-semibold ${activeSection === "contact" ? "bg-accent text-primary border-b-2 border-primary " : "bg-muted text-muted-foreground"}`}
        >
          <UserRound className="w-5 h-5" />
          Contacto
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("services")}
          className={`rounded-t-xl px-3 py-2 flex gap-2 items-center cursor-pointer font-semibold ${activeSection === "services" ? "bg-accent text-primary border-b-2 border-primary " : "bg-muted text-muted-foreground"}`}
        >
          <Settings className="h-5 w-5" />
          Servicios
        </button>
      </div>
      {/* AQUI VA LOS FORMULARIOS */}
      {activeSection === "general" && <GeneeralInfoTab onClose={onClose} />}
      {activeSection === "contact" && <ContactTab onClose={onClose} />}
      {activeSection === "services" && <ServiceTab onClose={onClose} />}

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
          <Save className="h-4 w-4" />
          Generar Orden de trabajo
        </button>
      </div>
    </div>
  );
}
