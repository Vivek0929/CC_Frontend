import { Code2, Users, Lightbulb, Trophy } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Learn & Grow',
    description:
      'Regular workshops and coding sessions to sharpen your programming skills and stay on top of new technologies.',
    gradient: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Users,
    title: 'Collaborate',
    description:
      'Work with passionate peers on exciting projects and build lasting connections across the tech community.',
    gradient: 'from-teal-400 to-cyan-500',
    lightBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description:
      'Turn your boldest ideas into reality through hackathons, competitions, and hands-on project challenges.',
    gradient: 'from-amber-400 to-orange-500',
    lightBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    icon: Trophy,
    title: 'Compete',
    description:
      'Participate in coding contests and hackathons to test your skills, earn recognition, and win exciting prizes.',
    gradient: 'from-purple-500 to-pink-500',
    lightBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, gradient, lightBg, iconColor }) => (
            <div
              key={title}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

              <div className="p-7 flex flex-col gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 ${lightBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={iconColor} size={28} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="heading-font font-bold text-slate-800 text-xl mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Arrow link */}
                <div className={`mt-auto text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
