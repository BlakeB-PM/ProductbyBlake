export function About() {
  return (
    <section id="about" className="py-24 bg-white border-y border-ink-100">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column - text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 mb-6">
              High-velocity product management. I leverage AI-native workflows to shrink the gap between idea and impact.
            </h2>
            
            <div className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                I prototype in Cursor, validate with real users, 
                and ship alongside my engineering teams. When I needed a fitness dashboard that 
                Garmin couldn't provide, I built one. When my dad needed a website for his business, 
                I built that too.
              </p>
              <p>
                At <strong className="text-ink-800">ConstructConnect</strong>, I accelerated an AI product's growth 6x in under 12 months. By
                embedding continuous discovery into our cycles, I doubled the market share of a key
                customer segment and boosted cohort engagement by 49%. Prior to that, I spearheaded
                the digital transformation of 50+ U.S. cities at <strong className="text-ink-800">Tyler Technologies</strong>, directing the
                national rollout of critical ERP and mobile platforms to modernize citizen engagement.
              </p>
              <p>
                My background in <strong className="text-ink-800">economics, computer science, and mathematics</strong> allows me 
                to speak the language of data scientists and engineers while maintaining a rigorous focus on  delivering
                customer-centric business outcomes.
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
              description="My workflow is built on Cursor and Claude. I’ve moved beyond ''prompting'' to scaling teams with AI-first mental models, rapid prototyping, and replacing manual cycles with high-velocity, automated tools."
            />
            
            <TraitCard
              icon="🔬"
              title="Discovery-Obsessed"
              description="I don't guess, I test. Using rigorous discovery, I boosted cohort engagement by nearly 50% in a single month and built networks of advocates who serve as lifelong beta testers."
            />
            
            <TraitCard
              icon="📈"
              title="Business Orientation"
              description="Everything I build ties back to outcomes. I’ve scaled products 6x, doubled the share of key user segments (15% to 33%), and achieved sustainable product-market fit through rigorous iterations."
            />
            
            <TraitCard
              icon="🛠️"
              title="Technical Fluency"
              description="I bridge the gap between product vision and engineering constraints by understanding system architecture, data flows, and technical feasibility."
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
