"use client";

import { useEffect, useState } from "react";

type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

export default function SummaryCards({
  auditData,
}: {
  auditData: AuditItem[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const totalSpend = auditData.reduce(
    (acc, item) => acc + Number(item.monthlySpend || 0),
    0
  );

  const estimatedWaste = Math.floor(totalSpend * 0.2);

  const savings = Math.floor(totalSpend * 0.1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-gray-500">Total Spend</h3>
        <p className="text-2xl font-bold">
          ₹{totalSpend}
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-gray-500">Estimated Waste</h3>
        <p className="text-2xl font-bold">
          ₹{estimatedWaste}
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-gray-500">Potential Savings</h3>
        <p className="text-2xl font-bold">
          ₹{savings}
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-gray-500">Tools Audited</h3>
        <p className="text-2xl font-bold">
          {auditData.length}
        </p>
      </div>
    </div>
  );
}