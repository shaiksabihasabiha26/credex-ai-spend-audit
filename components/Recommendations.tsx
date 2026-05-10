type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

export default function Recommendations({
  auditData,
}: {
  auditData: AuditItem[];
}) {
  const totalSpend = auditData.reduce(
    (acc, item) => acc + Number(item.monthlySpend),
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        AI Recommendations
      </h2>

      <ul className="space-y-3 list-disc pl-5">
        <li>Remove unused AI subscriptions</li>

        <li>Reduce overlapping AI tools</li>

        <li>Monitor inactive team members</li>

        {totalSpend > 10000 && (
          <li>
            High spending detected — optimize enterprise plans.
          </li>
        )}
      </ul>
    </div>
  );
}