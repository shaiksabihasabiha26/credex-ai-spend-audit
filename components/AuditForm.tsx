"use client";

import { useState } from "react";

export default function AuditForm({
  addAudit,
}: {
  addAudit: (audit: {
    company: string;
    tool: string;
    monthlySpend: string;
  }) => void;
}) {
  const [company, setCompany] = useState("");
  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    addAudit({
      company,
      tool,
      monthlySpend,
    });

    setCompany("");
    setTool("");
    setMonthlySpend("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        AI Spend Audit
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          placeholder="AI Tool"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          placeholder="Monthly Spend"
          value={monthlySpend}
          onChange={(e) =>
            setMonthlySpend(e.target.value)
          }
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
className="bg-black text-white px-5 py-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300"
        >
          Submit Audit
        </button>
      </form>
    </div>
  );
}