import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center justify-center">

      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-3">
          Hi, I'm
        </p>
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          CS student at [Your University] passionate about [your interests —
          e.g. full-stack development, ML, systems programming].
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/projects"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2.5 rounded-lg font-medium"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-gray-400 transition px-6 py-2.5 rounded-lg font-medium text-gray-300"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 text-center">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git'].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact / links */}
      <section className="max-w-2xl w-full text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Find me online
        </h2>
        <div className="flex gap-6 justify-center text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@email.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </section>

    </main>
  )
}
