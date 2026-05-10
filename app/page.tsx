"use client";

import { useEffect, useState } from "react";

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
  const [auditData, setAuditData] = useState<
    AuditItem[]
  >([]);

  useEffect(() => {
    const savedData = localStorage.getItem(
      "credex-audits"
    );

    if (savedData) {
      setAuditData(JSON.parse(savedData));
    }
  }, []);

  const addAudit = (newAudit: AuditItem) => {
    const updatedData = [...auditData, newAudit];

    setAuditData(updatedData);

    localStorage.setItem(
      "credex-audits",
      JSON.stringify(updatedData)
    );
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto p-6">
        <SummaryCards auditData={auditData} />

        <div className="mt-8">
          <AuditForm addAudit={addAudit} />
        </div>

        <div className="mt-8">
          <SpendChart auditData={auditData} />
        </div>

        <div className="mt-8">
          <Recommendations auditData={auditData} />
        </div>

        <div className="mt-8">
          <AuditHistory auditData={auditData} />
        </div>
      </div>

      <Footer />
    </main>
  );
}