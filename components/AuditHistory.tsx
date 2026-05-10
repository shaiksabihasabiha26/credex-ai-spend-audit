type AuditItem = {
  company: string;
  tool: string;
  monthlySpend: string;
};

export default function AuditHistory({
  auditData,
}: {
  auditData: AuditItem[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Previous Audits
      </h2>

      {auditData.length === 0 ? (
        <p>No audits submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {auditData.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg"
            >
              <p>
                <strong>Company:</strong> {item.company}
              </p>

              <p>
                <strong>Tool:</strong> {item.tool}
              </p>

              <p>
                <strong>Monthly Spend:</strong> ₹
                {item.monthlySpend}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}