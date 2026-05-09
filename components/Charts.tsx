"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Marketing", value: 400 },
  { name: "Engineering", value: 300 },
  { name: "HR", value: 200 },
  { name: "Sales", value: 250 },
];

const COLORS = ["#06b6d4", "#3b82f6", "#8b5cf6", "#14b8a6"];

export default function Charts() {

  return (
    <div className="bg-slate-900 p-8 rounded-3xl mt-10">

      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Spend Distribution
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >

              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}