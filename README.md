# Credex AI Spend Audit

AI-powered SaaS spend optimization platform built with Next.js, TypeScript, Tailwind CSS, Recharts, Vitest, and GitHub Actions.

The platform helps startups analyze AI tooling expenses, identify overspending, and discover optimization opportunities across products like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and Windsurf.

---

# Live Demo

Deployment:
https://credex-ai-spend-audit-eosin.vercel.app/

GitHub Repository:
https://github.com/shaiksabihasabiha26/credex-ai-spend-audit

---

# Features

- AI spend audit dashboard
- SaaS pricing optimization engine
- Savings calculations
- Personalized AI summaries
- Persistent audit storage
- Interactive charts and analytics
- GitHub Actions CI
- Automated testing with Vitest
- Responsive modern UI

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Vitest
- GitHub Actions
- Vercel

---

## Screenshots

### Dashboard

![Dashboard](./public/dashboard.png)

### Analytics

![Analytics](./public/analytics.png)

### Audit History

![History](./public/history.png)

# Quick Start

## Clone Repository

```bash
git clone https://github.com/shaiksabihasabiha26/credex-ai-spend-audit.git
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Run Tests

```bash
npm run test
```

---

# Decisions & Tradeoffs

## 1. Deterministic Audit Logic
I intentionally used hardcoded business rules instead of AI-generated financial reasoning for reliability and explainability.

## 2. localStorage Persistence
localStorage was chosen initially to reduce backend complexity while building the MVP quickly.

## 3. Next.js Selection
Next.js provided fast deployment, routing, and strong developer experience for shipping rapidly.

## 4. Lightweight Analytics
Recharts was selected to keep dashboard performance lightweight while still providing useful visualizations.

## 5. AI Limited To Summaries
AI is used only for personalized summaries, not core pricing calculations, to improve trust and consistency.

---

# Future Improvements

- Database persistence
- Authentication
- Benchmark analytics
- PDF export
- Open Graph previews
- Shareable public audit pages
- Email delivery
- Team dashboards

---

# CI & Testing

GitHub Actions automatically runs:
- linting
- Vitest unit tests

on every push to main.

---

# Author

Shaik Sabiha