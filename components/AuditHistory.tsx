"use client";

import { useEffect, useState } from "react";

type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

type Props = {
  auditData: AuditItem[];
};

export default function AuditHistory({
  auditData,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Audit History
      </h2>

      {auditData.length === 0 ? (
        <p className="text-gray-500">
          No audits submitted yet.
        </p>
      ) : (
        <div className="space-y-4">
          {auditData.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4"
            >
              <h3 className="font-semibold text-lg">
                {item.company}
              </h3>

              <p className="text-gray-600">
                Tool: {item.tool}
              </p>

              <p className="text-gray-600">
                Monthly Spend: ₹{item.monthlySpend}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}