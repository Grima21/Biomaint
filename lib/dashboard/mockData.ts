export type CalibrationPriority = "Alto" | "Medio" | "Bajo";

export interface CalibrationAlert {
  id: string;
  equipmentName: string;
  department: string;
  location: string;
  expirationDate: string;
  priority: CalibrationPriority;
}

export const calibrationAlerts: CalibrationAlert[] = [
  {
    id: "CAL-001",
    equipmentName: "Electrobisturí Valleylab",
    department: "Quirófano 1",
    location: "Sala A",
    expirationDate: "2026-10-05",
    priority: "Alto",
  },
  {
    id: "CAL-002",
    equipmentName: "Ventilador Dräger Evita V300",
    department: "UCI",
    location: "Cama 2",
    expirationDate: "2026-10-08",
    priority: "Alto",
  },
  {
    id: "CAL-003",
    equipmentName: "Rayos X Portátil GE",
    department: "Radiología",
    location: "Sala 2",
    expirationDate: "2026-10-12",
    priority: "Medio",
  },
  {
    id: "CAL-004",
    equipmentName: "Bomba de Infusión B. Braun",
    department: "Urgencias",
    location: "Box 3",
    expirationDate: "2026-10-15",
    priority: "Bajo",
  },
];
