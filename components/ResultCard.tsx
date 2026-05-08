export default function ResultCard() {
  return (
    <section className="bg-slate-950 text-white px-6 pb-20">
      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl">

        <h2 className="text-4xl font-bold mb-6">
          Audit Results
        </h2>

        <div className="space-y-4 text-slate-300">

          <p>
            Current Monthly Spend: $120
          </p>

          <p>
            Estimated Savings: $40/month
          </p>

          <p>
            Recommendation: Switch to lower-tier plans for smaller teams.
          </p>

        </div>

      </div>
    </section>
  );
}