export function SkillsEducation() {
  return (
    <section id="skills" className="py-24 bg-white border-y border-ink-100">
      <div className="section-container">
        {/* Skills */}
        <div className="mb-16">
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
        <div className="pt-12 border-t border-ink-100">
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
