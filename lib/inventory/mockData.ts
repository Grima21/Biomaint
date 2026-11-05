import type { LucideIcon } from "lucide-react";

export interface InventoryKpis {
  id: string;
  title: string;
  value: number;
  icon: LucideIcon;
  color?: "success" | "warning" | "destructive";
}

import {
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Wrench,
  CircleX,
} from "lucide-react";

export const inventoryStats: InventoryKpis[] = [
  {
    id: "group_Equipment",
    title: "Grupo de Equipos",
    value: 7,
    icon: Layers3,
  },
  {
    id: "units",
    title: "Unidades",
    value: 224,
    icon: MonitorSmartphone,
  },
  {
    id: "operational",
    title: "Operativos",
    value: 191,
    icon: ShieldCheck,
    color: "success",
  },
  {
    id: "maintenance",
    title: "En Mantenimiento",
    value: 22,
    icon: Wrench,
    color: "warning",
  },
  {
    id: "out-of-service",
    title: "F. de Servicio",
    value: 11,
    icon: CircleX,
    color: "destructive",
  },
];
