export interface ProviderCompliance {
  id: string;
  provider: string;
  compliancePercentage: number;
}

export const providerCompliance: ProviderCompliance[] = [
  {
    id: "PROV-001",
    provider: "Mindray",
    compliancePercentage: 92,
  },
  {
    id: "PROV-002",
    provider: "Dräger",
    compliancePercentage: 74,
  },
  {
    id: "PROV-003",
    provider: "GE Healthcare",
    compliancePercentage: 65,
  },
  {
    id: "PROV-004",
    provider: "B. Braun",
    compliancePercentage: 88,
  },
  {
    id: "PROV-005",
    provider: "Philips",
    compliancePercentage: 80,
  },
];
