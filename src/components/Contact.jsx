export default function Contact() {
  return (
    <div id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Get in Touch</h2>
          <p className="mt-3 text-slate-600">Questions about coaching? Reach out for details or follow on socials.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Email</h3>
            <p className="text-slate-600 text-sm mt-2">coach@investmastery.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Twitter</h3>
            <p className="text-slate-600 text-sm mt-2">@investmastery</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Instagram</h3>
            <p className="text-slate-600 text-sm mt-2">@investmastery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
