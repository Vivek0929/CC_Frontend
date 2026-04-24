import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[70px]">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 select-none group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-md shadow-blue-200 group-hover:shadow-blue-300 transition-shadow">
            <Code2 className="text-white" size={18} strokeWidth={2.5} />
          </div>
          <span className="text-slate-800 font-bold text-[17px] tracking-tight heading-font">
            CSE Coding Club
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#home"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-semibold shadow-md shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transition-all duration-200"
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-slate-100`}
      >
        <ul className="flex flex-col px-6 py-5 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-base transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#home"
              className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
