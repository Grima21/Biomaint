export type AlertPriority = "Alto" | "Medio" | "Bajo";

export interface MaintenanceAlert {
  id: string;
  equipment: string;
  location: string;
  dueDate: string;
  priority: AlertPriority;
}

export const maintenanceAlerts: MaintenanceAlert[] = [
  {
    id: "ALT-001",
    equipment: "Electrobisturí Valleylab",
    location: "Quirófano 1",
    dueDate: "2024-05-05",
    priority: "Alto",
  },
  {
    id: "ALT-002",
    equipment: "Ventilador Dräger Evita V300",
    location: "UCI - Cama 2",
    dueDate: "2024-05-18",
    priority: "Alto",
  },
  {
    id: "ALT-003",
    equipment: "Rayos X Portátil GE",
    location: "Radiología - Sala 2",
    dueDate: "2024-06-15",
    priority: "Medio",
  },
  {
    id: "ALT-004",
    equipment: "Bomba de Infusión B. Braun",
    location: "Urgencias - Box 3",
    dueDate: "2024-07-11",
    priority: "Bajo",
  },
];
