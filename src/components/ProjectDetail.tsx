import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import type { ProjectSection } from '../data/projects'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <header className={`bg-gradient-to-br ${project.gradient} pt-24 pb-16 md:pt-32 md:pb-24`}>
        <div className="section-container">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>

          <div className="max-w-3xl">
            <p className="text-white/80 font-medium mb-2">{project.tagline}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              {project.title}
            </h1>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono bg-white/20 text-white rounded-md backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-ink-900 font-medium rounded-lg hover:bg-white/90 transition-colors"
                  >
                    <GitHubIcon className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Screenshot placeholder */}
      <div className="section-container -mt-8 md:-mt-12 relative z-10">
        <div className="aspect-video rounded-2xl bg-ink-900 shadow-2xl overflow-hidden border-4 border-white">
          <div className="w-full h-full flex items-center justify-center bg-ink-800">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-white/70">Project screenshot</p>
              <p className="text-sm text-white/40 mt-1">Add to public/projects/{project.id}.png</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-16 md:py-24">
        {/* Problem & Solution summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-ink-200">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-3">
              The Problem
            </h2>
            <p className="text-lg text-ink-700 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-3">
              The Solution
            </h2>
            <p className="text-lg text-ink-700 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Story sections */}
        <div className="max-w-3xl mx-auto space-y-16">
          <StorySection section={project.story.origin} />
          <StorySection section={project.story.approach} />
          <StorySection section={project.story.challenges} />
          <StorySection section={project.story.iterations} />
          <StorySection section={project.story.outcome} />
          <StorySection section={project.story.learnings} />
        </div>

        {/* Back to projects CTA */}
        <div className="mt-20 pt-12 border-t border-ink-200 text-center">
          <p className="text-ink-500 mb-4">Explore more projects</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ink-900 text-ink-50 font-medium rounded-lg hover:bg-ink-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </article>
  )
}

function StorySection({ section }: { section: ProjectSection }) {
  // Check if this is placeholder content
  const isPlaceholder = section.content.includes('[Your story here]')

  return (
    <section>
      <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-4">
        {section.title}
      </h2>
      {isPlaceholder ? (
        <div className="bg-ink-100 rounded-xl p-6 border-2 border-dashed border-ink-300">
          <p className="text-ink-500 whitespace-pre-line text-sm font-mono">
            {section.content}
          </p>
        </div>
      ) : (
        <div className="prose prose-ink max-w-none">
          {section.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-ink-600 leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
