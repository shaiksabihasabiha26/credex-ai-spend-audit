type Props = {
  spend: number;
  employees: number;
  tools: number;
};

export default function Recommendations({
  spend,
  employees,
  tools,
}: Props) {
  const recommendations: string[] = [];

  if (spend > 100000) {
    recommendations.push(
      "High operational spend detected. Consider vendor consolidation to reduce unnecessary costs."
    );
  }

  if (employees < 10 && spend > 50000) {
    recommendations.push(
      "Current spend appears high for the reported team size. Possible overprovisioning detected."
    );
  }

  if (tools > 15) {
    recommendations.push(
      "Large number of SaaS tools detected. Audit inactive subscriptions and overlapping platforms."
    );
  }

  if (spend < 20000) {
    recommendations.push(
      "Infrastructure spending is currently optimized for company scale."
    );
  }

  if (recommendations.length === 0) {
    recommendations.push(
      "No major spending risks detected. Budget allocation appears healthy."
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        AI Recommendations
      </h2>

      <div className="space-y-3">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}