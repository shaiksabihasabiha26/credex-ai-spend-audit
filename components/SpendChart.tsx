"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

export default function SpendChart({
  auditData,
}: {
  auditData: AuditItem[];
}) {
  const chartData = auditData.map((item) => ({
    name: item.tool,
    value: Number(item.monthlySpend),
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Spend Distribution
      </h2>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={120}
              fill="#000"
              label
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}