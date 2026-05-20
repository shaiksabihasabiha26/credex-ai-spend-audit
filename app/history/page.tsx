"use client";

import { useEffect, useState } from "react";

type AuditHistoryItem = {
  tool: string;
  oldPrice: string;
  newPrice: string;
  percentChange: string;
  recommendation: string;
  previousRecommendation: string;
  timestamp: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<AuditHistoryItem[]>([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("auditHistory") || "[]");

    setHistory(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Audit History
        </h1>

        {history.length === 0 ? (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            No audit history yet.
          </div>
        ) : (
          <div className="space-y-6">
            {history.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <h2 className="text-xl font-bold mb-4">
                  {item.tool}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">
                      Old Price
                    </p>

                    <p className="font-semibold">
                      ₹{item.oldPrice}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">
                      New Price
                    </p>

                    <p className="font-semibold">
                      ₹{item.newPrice}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">
                      Price Change
                    </p>

                    <p className="font-semibold text-red-600">
                      {item.percentChange}%
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">
                      Updated At
                    </p>

                    <p className="font-semibold">
                      {new Date(
                        item.timestamp
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border rounded-xl p-4 bg-gray-50">
                  <h3 className="font-bold mb-4">
                    Recommendation Diff
                  </h3>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500">
                      Before Re-Audit
                    </p>

                    <p className="font-semibold">
                      {item.previousRecommendation}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      After Re-Audit
                    </p>

                    <p className="font-semibold text-red-600">
                      {item.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                  <p className="font-semibold text-yellow-800">
                    AI Audit Insight
                  </p>

                  <p className="text-sm text-yellow-700 mt-1">
                    Pricing changes triggered a fresh audit
                    recommendation based on increased vendor cost.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}