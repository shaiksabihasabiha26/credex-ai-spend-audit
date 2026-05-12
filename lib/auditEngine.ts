type AuditInput = {
  tool: string;
  plan: string;
  seats: number;
  monthlySpend: number;
};

export type AuditResult = {
  tool: string;
  currentSpend: number;
  recommendedPlan: string;
  optimizedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  reason: string;
};

export function runAudit(audits: AuditInput[]): AuditResult[] {
  return audits.map((audit) => {
    let optimizedSpend = audit.monthlySpend;
    let recommendedPlan = audit.plan;
    let reason = "Current plan is appropriate.";

    if (audit.seats <= 2 && audit.monthlySpend > 50) {
      optimizedSpend = audit.monthlySpend * 0.6;
      recommendedPlan = "Lower Tier Plan";

      reason =
        "Small teams are often overspending on enterprise-grade AI subscriptions.";
    }

    if (audit.tool === "ChatGPT" && audit.seats === 1) {
      optimizedSpend = 20;

      recommendedPlan = "ChatGPT Plus";

      reason =
        "Single-user teams usually benefit more from ChatGPT Plus instead of Team plans.";
    }

    if (audit.tool === "Claude" && audit.monthlySpend > 100) {
      optimizedSpend = audit.monthlySpend * 0.7;

      recommendedPlan = "Claude Team";

      reason =
        "Claude Team plans typically provide better cost efficiency for medium usage.";
    }

    const monthlySavings = audit.monthlySpend - optimizedSpend;

    return {
      tool: audit.tool,
      currentSpend: audit.monthlySpend,
      recommendedPlan,
      optimizedSpend,
      monthlySavings,
      annualSavings: monthlySavings * 12,
      reason,
    };
  });
}