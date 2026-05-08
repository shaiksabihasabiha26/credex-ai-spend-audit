export default function AuditForm() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl">

        <h2 className="text-4xl font-bold mb-8">
          AI Spend Audit
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Tool Name"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="number"
            placeholder="Monthly Spend ($)"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="number"
            placeholder="Number of Seats"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button className="w-full bg-cyan-500 py-4 rounded-xl hover:bg-cyan-400 transition">
            Analyze Spending
          </button>

        </div>

      </div>
    </section>
  );
}