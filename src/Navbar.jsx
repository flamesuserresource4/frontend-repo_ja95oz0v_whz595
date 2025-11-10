import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: "why", label: "Why Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero") }>
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500 shadow shadow-blue-300/50" />
          <span className="font-semibold tracking-tight text-gray-900">InvestMastery</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-gray-900 transition-colors">
              {l.label}
            </button>
          ))}
          <a href="#pricing" onClick={(e)=>{e.preventDefault();scrollTo('pricing')}} className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow hover:opacity-95 transition">
            Book Now
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/80 backdrop-blur border-t border-white/30">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left px-2 py-2 rounded hover:bg-black/5">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('pricing')} className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
