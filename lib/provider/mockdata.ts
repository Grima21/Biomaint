export interface Provider {
  id: string;
  name: string;
  specialty: string;
  contractCount: string;
  slaCompliance: number;
  email: string;
  contractStatus: "Vigente" | "Vencido" | "Pendiente";
}

export const providers: Provider[] = [
  {
    id: "PROV-001",
    name: "Mindray Service",
    specialty: "Monitoreo de Signos Vitales",
    contractCount: "4 Contratos",
    slaCompliance: 92,
    email: "soporte@mindray.com",
    contractStatus: "Vigente",
  },
  {
    id: "PROV-002",
    name: "Drager Colombia",
    specialty: "Ventilación y Anestesia",
    contractCount: "3 Contratos",
    slaCompliance: 74,
    email: "contacto@drager.co",
    contractStatus: "Vigente",
  },
  {
    id: "PROV-003",
    name: "GE Healthcare",
    specialty: "Imagenología",
    contractCount: "2 Contratos",
    slaCompliance: 65,
    email: "service@ge.com",
    contractStatus: "Vigente",
  },
  {
    id: "PROV-004",
    name: "B. Braun Support",
    specialty: "Terapia de Infusión",
    contractCount: "5 Contratos",
    slaCompliance: 88,
    email: "support@bbraun.com",
    contractStatus: "Vigente",
  },
  {
    id: "PROV-005",
    name: "Philips CareSite",
    specialty: "Desfibrilación",
    contractCount: "2 Contratos",
    slaCompliance: 80,
    email: "caresite@philips.com",
    contractStatus: "Vigente",
  },
];
