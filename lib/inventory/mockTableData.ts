export type InventoryLot = {
  id: string;
  lotCode: string;
  equipment: {
    name: string;
    brand: string;
    model: string;
    priority: "Alto" | "Medio" | "Bajo";
  };
  supplier: string;
  quantity: number;
  locations: string[];
  status: {
    operational: number;
    maintenance: number;
    outOfService: number;
  };
};

export const mockInventory: InventoryLot[] = [
  {
    id: "1",
    lotCode: "LOTE-0451",
    equipment: {
      name: "Monitor de Signos Vitales",
      brand: "Mindray",
      model: "uMEC12",
      priority: "Alto",
    },
    supplier: "Electro Médica Panamá, S.A.",
    quantity: 100,
    locations: [
      "Piso 1",
      "Piso 2",
      "Piso 3",
      "Piso 4",
      "Piso 5",
      "Piso 6",
      "Piso 7",
      "Piso 8",
    ],
    status: { operational: 82, maintenance: 10, outOfService: 8 },
  },
  {
    id: "2",
    lotCode: "LOTE-0452",
    equipment: {
      name: "Ventilador Mecánico",
      brand: "Dräger",
      model: "Evita V300",
      priority: "Alto",
    },
    supplier: "Dräger Medical S.A.C.",
    quantity: 24,
    locations: ["Piso 2", "Piso 3", "Piso 4", "Piso 5"],
    status: { operational: 22, maintenance: 2, outOfService: 0 },
  },
  {
    id: "3",
    lotCode: "LOTE-0389",
    equipment: {
      name: "Bomba de Infusión Volumétrica",
      brand: "B. Braun",
      model: "Infusomat Space",
      priority: "Medio",
    },
    supplier: "Distribuidora Hospimed, S.A.",
    quantity: 60,
    locations: [
      "Piso 1",
      "Piso 2",
      "Piso 3",
      "Piso 4",
      "Piso 5",
      "Piso 6",
      "Piso 7",
      "Piso 8",
    ],
    status: { operational: 54, maintenance: 6, outOfService: 0 },
  },
  {
    id: "4",
    lotCode: "LOTE-0210",
    equipment: {
      name: "Electrobisturí",
      brand: "Valleylab",
      model: "Force FX",
      priority: "Alto",
    },
    supplier: "Cormay S.A. de C.V.",
    quantity: 12,
    locations: ["Piso 5", "Piso 6"],
    status: { operational: 10, maintenance: 1, outOfService: 1 },
  },
  {
    id: "5",
    lotCode: "LOTE-0177",
    equipment: {
      name: "Desfibrilador",
      brand: "Philips",
      model: "HeartStart XL",
      priority: "Alto",
    },
    supplier: "Philips Salud Centroamérica",
    quantity: 16,
    locations: [
      "Planta Baja",
      "Piso 1",
      "Piso 2",
      "Piso 3",
      "Piso 4",
      "Piso 5",
      "Piso 6",
      "Piso 7",
      "Piso 8",
      "Piso 9",
      "Piso 10",
      "Piso 11",
      "Piso 12",
      "Piso 13",
      "Piso 14",
      "Piso 15",
    ],
    status: { operational: 13, maintenance: 2, outOfService: 1 },
  },
  {
    id: "6",
    lotCode: "LOTE-0322",
    equipment: {
      name: "Incubadora Neonatal",
      brand: "Dräger",
      model: "Caleo",
      priority: "Alto",
    },
    supplier: "Dräger Medical S.A.C.",
    quantity: 8,
    locations: ["Piso 12"],
    status: { operational: 7, maintenance: 1, outOfService: 0 },
  },
  {
    id: "7",
    lotCode: "LOTE-0098",
    equipment: {
      name: "Rayos X Portátil",
      brand: "GE",
      model: "Optima XR220amx",
      priority: "Medio",
    },
    supplier: "GE Healthcare LATAM",
    quantity: 4,
    locations: ["Planta Baja", "Piso 1", "Piso 2"],
    status: { operational: 3, maintenance: 0, outOfService: 1 },
  },
  {
    id: "8",
    lotCode: "LOTE-0520",
    equipment: {
      name: "Máquina de Anestesia",
      brand: "Dräger",
      model: "Perseus A500",
      priority: "Alto",
    },
    supplier: "Dräger Medical S.A.C.",
    quantity: 10,
    locations: ["Quirófano 1", "Quirófano 2", "Quirófano 3"],
    status: { operational: 8, maintenance: 1, outOfService: 1 },
  },
  {
    id: "9",
    lotCode: "LOTE-0264",
    equipment: {
      name: "Cama Hospitalaria Eléctrica",
      brand: "Hillrom",
      model: "Centrella",
      priority: "Bajo",
    },
    supplier: "Meditek Panamá",
    quantity: 40,
    locations: ["Piso 3", "Piso 4", "Piso 5", "Piso 6"],
    status: { operational: 36, maintenance: 3, outOfService: 1 },
  },
  {
    id: "10",
    lotCode: "LOTE-0613",
    equipment: {
      name: "Aspirador de Secreciones",
      brand: "Medela",
      model: "Vario 18",
      priority: "Medio",
    },
    supplier: "Distribuidora Hospimed, S.A.",
    quantity: 20,
    locations: ["Urgencias", "UCI", "Hospitalización"],
    status: { operational: 17, maintenance: 2, outOfService: 1 },
  },
];
