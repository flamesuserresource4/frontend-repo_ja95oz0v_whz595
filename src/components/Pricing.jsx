export default function Pricing({ onBook }) {
  const plans = [
    {
      name: "Starter Session",
      price: "$149",
      desc: "One 60-min call to assess goals, build a plan, and answer key questions.",
      features: ["Goal mapping", "Portfolio snapshot", "Action checklist"],
    },
    {
      name: "Core Coaching",
      price: "$399",
      badge: "Most Popular",
      desc: "Four 60-min 1:1 sessions with accountability and clear frameworks.",
      features: ["4x live calls", "Risk & entries", "Portfolio structure", "Q&A support"],
    },
    {
      name: "Pro Mentorship",
      price: "$899",
      desc: "Ten 1:1 sessions, deep-dive playbooks, and ongoing review.",
      features: ["10x live calls", "Strategy design", "Performance review", "DM support"],
    },
  ];

  return (
    <div id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Transparent Pricing</h2>
          <p className="mt-3 text-slate-600">Clear value, no surprises. Choose the support that matches your goals.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              {p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 text-white text-xs px-3 py-1 shadow">{p.badge}</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{p.price}</p>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => onBook(p.name)} className="mt-6 w-full rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 font-medium shadow hover:opacity-95 transition">
                Book {p.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-slate-500">
          Secure payments via Stripe, PayPal, and major cards.
        </div>
      </div>
    </div>
  );
}
