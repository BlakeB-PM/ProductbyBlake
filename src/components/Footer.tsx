export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-ink-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink-500">
          <p>
            © {currentYear} Blake Beal. Built with{' '}
            <a
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-700 hover:text-accent transition-colors"
            >
              Cursor
            </a>
            {' '}+ React + Tailwind.
          </p>
          <p className="font-mono text-xs">
            <span className="text-ink-400">v2.0</span>
            {' · '}
            <a
              href="https://github.com/BlakeB-PM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-600 hover:text-accent transition-colors"
            >
              View source on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
