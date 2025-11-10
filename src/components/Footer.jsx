export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500 shadow shadow-blue-300/50" />
              <span className="font-semibold tracking-tight">InvestMastery</span>
            </div>
            <p className="mt-3 text-white/70">Financial education for disciplined, confident investors.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Disclaimer</h4>
            <p className="mt-3 text-white/70">Educational content only. Not financial advice. Investing involves risk. Past performance does not guarantee future results.</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} InvestMastery. All rights reserved.</div>
      </div>
    </footer>
  );
}
