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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left column - text content */}
          <div className="flex-1 max-w-2xl">
            {/* Intro line */}
            <p className="font-mono text-sm text-ink-500 mb-4 animate-fade-in">
              Hi, I'm Blake.
            </p>

            {/* Main headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-ink-900 mb-6 animate-slide-up">
              A Product Manager{' '}
              <span className="text-ink-400">who</span>{' '}
              <span className="italic">builds.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed mb-10 animate-slide-up animation-delay-100">
              6+ years shipping B2B SaaS products. I use{' '}
              <span className="font-medium text-ink-800">AI tools like Cursor</span>{' '}
              to prototype, validate ideas, and build real software. Not just write specs.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 md:gap-12 mb-12 animate-slide-up animation-delay-200">
              <Stat value="$1M+" label="ARR grown" />
              <Stat value="3x" label="User productivity gains" />
              <Stat value="15+" label="Engineers led" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink-900 text-ink-50 font-medium rounded-lg hover:bg-ink-800 transition-colors"
              >
                See what I've built
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink-300 text-ink-700 font-medium rounded-lg hover:border-ink-400 hover:text-ink-900 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right column - headshot */}
          <div className="hidden lg:block flex-shrink-0 w-72 xl:w-80 animate-fade-in animation-delay-200">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-ink-200">
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
      <div className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">{value}</div>
      <div className="text-sm text-ink-500">{label}</div>
    </div>
  )
}
