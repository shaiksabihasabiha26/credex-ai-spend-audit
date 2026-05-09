"use client";

import { useEffect, useState } from "react";

export default function AuditForm() {

  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [seats, setSeats] = useState("");

  const [result, setResult] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  // LOAD SAVED DATA
  useEffect(() => {
    const savedTool = localStorage.getItem("tool");
    const savedSpend = localStorage.getItem("monthlySpend");
    const savedSeats = localStorage.getItem("seats");

    if (savedTool) setTool(savedTool);
    if (savedSpend) setMonthlySpend(savedSpend);
    if (savedSeats) setSeats(savedSeats);
  }, []);

  // AUTO SAVE DATA
  useEffect(() => {
    localStorage.setItem("tool", tool);
    localStorage.setItem("monthlySpend", monthlySpend);
    localStorage.setItem("seats", seats);
  }, [tool, monthlySpend, seats]);

  // ANALYZE SPENDING
  const handleAudit = () => {

    const spend = Number(monthlySpend);
    const totalSeats = Number(seats);

    if (spend > 500) {

      setRiskLevel("High Risk");

      setResult(
        `Your company may be overspending on ${tool}. 
Estimated savings: $${Math.floor(
          spend * 0.3
        )} per month by reducing unused licenses and consolidating subscriptions.`
      );

    } else if (spend > 200) {

      setRiskLevel("Medium Risk");

      setResult(
        `Your ${tool} spending is moderate. 
A review of inactive users and duplicate tools is recommended.`
      );

    } else {

      setRiskLevel("Low Risk");

      setResult(
        `Your current AI spending appears reasonably optimized for ${totalSeats} seats.`
      );
    }
  };

  // RESET FORM
  const handleReset = () => {

    setTool("");
    setMonthlySpend("");
    setSeats("");
    setResult("");
    setRiskLevel("");

    localStorage.removeItem("tool");
    localStorage.removeItem("monthlySpend");
    localStorage.removeItem("seats");
  };

  return (
    <section className="bg-slate-950 text-white py-20 px-6">

      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl shadow-2xl">

        <h2 className="text-4xl font-bold mb-8 text-center">
          AI Spend Audit
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Tool Name"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="number"
            placeholder="Number of Seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <button
            onClick={handleAudit}
            className="w-full bg-cyan-500 py-4 rounded-xl hover:bg-cyan-400 transition font-semibold"
          >
            Analyze Spending
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-red-500 py-4 rounded-xl hover:bg-red-400 transition font-semibold"
          >
            Reset Audit
          </button>

          {result && (
            <div className="bg-slate-800 p-6 rounded-2xl mt-6 border border-cyan-500">

              <h3 className="text-2xl font-bold mb-4">
                AI Audit Summary
              </h3>

              <div className="mb-4">
                <span className="font-semibold">
                  Risk Level:
                </span>{" "}
                <span className="text-cyan-400">
                  {riskLevel}
                </span>
              </div>

              <p className="text-slate-300 leading-7">
                {result}
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}