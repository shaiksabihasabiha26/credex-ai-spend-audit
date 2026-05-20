"use client";

import { useEffect, useState } from "react";

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

export default function SpendChart({ auditData }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const chartData = auditData.map((item) => ({
    name: item.tool,
    spend: Number(item.monthlySpend) || 0,
  }));

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 h-[420px]"
      style={{ backgroundColor: "#ffffff" }}
    >
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
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="spend"
                fill="#000000"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}