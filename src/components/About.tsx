export function About() {
  return (
    <section id="about" className="py-24 bg-white border-y border-ink-100">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 mb-6">
              I bridge the gap between{' '}
              <span className="italic">vision</span> and{' '}
              <span className="italic">execution.</span>
            </h2>
            
            <div className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Most PMs write requirements and wait. I prototype in code, validate with real users, 
                and ship alongside my engineering teams. When I needed a fitness dashboard that 
                Garmin couldn't provide, I built one. When my dad needed a website for his business, 
                I built that too.
              </p>
              <p>
                My background in <strong className="text-ink-800">Economics, Computer Science, and Mathematics</strong> from 
                Texas Tech gives me not just the technical depth to have meaningful conversations with data scientists and engineers, 
                but also the business acumen to translate that into customer outcomes.
              </p>
              <p>
                At ConstructConnect, I took an AI product from $200K to $1.2M+ ARR by doing relentless 
                customer discovery, not guessing at features. I introduced Continuous Discovery Habits, 
                the Sean Ellis PMF test, and tools like Dovetail that are now used across the organization.
              </p>
            </div>
          </div>

          {/* Right column - key traits */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">
              What I bring
            </h3>
            
            <TraitCard
              icon="🧠"
              title="AI-Native Workflow"
              description="I use Cursor, Claude, and AI tooling daily. Both in the products I build and how I work. I've led AI steering committees and trained teams on context engineering."
            />
            
            <TraitCard
              icon="🔬"
              title="Discovery-Obsessed"
              description="I don't guess, I test. Customer interviews, PMF surveys, usage analytics. I've built networks of customers who become advocates and beta testers."
            />
            
            <TraitCard
              icon="🛠️"
              title="Technical Fluency"
              description="Python, SQL, RESTful APIs, Figma, data pipelines. I can read code, build prototypes, and speak the language of my engineering teams."
            />
            
            <TraitCard
              icon="📈"
              title="Business Orientation"
              description="Everything I build ties back to outcomes: revenue, adoption, retention. I've scaled products to $1M+ ARR and 40%+ PMF scores."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TraitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-ink-50 border border-ink-100 hover:border-ink-200 transition-colors">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium text-ink-900 mb-1">{title}</h4>
        <p className="text-sm text-ink-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
