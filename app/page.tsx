export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Credex AI Spend Audit
        </h1>

        <p className="text-slate-400 text-lg">
          Optimize your AI spending intelligently.
        </p>

        <button className="mt-6 px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-400 transition">
          Start Audit
        </button>
      </div>
    </main>
  );
}