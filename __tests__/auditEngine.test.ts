import { describe, it, expect } from "vitest";
import { runAudit } from "../lib/auditEngine";

describe("Audit Engine", () => {
  it("detects overspending for small teams", () => {
    const result = runAudit([
      {
        tool: "Cursor",
        plan: "Business",
        seats: 2,
        monthlySpend: 100,
      },
    ]);

    expect(result[0].monthlySavings).toBeGreaterThan(0);
  });

  it("optimizes ChatGPT plan", () => {
    const result = runAudit([
      {
        tool: "ChatGPT",
        plan: "Team",
        seats: 1,
        monthlySpend: 60,
      },
    ]);

    expect(result[0].recommendedPlan).toBe("ChatGPT Plus");
  });

  it("calculates annual savings", () => {
    const result = runAudit([
      {
        tool: "Claude",
        plan: "Enterprise",
        seats: 3,
        monthlySpend: 200,
      },
    ]);

    expect(result[0].annualSavings).toBeGreaterThan(0);
  });

  it("returns proper tool name", () => {
    const result = runAudit([
      {
        tool: "Gemini",
        plan: "Ultra",
        seats: 2,
        monthlySpend: 80,
      },
    ]);

    expect(result[0].tool).toBe("Gemini");
  });

  it("keeps optimized spend lower", () => {
    const result = runAudit([
      {
        tool: "Claude",
        plan: "Max",
        seats: 1,
        monthlySpend: 120,
      },
    ]);

    expect(result[0].optimizedSpend).toBeLessThan(
      result[0].currentSpend
    );
  });
});