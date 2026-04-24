import { Users, Award, Zap } from 'lucide-react';

const highlights = [
  { icon: Users, label: 'Community Driven', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Award, label: 'Excellence Focused', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: Zap,   label: 'Innovation First',  color: 'text-amber-500', bg: 'bg-amber-50' },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#f8fafc] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — illustration card */}
          <div className="relative w-full lg:w-5/12 flex-shrink-0">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)' }}
            >
              <div className="p-10 flex flex-col gap-5">
                {/* Code snippet decoration */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 font-mono text-xs text-white/90 leading-6 border border-white/20">
                  <p className="text-teal-300">{'// Welcome to CSE Coding Club'}</p>
                  <p><span className="text-blue-200">const</span> <span className="text-white">club</span> = {'{'}</p>
                  <p className="pl-4"><span className="text-amber-300">members</span>: <span className="text-green-300">'200+'</span>,</p>
                  <p className="pl-4"><span className="text-amber-300">passion</span>: <span className="text-green-300">'∞'</span>,</p>
                  <p className="pl-4"><span className="text-amber-300">mission</span>: <span className="text-green-300">'innovate'</span></p>
                  <p>{'}'};</p>
                </div>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'DSA', 'Web Dev', 'ML', 'Open Source'].map((t) => (
                    <span
                      key={t}
                      className="bg-white/15 border border-white/25 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 shadow-xl flex items-center justify-center animate-float">
              <span className="text-white text-3xl font-bold heading-font">{'</>'}</span>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex-1 flex flex-col gap-7">
            <div>
              <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-5">
                About <span className="gradient-text">Us</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                The CSE Coding Club is a vibrant community of passionate programmers, innovators,
                and tech enthusiasts dedicated to exploring the frontiers of computer science.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                We foster a collaborative environment where students learn together, build
                real-world projects, and excel in software development and competitive programming.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, color, bg }) => (
                <div key={label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-100">
                  <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={color} size={18} />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
