"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

type Props = {
  auditData: AuditItem[];
};

export default function SpendChart({
  auditData,
}: Props) {
  const chartData = auditData.map((item) => ({
    name: item.tool,
    spend: Number(item.monthlySpend),
  }));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-[420px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          SaaS Spend Analytics
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Monthly spending insights across tools
        </p>
      </div>

      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-[250px] text-gray-400">
          No analytics data available yet.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="spend"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}