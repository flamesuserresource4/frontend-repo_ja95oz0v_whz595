export default function Urgency({ onBook }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,white,transparent_50%),radial-gradient(ellipse_at_bottom_right,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Limited Spots Each Month</h3>
            <p className="mt-2 text-white/90 max-w-2xl">We work with a small number of students to ensure quality and attention. Secure your spot today.</p>
          </div>
          <button onClick={onBook} className="inline-flex items-center rounded-md bg-white text-slate-900 px-6 py-3 font-medium shadow hover:bg-white/90 transition">
            Reserve Your Session
          </button>
        </div>
      </div>
    </div>
  );
}
