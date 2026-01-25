export function Experience() {
  const experiences = [
    {
      company: 'ConstructConnect',
      role: 'Product Manager → Senior Product Manager, AI',
      period: 'July 2024 – Present',
      description: '2,000+ person pre-construction tech | >$180M revenue',
      highlights: [
        'Scaled AI takeoff automation 6x in under 12 months',
        'Drove product-market fit from 12% to 53% through continuous discovery',
        'Led 2 cross-functional AI/ML teams (15+ engineers) building computer vision and LLM solutions',
        'Reduced workflow time from 3 days to 30 minutes through 20% increase in accuracy improvements',
      ],
    },
    {
      company: 'Rightworks',
      role: 'Product Manager / Product Owner',
      period: 'Aug 2023 – July 2024',
      description: '700+ person accounting cloud services | >$73M revenue',
      highlights: [
        'Consolidated 2 RESTful API services into unified platform architecture',
        'Designed scalable data pipeline for centralized access across accounting systems',
        'Led 3 agile teams through product launch achieving 800+ users at launch',
      ],
    },
    {
      company: 'Tyler Technologies',
      role: 'Product Analyst → Lead Analyst → Product Manager / Owner',
      period: 'May 2019 – July 2023',
      description: '7,000+ person government tech | >$1.2B revenue',
      highlights: [
        'Modernized 50+ cities in year one by launching an ERP Community Development product',
        'Unified 5 ERP products into one mobile app for thousands of city employees',
        'Directed product across 5 development teams (30+ engineers)',
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink-200 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 pt-12 border-t border-ink-100">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-6">Skills & Tools</p>
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCategory
              title="AI/ML Concepts"
              skills={['Model evaluation (Precision, Recall, F1)', 'Computer Vision', 'LLMs & Prompt Engineering']}
            />
            <SkillCategory
              title="Technical"
              skills={['Python', 'SQL', 'Cursor', 'GitHub', 'RESTful APIs', 'Postman', 'Data Pipelines']}
            />
            <SkillCategory
              title="Product Tools"
              skills={['Dovetail', 'Jira', 'Confluence', 'Figma', 'Pendo', 'Claude', 'Notion']}
            />
          </div>
        </div>

        {/* Education */}
        <div className="mt-12 pt-12 border-t border-ink-100">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-400">Education</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-medium text-ink-900">
                Texas Tech University
              </h3>
              <p className="text-ink-600">
                B.S. Economics | Concentrations: Computer Science & Mathematics | <span className="italic">Magna Cum Laude</span>
              </p>
            </div>
            <div className="text-ink-500 text-sm">
              December 2019
            </div>
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

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:text-right'}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-ink-900 rounded-full transform md:-translate-x-1/2 hidden md:block" />

      {/* Content */}
      <div className={`${isEven ? 'md:pr-12' : 'md:col-start-2 md:pl-12 md:text-left'}`}>
        <div className="bg-ink-50 rounded-xl p-6 border border-ink-100 hover:border-ink-200 transition-colors">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-serif text-xl font-medium text-ink-900">{experience.company}</span>
            <span className="text-ink-300">·</span>
            <span className="text-sm text-ink-500">{experience.period}</span>
          </div>
          
          <p className="font-medium text-accent mb-1">{experience.role}</p>
          <p className="text-xs text-ink-400 mb-4">{experience.description}</p>

          <ul className="space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-600">
                <span className="text-accent flex-shrink-0">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Empty column for alternating layout */}
      <div className={isEven ? 'hidden md:block' : 'hidden md:block md:col-start-1 md:row-start-1'} />
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h4 className="font-medium text-ink-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm bg-ink-100 text-ink-700 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
