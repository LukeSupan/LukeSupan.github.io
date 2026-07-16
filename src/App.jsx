function App() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/LukeSupan' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Resume', href: '#' },
  ]

  return (
    <main className="portfolio-shell min-h-screen px-6 text-white">
      <section className="portfolio-stage" aria-label="Luke Supan portfolio">
        <div className="triangle-mark" aria-hidden="true">
          <div className="triangle-outline" />
          <div className="triangle-fill" />
        </div>

        <div className="portfolio-content">
          <h1 className="text-5xl font-normal sm:text-7xl">Luke Supan</h1>

          <a
            className="mt-8 block text-base text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="mailto:lukesupan@outlook.com"
          >
            lukesupan@outlook.com
          </a>

          <nav className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-white/55">
            {links.map((link) => (
              <a
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}

export default App
