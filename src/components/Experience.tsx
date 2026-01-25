export function Experience() {
  const experiences = [
    {
      company: 'ConstructConnect',
      role: 'Product Manager → Senior Product Manager, AI',
      period: 'July 2024 – Present',
      description: '2,000+ employees | >$180M revenue',
      highlights: [
        'Scaled AI takeoff automation 6x in under 12 months',
        'Drove product-market fit from 12% to 53% through continuous discovery',
        'Led 2 cross-functional AI/ML teams (15+ engineers)',
      ],
    },
    {
      company: 'Rightworks',
      role: 'Product Manager / Product Owner',
      period: 'Aug 2023 – July 2024',
      description: '700+ employees | >$73M revenue',
      highlights: [
        'Unified 2 RESTful API services into single platform architecture',
        'Led 3 agile teams through product launch → 800+ users at launch',
      ],
    },
    {
      company: 'Tyler Technologies',
      role: 'Product Analyst → Lead Analyst → Product Manager / Owner',
      period: 'May 2019 – July 2023',
      description: '7,000+ employees | >$1.2B revenue',
      highlights: [
        'Modernized 50+ cities in year one with ERP Community Development launch',
        'Unified 5 ERP products into one mobile app for thousands of city employees',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-white border-y border-ink-100">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 mb-4">
            Where I've worked
          </h2>
          <p className="text-ink-600 max-w-2xl">
            6+ years in B2B SaaS, from ERP modernization to AI-powered automation. 
            Consistently growing revenue, leading teams, and shipping products that delight customers.
          </p>
        </div>

        {/* Single-column Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line - left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-200" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExperienceType {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <div className="relative">
      {/* Timeline dot - left edge */}
      <div className="absolute -left-8 md:-left-12 top-1 w-3 h-3 bg-ink-900 rounded-full transform -translate-x-1/2" />

      {/* Content - minimal style, no card background */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-serif text-xl font-medium text-ink-900">{experience.company}</span>
          <span className="text-ink-300">·</span>
          <span className="text-sm text-ink-500">{experience.period}</span>
        </div>
        
        <p className="font-medium text-accent mb-1">{experience.role}</p>
        <p className="text-sm text-ink-400 mb-3">{experience.description}</p>

        <ul className="space-y-1.5">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-600">
              <span className="text-accent flex-shrink-0">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
