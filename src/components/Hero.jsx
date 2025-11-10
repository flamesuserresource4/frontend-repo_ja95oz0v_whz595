import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryClick }) {
  return (
    <div id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            Premium 1-on-1 Coaching
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Master Crypto & Stocks with Confidence
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Learn the frameworks, risk management, and execution skills to invest wisely. No hype — just clear, actionable guidance tailored to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onPrimaryClick} className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium shadow-lg shadow-blue-500/20 hover:opacity-95 transition">
              Book Your Session
            </button>
            <a href="#why" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition">
              Why InvestMastery
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/60 text-sm">
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-blue-500/80 ring-2 ring-white/20" />
              <div className="h-7 w-7 rounded-full bg-indigo-500/80 ring-2 ring-white/20" />
              <div className="h-7 w-7 rounded-full bg-cyan-500/80 ring-2 ring-white/20" />
            </div>
            <span>Trusted by 500+ students</span>
          </div>
        </div>
      </div>
    </div>
  );
}
