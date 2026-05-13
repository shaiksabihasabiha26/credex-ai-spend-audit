"use client";
import jsPDF from "jspdf";

export const exportAuditToPDF = (elementId: string) => {
  try {
    const element = document.getElementById(elementId);

    if (!element) {
      console.error("PDF ERROR: element not found");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFont("helvetica");
    pdf.setFontSize(12);

    let y = 10;

    const text = element.innerText;

    const lines = pdf.splitTextToSize(text, 180);

    lines.forEach((line: string) => {
      if (y > 280) {
        pdf.addPage();
        y = 10;
      }
      pdf.text(line, 10, y);
      y += 7;
    });

    pdf.save("credex-audit-report.pdf");
  } catch (err) {
    console.error("PDF FAILED:", err);
  }
};