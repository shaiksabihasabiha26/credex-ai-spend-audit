"use client";

import { useState } from "react";

export default function AuditForm() {

  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [seats, setSeats] = useState("");

  const [result, setResult] = useState("");

  const handleAudit = () => {

    const spend = Number(monthlySpend);

    if (spend > 100) {
      setResult(
        `You could save approximately $${Math.floor(
          spend * 0.3
        )} per month by optimizing unused AI subscriptions.`
      );
    } else {
      setResult(
        "Your current AI spending appears reasonably optimized."
      );
    }
  };

  return (
    <section className="bg-slate-950 text-white py-20 px-6">

      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl">

        <h2 className="text-4xl font-bold mb-8">
          AI Spend Audit
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Tool Name"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="number"
            placeholder="Number of Seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button
            onClick={handleAudit}
            className="w-full bg-cyan-500 py-4 rounded-xl hover:bg-cyan-400 transition"
          >
            Analyze Spending
          </button>

          {result && (
            <div className="bg-slate-800 p-6 rounded-2xl mt-6">
              <h3 className="text-2xl font-bold mb-3">
                Audit Result
              </h3>

              <p className="text-slate-300">
                {result}
              </p>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}