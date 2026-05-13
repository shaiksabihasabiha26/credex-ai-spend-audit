"use client";

import { useState } from "react";
import { exportAuditToPDF } from "@/lib/pdfExport";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import AuditForm from "@/components/AuditForm";
import SummaryCards from "@/components/SummaryCards";
import SpendChart from "@/components/SpendChart";
import Recommendations from "@/components/Recommendations";
import AuditHistory from "@/components/AuditHistory";

type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

export default function Home() {
  // ✅ CI-safe: no useEffect, no setState inside effect
  const [auditData, setAuditData] = useState<AuditItem[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const savedData = localStorage.getItem("credex-audits");
      return savedData ? JSON.parse(savedData) : [];
    } catch (err) {
      console.error("Failed to parse localStorage data:", err);
      return [];
    }
  });

  const addAudit = (newAudit: AuditItem) => {
    const updatedData = [...auditData, newAudit];

    setAuditData(updatedData);

    try {
      localStorage.setItem("credex-audits", JSON.stringify(updatedData));
    } catch (err) {
      console.error("Failed to save audit data:", err);
    }
  };

  const totalSpend = auditData.reduce(
    (acc, item) => acc + (Number(item.monthlySpend) || 0),
    0
  );

  const totalTools = auditData.length;

  const uniqueCompanies = new Set(
    auditData.map((item) => item.company)
  ).size;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Navbar />
      <Hero />

      <div id="audit-report" className="max-w-6xl mx-auto px-4 py-8">
        {/* SUMMARY */}
        <SummaryCards auditData={auditData} />

        {/* FORM */}
        <div className="mt-8">
          <AuditForm addAudit={addAudit} />
        </div>

        {/* PDF BUTTON */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => exportAuditToPDF("audit-report")}
            className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            Download PDF Report
          </button>
        </div>

        {/* CHART + RECOMMENDATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <SpendChart auditData={auditData} />

          <Recommendations
            spend={totalSpend}
            employees={uniqueCompanies}
            tools={totalTools}
          />
        </div>

        {/* HISTORY */}
        <div className="mt-8">
          <AuditHistory auditData={auditData} />
        </div>
      </div>

      <Footer />
    </main>
  );
}