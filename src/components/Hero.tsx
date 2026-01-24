export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text content - Left side */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            {/* Intro line */}
            <p className="font-mono text-xs sm:text-sm text-ink-500 mb-2 sm:mb-4 animate-fade-in">
              Hi, I'm Blake.
            </p>

            {/* Main headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-ink-900 mb-4 sm:mb-6 animate-slide-up break-words">
              A Product Manager{' '}
              <span className="text-ink-400">who</span>{' '}
              builds.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg md:text-xl text-ink-600 leading-relaxed mb-6 sm:mb-10 animate-slide-up animation-delay-100 mx-auto md:mx-0 max-w-lg md:max-w-none">
              6+ years shipping B2B SaaS. I use{' '}
              <span className="font-medium text-ink-800">AI tools like Cursor</span>{' '}
              to prototype in code, validate with real users, and ship alongside my engineering teams.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4 sm:gap-12 mb-8 sm:mb-12 animate-slide-up animation-delay-200">
              <Stat value="6x" label="ARR growth" />
              <Stat value="3x" label="User productivity" />
              <Stat value="15+" label="Engineers led" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 animate-slide-up animation-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-ink-900 text-ink-50 font-medium rounded-lg hover:bg-ink-800 transition-colors text-sm sm:text-base"
              >
                See what I've built
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-ink-300 text-ink-700 font-medium rounded-lg hover:border-ink-400 hover:text-ink-900 transition-colors text-sm sm:text-base"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Headshot - Right side */}
          <div className="flex-shrink-0 w-32 sm:w-48 lg:w-72 xl:w-80 animate-fade-in mt-2 md:mt-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-ink-200 transition-transform duration-300">
              <img 
                src="/headshot.jpg" 
                alt="Blake Beal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-ink-900">{value}</div>
      <div className="text-xs sm:text-sm text-ink-500">{label}</div>
    </div>
  )
}
