export interface UserProfile {
  name: string;
  role: string;
  initials: string;
}

export interface OrganizationSettings {
  name: string;
  city: string;
  country: string;
  registeredEquipment: number;
  supportContract: "Vigente" | "Vencido" | "Pendiente";
}

export const userProfile: UserProfile = {
  name: "Ing. Daniel Torres",
  role: "Ing. Biomédico",
  initials: "DT",
};

export interface OrganizationDetail {
  id: string;
  label: string;
  value: string | number;
}

export interface NotificationOption {
  id: string;
  label: string;
  enabled: boolean;
}

export const organizationSettings: OrganizationDetail[] = [
  {
    id: "site",
    label: "Sede",
    value: "Hospital Santo Tomas",
  },
  {
    id: "city",
    label: "Ciudad",
    value: "Panamá",
  },
  {
    id: "equipment",
    label: "Equipos registrados",
    value: 448,
  },
  {
    id: "contract",
    label: "Contrato de soporte",
    value: "Vigente",
  },
];

export const notificationOptions: NotificationOption[] = [
  {
    id: "calibration",
    label: "Alertas de calibración vencida",
    enabled: true,
  },
  {
    id: "critical-orders",
    label: "Órdenes de trabajo críticas",
    enabled: true,
  },
  {
    id: "weekly-reports",
    label: "Reportes semanales por correo",
    enabled: false,
  },
];

export const notificationEmail = "daniel.torres@biomaint.org";
