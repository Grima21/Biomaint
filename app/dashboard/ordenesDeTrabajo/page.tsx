"use client";
import WorkOrden from "@/components/OT/OrdenesTrabajo";
import { Plus } from "lucide-react";
import Modal from "@/components/ui/Modal";
import OtForm from "@/components/OT/OtForm";
import { useState } from "react";
export default function WorkPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Órdenes de Trabajo</h1>
          <p className="text-muted-foreground text-sm">
            Seguimiento de mantenimiento preventivo y correctivo
          </p>
        </div>
        <div className="sm:justify-self-end">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-sm text-white rounded-lg shrink-0 px-4 py-2.5 inline-flex gap-2 whitespace-nowrap items-center justify-center  sm:w-auto hover:bg-primary/85 transition-colors cursor-pointer "
          >
            <Plus className="h-4 w-4" />
            Nueva Orden
          </button>
        </div>
      </div>
      <div>
        <WorkOrden />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Nueva Orden"
      >
        <OtForm onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
}
