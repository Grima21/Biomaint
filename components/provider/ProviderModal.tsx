import { useState } from "react";
import Modal from "../ui/Modal";
import ProviderForm from "./form/ProviderForm";
import {
  Truck,
  Save,
  BuildingComplex,
  Settings,
  UserRound,
} from "lucide-react";

interface ProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProviderModal({ isOpen, onClose }: ProviderModalProps) {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div>
      <div className="flex shrink-0 flex-col space-y-density-xs text-center sm:text-left ">
        <h2 className="text-lg font-semibold leading-none tracking-tight text-foreground flex items-center gap-2">
          <Truck className="h-5 w-5 text-primary" />
          Agregar Provedor
        </h2>
        <p className="text-sm text-muted-foreground ">
          Registra la empresa de servicio técnico que dará mantenimiento a los
          equipos.
        </p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setActiveSection("general")}
          className={`rounded-md px-3 py-2 ${activeSection === "general" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}
        >
          <BuildingComplex className="h-4 w-4" />
          Información General
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("contact")}
          className={`rounded-md px-3 py-2 ${activeSection === "contact" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}
        >
          <UserRound />
          Contacto
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("services")}
          className={`rounded-md px-3 py-2 ${activeSection === "services" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}
        >
          <Settings />
          Servicios
        </button>
      </div>
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
