import { useState } from 'react'
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
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <article 
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isEven ? '' : 'md:grid-flow-dense'
      }`}
    >
      {/* Screenshot placeholder */}
      <div 
        className={`group ${isEven ? '' : 'md:col-start-2'}`}
      >
        <div 
          className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-1 transition-transform group-hover:scale-[1.02]`}
        >
          <div className="w-full h-full rounded-xl bg-ink-900/90 flex items-center justify-center relative overflow-hidden">
            {project.image ? (
              <button 
                onClick={() => setIsImageOpen(true)}
                className="w-full h-full block cursor-zoom-in"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain bg-ink-950 opacity-90 transition-opacity group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-ink-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </button>
            ) : (
              <div className="w-full h-full flex items-center justify-center flex-col">
                <div className="w-16 h-16 rounded-xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-white/70">Screenshot placeholder</p>
                  <p className="text-xs text-white/40 mt-1">{project.title}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageOpen && project.image && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          <button 
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={project.image} 
            alt={project.title} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Content */}
      <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient}`}>
            {project.tagline}
          </span>
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-4">
          {project.title}
        </h3>

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

        {/* Coming soon placeholder */}
        <span
          className="inline-flex items-center gap-2 text-ink-400 font-medium cursor-default"
        >
          Full story coming soon
        </span>
      </div>
    </article>
  )
}
