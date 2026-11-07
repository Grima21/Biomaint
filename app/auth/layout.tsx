import React from "react";
import { Activity, ShieldCheck, Wrench, ChartLine } from "lucide-react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      {/* Panel Izquierdo: Fondo azul reutilizable con branding del CMMS */}
      <div className="hidden lg:flex flex-col justify-between relative overflow-hidden bg-primary text-white p-12">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
        />
        <div className="flex items-center space-x-4 relative">
          <div className="rounded-md flex items-center justify-center  h-11 w-11  bg-primary-foreground/15 backdrop-blur ring-1 ring-inset ring-primary-foreground/25">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg text-primary-foreground font-bold">
              BioMaint
            </h3>
            <p className="opacity-75 text-sm">CMMS Biomédico</p>
          </div>
        </div>

        <div className="relative max-w-md space-y-4 relative">
          <h1 className="text-3xl font-bold leaading-tight ">
            Gestión de mantenimiento clínico, simple y confiable
          </h1>
          <p className="text-sm opacity-75">
            Controla inventario, órdenes de trabajo, calibraciones y proveedores
            desde un solo lugar.
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/25 backdrop-blur">
                <ShieldCheck className="h-4 w-4 " />
              </span>
              <div>
                <p className="text-sm font-semibold">Trazabilidad completa</p>
                <p className="text-xs opacity-75">
                  Historial de calibraciones y mantenimiento por equipo.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/25 backdrop-blur">
                <Wrench className="h-4 w-4 " />
              </span>
              <div>
                <p className="text-sm font-semibold">Órdenes de trabajo</p>
                <p className="text-xs opacity-75">
                  Programa, asigna y da seguimiento a cada intervención.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15 ring-1 ring-inset ring-primary-foreground/25 backdrop-blur">
                <ChartLine className="h-4 w-4 " />
              </span>
              <div>
                <p className="text-sm font-semibold">Indicadores en vivo</p>
                <p className="text-xs opacity-75">
                  Cumplimiento, alertas activas y costos en tu dashboard.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4 relative">
          <p className="text-xs text-blue-300">
            © 2026 BioMaint. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Panel Derecho: Contenedor dinámico donde entra Login o Register */}
      <div className="flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-6">{children}</div>
      </div>
    </div>
  );
}
