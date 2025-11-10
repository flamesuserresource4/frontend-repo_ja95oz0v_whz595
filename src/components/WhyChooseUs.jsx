export default function WhyChooseUs() {
  const items = [
    {
      title: "Personalized Guidance",
      desc: "1-on-1 coaching tailored to your goals, risk tolerance, and experience.",
    },
    {
      title: "Proven Frameworks",
      desc: "Step-by-step systems for research, entries, risk, and portfolio management.",
    },
    {
      title: "Clarity Without Hype",
      desc: "We teach discipline and decision-making — not moonshots and noise.",
    },
    {
      title: "Beginner-Friendly",
      desc: "We start where you are and build confidence through reps and feedback.",
    },
  ];

  return (
    <div id="why" className="relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Why Choose InvestMastery</h2>
          <p className="mt-3 text-slate-600">A coaching experience built for real learning and real results.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
