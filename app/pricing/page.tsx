"use client";

import { useState } from "react";

export default function PricingPage() {
  const [tool, setTool] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleReaudit = () => {
    const priceDifference =
      Number(newPrice) - Number(oldPrice);

    const percent =
      ((priceDifference / Number(oldPrice)) * 100).toFixed(1);

    let recommendation = "Keep current plan";

    if (Number(newPrice) > Number(oldPrice)) {
      recommendation =
        "Consider switching to a cheaper alternative";
    }

    if (Number(newPrice) >= Number(oldPrice) * 1.5) {
      recommendation =
        "High pricing increase detected — re-evaluate vendor";
    }

    const auditResult = {
      tool,
      oldPrice,
      newPrice,
      percentChange: percent,
      recommendation,
      previousRecommendation: "Keep current vendor",
      timestamp: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("auditHistory") || "[]");

    existing.unshift(auditResult);

    localStorage.setItem(
      "auditHistory",
      JSON.stringify(existing)
    );

    setMessage("Re-audit completed successfully!");

    setTool("");
    setOldPrice("");
    setNewPrice("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">
          Re-Audit Pricing Change
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tool Name"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <input
            type="number"
            placeholder="Old Price"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <input
            type="number"
            placeholder="New Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="border p-3 rounded-xl"
          />

          <button
            onClick={handleReaudit}
            className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition"
          >
            Run Re-Audit
          </button>

          {message && (
            <div className="bg-green-100 text-green-700 p-3 rounded-xl">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}