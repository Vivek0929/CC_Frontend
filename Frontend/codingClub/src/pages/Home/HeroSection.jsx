import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 35%, #06b6d4 70%, #0891b2 100%)' }}
    >
      {/* ── Decorative blobs ── */}
      <div
        className="animate-float absolute top-[-120px] left-[-100px] w-[420px] h-[420px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #a5f3fc, transparent 70%)' }}
      />
      <div
        className="animate-float-slow absolute bottom-[-80px] right-[-80px] w-[360px] h-[360px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #e0f2fe, transparent 60%)' }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[600px] md:min-h-[680px] px-6 py-24">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={14} className="text-yellow-300" />
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
            Department of Computer Science
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up delay-100 heading-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
          CSE Coding
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #a5f3fc, #e0f2fe)' }}>
            Club
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 text-white/80 text-xl md:text-2xl font-medium mb-10 tracking-wide">
          Code<span className="mx-2 text-teal-300">·</span>Create<span className="mx-2 text-teal-300">·</span>Collaborate
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#about"
            id="hero-cta"
            className="group flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
          >
            Join us now
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all duration-300 text-base"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up delay-500 mt-16 flex flex-wrap justify-center gap-10">
          {[
            { value: '200+', label: 'Members' },
            { value: '50+', label: 'Events Hosted' },
            { value: '30+', label: 'Projects Built' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-white heading-font">{value}</p>
              <p className="text-white/60 text-sm font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
