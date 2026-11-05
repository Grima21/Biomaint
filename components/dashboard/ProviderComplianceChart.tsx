"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  providerCompliance,
  ProviderCompliance,
} from "@/lib/dashboard/mockChartData";

export default function ProviderComplianceChart() {
  return (
    <div className="w-full min-w-0 rounded-lg border border-border bg-card text-card-foreground shadow-lg lg:col-span-3 p-density-lg">
      <div className="flex flex-col space-y-density-xs pb-density-xl">
        <h3 className="font-semibold tracking-tight text-base">
          % de Atención Por Proveedor
        </h3>
        <p className="text-sm text-muted-foreground ">
          Cumplimiendo de SLA de proveedores contratados
        </p>
      </div>
      <div className="h-[260px] w-full min-w-0 sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={providerCompliance}
            margin={{ top: 10, right: 15, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="provider" tick={{ fontSize: 12 }} />

            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip formatter={(value) => [`${value}%`, "Cumplimiento"]} />

            <Bar
              dataKey="compliancePercentage"
              barSize={120}
              radius={[4, 4, 0, 0]}
            >
              {providerCompliance.map((entry, index) => {
                const colors = ["#0950c3", "#f6930b", "#c52020", "#10B981"];
                return (
                  <Cell
                    key={entry.provider}
                    fill={colors[index % colors.length]}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
