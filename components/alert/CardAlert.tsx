import { Pin, CalendarClock, Pi } from "lucide-react";
import { MaintenanceAlert, maintenanceAlerts } from "@/lib/alert/mockData";
import Modal from "../ui/Modal";
import AlertForm from "./AlertForm";
import { useState } from "react";

export default function CardAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const priorityStyles = {
    Alto: "bg-destructive text-white",
    Medio: "bg-warning text-white",
    Bajo: "bg-success text-white",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 ">
      {maintenanceAlerts.map((maintenance) => (
        <div
          key={maintenance.id}
          className="bg-card border border-border shadow-retool-md p-6 rounded-lg flex flex-col gap-3"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold">{maintenance.equipment}</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-1 ">
                <Pin className="h-4 w-4 " />
                {maintenance.location}
              </p>
            </div>
            <div
              className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-sm leading-none font-medium ${priorityStyles[maintenance.priority]}`}
            >
              {maintenance.priority}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-muted-foreground text-sm flex gap-1 items-center">
              <CalendarClock className="h-4 w-4" />
              <p>{`Vence: ${maintenance.dueDate}`}</p>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary px-4 py-2 rounded-lg text-sm text-muted font-semibold cursor-pointer hover:bg-primary/85 transition-colors "
            >
              Generar OT
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Generar OT"
          >
            <AlertForm onClose={() => setIsOpen(false)} />
          </Modal>
        </div>
      ))}
    </div>
  );
}
