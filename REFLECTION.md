# Reflection

## 1. The hardest bug I hit this week, and how I debugged it

The hardest bug I encountered was related to GitHub Actions CI failing because of React state initialization logic inside a useEffect hook. The workflow passed locally, but GitHub Actions consistently failed during linting with a React hooks rule error.

Initially, I assumed the issue was related to Vitest or the CI workflow configuration itself. I checked the workflow YAML multiple times and reran tests locally, but the problem persisted only in CI. I then inspected the GitHub Actions logs carefully and noticed the specific lint rule complaining about synchronous setState calls inside useEffect.

The problematic code loaded localStorage data inside useEffect and immediately called setAuditData. React’s lint rules considered this an anti-pattern because it can trigger cascading renders.

To fix it, I removed the useEffect entirely and initialized the state directly inside useState using a lazy initialization function. After removing the unnecessary useEffect import and rerunning lint/tests locally, the GitHub Actions workflow finally passed successfully.

This bug taught me the importance of carefully reading CI logs instead of assuming infrastructure issues immediately.

---

## 2. A decision I reversed mid-week, and what made me reverse it

Initially, I planned to use AI-generated reasoning for the audit engine itself. My first idea was to send user spending data into an LLM and generate optimization recommendations dynamically.

After experimenting with this approach, I realized the outputs were inconsistent and difficult to trust financially. The same input could generate slightly different recommendations, which is dangerous for a pricing optimization product. It also became difficult to explain why a recommendation was generated.

I reversed the decision and moved to deterministic business rules instead. Hardcoded logic made the calculations reproducible, transparent, and easier to debug. AI was then limited only to personalized summary generation rather than core financial calculations.

This ended up being a much stronger architectural decision because the product became more explainable and stable.

---

## 3. What I would build in week 2 if I had more time

If I had another week, I would focus primarily on making the product feel closer to a real SaaS platform.

The first improvement would be backend persistence using Supabase or PostgreSQL instead of localStorage. I would also implement authentication and organization-level dashboards so teams could track audits historically.

Another major improvement would be benchmark analytics. Users could compare their AI spend against similar startups by team size or use case. This would make the recommendations feel much more actionable.

I would also add:
- PDF export functionality
- Open Graph share previews
- email report delivery
- AI-powered benchmark insights
- usage forecasting
- onboarding flows
- referral systems

Finally, I would improve the audit engine itself with more nuanced pricing logic and real API-based pricing synchronization.

---

## 4. How I used AI tools during development

I used ChatGPT heavily throughout the assignment for debugging, brainstorming architecture ideas, improving UI polish, and accelerating repetitive coding tasks.

I specifically used AI for:
- React debugging
- TypeScript fixes
- improving recommendation copy
- CI troubleshooting
- markdown documentation structure
- generating starter component structures

However, I intentionally avoided trusting AI with financial optimization logic. I found that AI-generated pricing recommendations were often inconsistent or not defensible enough for a financial audit product.

One specific case where AI was wrong involved localStorage initialization using useEffect. The suggested implementation triggered React lint errors in CI even though it appeared to work locally. I had to manually inspect the React hooks rules and redesign the implementation using lazy state initialization.

That experience reinforced that AI is most useful as an accelerator, not a replacement for engineering judgment.

---

## 5. Self-rating

### Discipline — 8/10
I maintained steady progress across multiple days and continuously improved the project instead of building everything at the last minute.

### Code Quality — 7/10
The project structure is reasonably clean and maintainable, though backend architecture could be improved further.

### Design Sense — 8/10
I focused heavily on dashboard clarity, responsiveness, and making the audit results visually understandable.

### Problem Solving — 8/10
I resolved multiple CI, Git, and React issues while improving the audit engine logic iteratively.

### Entrepreneurial Thinking — 7/10
I approached the assignment as a real SaaS lead-generation product rather than only a frontend coding task.