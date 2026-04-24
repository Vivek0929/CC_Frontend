import { ArrowRight, Star } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Big CTA card */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #06b6d4 100%)' }}
        >
          {/* Background blobs */}
          <div
            className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #a5f3fc, transparent 70%)', transform: 'translate(-40%, -40%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)', transform: 'translate(40%, 40%)' }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center py-20 px-8 gap-8">

            {/* Star badge */}
            <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5">
              <Star size={13} className="text-yellow-300 fill-yellow-300" />
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">Join the Community</span>
            </div>

            <h2 className="heading-font text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #a5f3fc, #e0f2fe)' }}>
                Journey?
              </span>
            </h2>

            <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed">
              Join our community of passionate developers. Participate in events, collaborate on
              projects, and grow your skills alongside the best minds in CSE.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="#home"
                id="cta-member-btn"
                className="group flex items-center gap-2 bg-white text-blue-600 font-bold px-9 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
              >
                Become a Member
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#events"
                className="text-white/80 hover:text-white font-semibold text-base underline underline-offset-4 transition-colors"
              >
                View Upcoming Events
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-2">
                {['🧑‍💻', '👩‍💻', '🧑‍💻', '👨‍💻'].map((e, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <span className="text-white font-bold">200+</span> students already joined
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
