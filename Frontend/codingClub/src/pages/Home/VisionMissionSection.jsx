import { Eye, Target, CheckCircle2 } from 'lucide-react';

const visionPoints = [
  'Lead innovation in computer science education',
  'Create a culture of continuous learning',
  'Shape the future of technology',
];

const missionPoints = [
  'Empower students with cutting-edge skills',
  'Provide hands-on project experience',
  'Build a supportive developer community',
];

export default function VisionMissionSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</p>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Vision &amp; <span className="gradient-text">Mission</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Vision */}
          <div
            id="vision"
            className="flex-1 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)', border: '1px solid #bfdbfe' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30"
                 style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)', transform: 'translate(30%, -30%)' }} />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Eye className="text-white" size={26} />
              </div>

              <h3 className="heading-font text-2xl font-bold text-blue-700 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To be the leading platform for aspiring developers — creating a culture of innovation,
                continuous learning, and technological excellence that shapes the future of computer science.
              </p>

              <ul className="flex flex-col gap-3">
                {visionPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-slate-600 text-sm font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div
            id="mission"
            className="flex-1 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)', border: '1px solid #99f6e4' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30"
                 style={{ background: 'radial-gradient(circle, #5eead4, transparent 70%)', transform: 'translate(30%, -30%)' }} />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
                <Target className="text-white" size={26} />
              </div>

              <h3 className="heading-font text-2xl font-bold text-teal-700 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To empower students with cutting-edge programming skills, provide opportunities for
                hands-on experience, and build a supportive community that encourages collaboration
                and creativity.
              </p>

              <ul className="flex flex-col gap-3">
                {missionPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-slate-600 text-sm font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
