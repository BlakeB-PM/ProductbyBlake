export function Transition() {
  return (
    <section className="py-20 bg-ink-900">
      <div className="section-container">
        <div className="text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink-50 leading-relaxed max-w-3xl mx-auto">
            I don't just manage products. I build them.
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 text-ink-300 hover:text-ink-50 transition-colors font-medium"
            >
              <span>See the proof</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
