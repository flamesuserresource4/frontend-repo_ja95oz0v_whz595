export default function Testimonials() {
  const items = [
    {
      quote: "I went from confused to confident in 6 weeks. Finally understand risk!",
      name: "Maya S.",
      tag: "Beginner Investor",
    },
    {
      quote: "Clear frameworks. I stopped chasing hype and built a real plan.",
      name: "David R.",
      tag: "Engineer & Trader",
    },
    {
      quote: "The 1:1 calls gave me accountability and structure — huge difference.",
      name: "Priya K.",
      tag: "Product Manager",
    },
  ];

  return (
    <div id="testimonials" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Real Students. Real Progress.</h2>
          <p className="mt-3 text-slate-600">Stories from learners who chose discipline over hype.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-medium text-slate-800">{t.name}</span> • {t.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
