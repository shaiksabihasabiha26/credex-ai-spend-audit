export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold leading-tight">
          Audit Your AI Spending
        </h1>

        <p className="mt-6 text-slate-400 text-lg">
          Discover wasted AI subscriptions and optimize team costs.
        </p>

        <button className="mt-8 bg-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-400 transition">
          Start Free Audit
        </button>
      </div>
    </section>
  );
}