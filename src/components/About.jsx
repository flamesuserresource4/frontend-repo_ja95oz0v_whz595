export default function About() {
  return (
    <div id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">About the Founder</h2>
          <p className="mt-3 text-slate-600">Hi, I’m Alex — investor, builder, and your coach. I’ve spent years refining a practical approach to markets: manage risk, focus on quality, and execute with discipline. My goal: help you build confidence and a repeatable process.</p>
          <ul className="mt-6 space-y-2 text-slate-700 text-sm">
            <li>• 7+ years across crypto and equities</li>
            <li>• Built portfolios for long-term growth and income</li>
            <li>• Taught 500+ students worldwide</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-inner" />
        </div>
      </div>
    </div>
  );
}
