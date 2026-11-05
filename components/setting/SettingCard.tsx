"use client";
import { User2, Building2, LifeBuoy, Bell } from "lucide-react";
import {
  userProfile,
  organizationSettings,
  notificationOptions,
  notificationEmail,
} from "@/lib/setting/mockData";
import { useState } from "react";
import Toast from "../ui/Toast";

export default function SettingCard() {
  const [alerts, setAlerts] = useState(notificationOptions);
  const [toast, setToast] = useState<{
    message: string;
    title?: string;
    variant: "simple" | "detailed";
  } | null>(null);

  function toggleAlert(id: string) {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, enabled: !alert.enabled } : alert,
      ),
    );
  }
  return (
    <div className="max-w-3xl flex gap-4 flex-col">
      {/* user card */}
      <div className=" bg-card rounded-lg border border-border p-density-xl shadow-retool-lg">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-2 items-center">
            <User2 className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-[16px]">Perfil</h3>
          </div>
          <p className="text-sm text-muted-foreground ">
            Información de tu cuenta
          </p>
        </div>

        <div className="flex items-center  gap-3 rounded-md px-2 py-1.5 mt-2 ">
          <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full text-base w-full items-center justify-center rounded-full bg-primary  font-semibold text-primary-foreground">
              {userProfile.initials}
            </span>
          </span>
          <div className=" text-left ">
            <p className="text-sm font-medium leading-tight text-foreground">
              {userProfile.name}
            </p>
            <span className="mt-1 inline-flex items-center rounded-full border border-border bg-secondary px-2 py-0.5 text-xs font-semibold text-foreground">
              {userProfile.role}
            </span>
          </div>{" "}
        </div>
      </div>
      {/* Organization card */}
      <div className=" bg-card rounded-lg border border-border p-density-xl shadow-retool-lg  ">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-2 items-center">
            <Building2 className="h-4 w-4 " />
            <h3 className="font-semibold text-[16px]">Mi Organización</h3>
          </div>
          <p className="text-sm text-muted-foreground ">
            La organización a la que pertence tu cuenta
          </p>
        </div>
        <div className="rounded-md flex flex-col gap-2   mt-density-sm">
          {organizationSettings.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-md border border-border p-3"
            >
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>

              <span className="text-sm ">{item.value}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            setToast({
              title: "Solicitud enviada",
              message: "Soporte de BioMaint se pondrá en contacto contigo.",
              variant: "detailed",
            })
          }
          className="flex items-center gap-2 bg-card text-card-foreground rounded-lg border border-border mt-density-lg py-2 px-3 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
        >
          <LifeBuoy className="h-4 w-4" />
          Contactar Soporte
        </button>
        <span className="text-xs text-muted-foreground mt-3">
          Para modificar los datos de la organización o agregar sedes, contacta
          al administrador de tu cuenta.
        </span>
      </div>

      {/* NOTIFICACIONES CARD */}

      <div className=" bg-card rounded-lg border border-border p-density-xl shadow-retool-lg  ">
        <div className="flex gap-2 items-center">
          <Bell className="h-4 w-4" />
          <h3 className="font-semibold text-[16px]">Notificaciones</h3>
        </div>
        <p className="text-sm text-muted-foreground ">
          Cómo quieres que te avisemos
        </p>
        <div className="flex flex-col gap-3 mt-4 ">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between">
              <span className="text-sm text-foreground leading-none">
                {alert.label}
              </span>

              <button
                type="button"
                onClick={() => toggleAlert(alert.id)}
                className={` cursor-pointer relative h-6 w-11 rounded-full transition-colors ${
                  alert.enabled ? "bg-primary" : "bg-slate-300"
                }`}
                aria-label={alert.label}
                aria-pressed={alert.enabled}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    alert.enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <label htmlFor="notification-email" className="mb-2 block text-sm">
            Correo de notificaciones
          </label>

          <input
            id="notification-email"
            type="email"
            className="w-full border border-border rounded-md  bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/85"
            required
            defaultValue="daniel.torres@biomaint.org"
          />
          <button
            onClick={() =>
              setToast({
                message: "Preferencias guardadas",
                variant: "simple",
              })
            }
            type="button"
            className="mt-3 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/85 cursor-pointer transition-colors"
          >
            Guardar cambios
          </button>
        </div>
      </div>
      {toast && (
        <Toast
          key={`${toast.variant}-${toast.title ?? toast.message}`}
          message={toast.message}
          title={toast.title}
          variant={toast.variant}
          duration={6000}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
