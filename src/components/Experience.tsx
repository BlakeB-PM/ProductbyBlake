export function Experience() {
  const experiences = [
    {
      company: 'ConstructConnect',
      roles: [
        {
          title: 'Senior Product Manager, AI',
          period: 'Dec 2025 – Present',
        },
        {
          title: 'Product Manager, AI',
          period: 'July 2024 – Dec 2025',
        }
      ],
      description: '2,000+ employees | >$180M revenue',
      highlights: [
        'Scaled AI product revenue 8x in under 12 months',
        'Drove product-market fit from 12% to 53% through customer discovery',
        'Doubled the share of a target customer segment',
        'Building and shipping production tooling alongside engineers',
      ],
    },
    {
      company: 'Rightworks',
      roles: [
        {
          title: 'Product Manager / Product Owner',
          period: 'Aug 2023 – July 2024',
        }
      ],
      description: '700+ employees | >$73M revenue',
      highlights: [
        'Unified 2 RESTful API services into single platform architecture',
        'Led 3 agile teams through product launch → 800+ users at launch',
      ],
    },
    {
      company: 'Tyler Technologies',
      roles: [
        {
          title: 'Product Manager / Owner',
          period: 'Dec 2021 – July 2023',
        },
        {
          title: 'Lead Product Analyst',
          period: 'March 2021 – Dec 2021',
        },
        {
          title: 'Product Analyst',
          period: 'May 2019 – March 2021',
        }
      ],
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

          <div className="space-y-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface Role {
  title: string
  period: string
}

interface ExperienceType {
  company: string
  roles: Role[]
  description: string
  highlights: string[]
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <div className="relative">
      {/* Timeline dot - left edge */}
      <div className="absolute -left-8 md:-left-12 top-1.5 w-3 h-3 bg-ink-900 rounded-full transform -translate-x-1/2 ring-4 ring-white" />

      {/* Content */}
      <div>
        <div className="mb-4">
          <h3 className="font-serif text-xl font-medium text-ink-900">{experience.company}</h3>
          <p className="text-sm text-ink-400 mt-1">{experience.description}</p>
        </div>
        
        {/* Nested Roles Timeline */}
        <div className="relative border-l border-ink-100 pl-6 ml-1 space-y-3 mb-4">
          {experience.roles.map((role, i) => (
            <div key={i} className="relative">
              {/* Secondary dot */}
              <div className="absolute -left-[29px] top-2 w-1.5 h-1.5 bg-ink-300 rounded-full ring-4 ring-white" />
              
              <h4 className="font-medium text-accent">{role.title}</h4>
              <p className="text-sm text-ink-500 mt-0.5">{role.period}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-1.5 mt-4">
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
