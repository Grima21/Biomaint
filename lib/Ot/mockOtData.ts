import type { LucideIcon } from "lucide-react";

export type WorkOrderType = "Correctivo" | "Preventivo";
export type WorkOrderPriority = "Crítica" | "Alta" | "Media" | "Baja";
export type WorkOrderStatus = "Abierta" | "En Progreso" | "Cerrada";
import { Wrench, AlertCircle } from "lucide-react";

export interface WorkOrder {
  id: string;
  equipment: string;
  location: string;
  provider: string | null;
  type: WorkOrderType;
  priority: WorkOrderPriority;
  status: WorkOrderStatus;
  assignedTo: string;
  createdAt: string;
  icon: LucideIcon;
}

export const workOrders: WorkOrder[] = [
  {
    id: "OT-2201",
    equipment: "Electrobisturí Valleylab",
    location: "Quirófano 1",
    provider: "Cormay S.A. de C.V.",
    type: "Correctivo",
    priority: "Crítica",
    status: "Abierta",
    assignedTo: "Ing. Carlos Ruiz",
    createdAt: "2024-05-01",
    icon: AlertCircle,
  },
  {
    id: "OT-2202",
    equipment: "Ventilador Dräger Evita V300",
    location: "UCI - Cama 2",
    provider: "Dräger Medical S.A.C.",
    type: "Correctivo",
    priority: "Crítica",
    status: "En Progreso",
    assignedTo: "Ing. Laura Gómez",
    createdAt: "2024-05-02",
    icon: AlertCircle,
  },
  {
    id: "OT-2203",
    equipment: "Rayos X Portátil GE",
    location: "Radiología - Sala 2",
    provider: "GE Healthcare LATAM",
    type: "Preventivo",
    priority: "Alta",
    status: "En Progreso",
    assignedTo: "Téc. Andrés Peña",
    createdAt: "2024-05-03",
    icon: Wrench,
  },
  {
    id: "OT-2204",
    equipment: "Bomba de Infusión B. Braun",
    location: "Urgencias - Box 3",
    provider: "Distribuidora Hospimed, S.A.",
    type: "Preventivo",
    priority: "Media",
    status: "Abierta",
    assignedTo: "Téc. Mónica Díaz",
    createdAt: "2024-05-04",
    icon: Wrench,
  },
  {
    id: "OT-2205",
    equipment: "Autoclave Tuttnauer",
    location: "CEyE - Área 1",
    provider: null,
    type: "Preventivo",
    priority: "Baja",
    status: "Cerrada",
    assignedTo: "Téc. Andrés Peña",
    createdAt: "2024-04-28",
    icon: Wrench,
  },
  {
    id: "OT-2206",
    equipment: "Monitor de Signos Vitales Mindray",
    location: "UCI - Cama 4",
    provider: "Electro Médica Panamá, S.A.",
    type: "Preventivo",
    priority: "Alta",
    status: "Abierta",
    assignedTo: "Ing. Carlos Ruiz",
    createdAt: "2024-05-05",
    icon: Wrench,
  },
];
