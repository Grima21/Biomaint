import KpisCard from "@/components/dashboard/KpisCard";
import Calibration from "@/components/dashboard/Calibration";
import ProviderComplianceChart from "@/components/dashboard/ProviderComplianceChart";

export default function DashboardPage() {
  return (
    <div>
      <div className="p-density-lg">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Resumen general de mantenimiento biomédico
        </p>
      </div>
      <KpisCard />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-density-lg p-density-lg md:p-density-lg ">
        <Calibration />
        <ProviderComplianceChart />
      </div>
    </div>
  );
}
