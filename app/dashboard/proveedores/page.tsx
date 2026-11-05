"use client";
import ProviderCards from "@/components/provider/ProviderCards";
import { Plus } from "lucide-react";
import Modal from "@/components/ui/Modal";
import ProviderForm from "@/components/provider/form/ProviderForm";
import { useState } from "react";
export default function ProviderPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-density-lg">
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between mb-8 lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Proveedores
          </h1>
          <p className="text-sm text-muted-foreground">
            Proveedores de servicio tecnico contratado
          </p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="max-w-[180px] bg-primary rounded-lg py-2 px-3 inline-flex shrink-0 gap-2 items-center whitespace-nowrap text-sm text-primary-foreground hover:bg-primary/85 transition-colors cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" />
          Agregar Proveedor
        </button>
      </div>
      <div>
        <ProviderCards />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Agregar Proveedor"
      >
        <ProviderForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
