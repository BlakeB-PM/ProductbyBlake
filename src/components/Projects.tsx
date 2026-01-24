import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-3">
            Projects
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 mb-4">
            Things I've built
          </h2>
          <p className="text-ink-600 max-w-2xl">
            Real problems. Real solutions. All built with Cursor and AI-assisted development. 
            These aren't tutorials. They're tools I actually use.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <article 
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isEven ? '' : 'md:grid-flow-dense'
      }`}
    >
      {/* Screenshot placeholder */}
      <Link 
        to={`/project/${project.id}`}
        className={`group ${isEven ? '' : 'md:col-start-2'}`}
      >
        <div 
          className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-1 transition-transform group-hover:scale-[1.02]`}
        >
          <div className="w-full h-full rounded-xl bg-ink-900/90 flex items-center justify-center relative overflow-hidden">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white/70">Screenshot placeholder</p>
              <p className="text-xs text-white/40 mt-1">{project.title}</p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="px-4 py-2 bg-white rounded-lg text-ink-900 font-medium text-sm shadow-lg">
                View case study →
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient}`}>
            {project.tagline}
          </span>
        </div>
        
        <Link to={`/project/${project.id}`}>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-4 hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>

        <div className="space-y-4 mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-1">The Problem</p>
            <p className="text-ink-600 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-1">The Solution</p>
            <p className="text-ink-600 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-ink-100 text-ink-600 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Read more link */}
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
        >
          Read the full story
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
