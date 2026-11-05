"use client";
import { CircleAlert } from "lucide-react";
import CardAlert from "@/components/alert/CardAlert";

export default function AlertPage() {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Alertas y Calibraciones</h1>
          <p className="text-muted-foreground text-sm">
            Equipos que requieren Calibracion o atención inmediata
          </p>
        </div>
        <div className="border border-destructive text-destructive flex flex-col  gap-0.5 py-4 px-3 rounded-lg mt-4">
          <div className="flex gap-2 items-center font-semibold">
            <CircleAlert className="h-6 w-6" />
            <h3 className="text-md">
              2 equipos con riesgo alto de calibración vencida
            </h3>
          </div>
          <div>
            <p className="text-destructive text-sm">
              Prioriza estos equipos para evitar interrupciones en servicios
              criticos.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CardAlert />
      </div>
    </section>
  );
}
