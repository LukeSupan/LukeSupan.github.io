import { useEffect, useRef, useState } from "react";
import beachLuke from "../assets/beachluke.jpg";
import supan from "../assets/supan.pdf";

// --- Utility Hook ---
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// --- Reveal wrapper ---
function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const hidden =
    direction === "left"
      ? "opacity-0 -translate-x-4"
      : "opacity-0 translate-y-4";

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${inView ? "opacity-100 translate-x-0 translate-y-0" : hidden}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- Project card with broken-image fallback ---
function ProjectCard({ project, delay }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Reveal key={project.num} direction="up" delay={delay}>
      <a
        href={project.href}
        className="group flex flex-col border border-white/10 hover:border-white/30 transition-colors duration-200 overflow-hidden"
      >
        {/* Image area — smaller aspect ratio */}
        <div
          className="relative w-full bg-white/5 overflow-hidden flex items-center justify-center"
          style={{ aspectRatio: "16/7" }}
        >
          {!imgFailed ? (
            <img
              src={project.image}
              alt={project.name}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          ) : (
            <span className="text-xs text-white/30 uppercase tracking-widest px-4 text-center">
              {project.name}
            </span>
          )}

          <span className="absolute top-2 left-2 text-[11px] text-white/55 font-mono">
            {project.num}
          </span>
          <span className="absolute top-2 right-2 text-[11px] text-white/55 font-mono">
            {project.year}
          </span>
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col gap-2">
          <span className="text-base text-white/90 uppercase tracking-wide group-hover:text-white transition-colors duration-150">
            {project.name}
          </span>
          <p className="text-sm text-white/70 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-white/65 border border-white/20 px-1.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

// --- Data from resume ---
const PROJECTS = [
  {
    num: "01",
    name: "HCA: Psycall PGY4 Scheduler",
    description:
      "Led a team of 5, for my senior design project, to build a rotation scheduler for medical residents at HCA Healthcare, replacing a manual email-based process. Currently in use by HCA",
    stack: ["Next.js", "TypeScript"],
    year: "2026",
    image: "/assets/psycall.jpg",
    href: "#",
  },
  {
    num: "02",
    name: "Power Level",
    description:
      "Full-stack stat tracking app in active use. Compiles match data across multiple game types with AI-powered tier lists and narratives using Claude Haiku 4.5.",
    stack: ["FastAPI", "Python", "React", "Claude API"],
    year: "2026",
    image: "/assets/power-level.jpg",
    href: "#",
  },
  {
    num: "03",
    name: "Ping Pong!",
    description:
      "Ping Pong-specific stat tracker with an invite system for groups, point differential tracking, and generated player narratives.",
    stack: ["FastAPI", "Python", "JavaScript", "SQLite", "Claude API"],
    year: "2026",
    image: "/assets/ping-pong.jpg",
    href: "#",
  },
  {
    num: "04",
    name: "The Hole",
    description:
      "Full-stack MERN blog application with JWT auth, admin-only actions, and a RESTful Express API. Created for a Web Developement course at UCF",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    year: "2025",
    image: "/assets/the-hole.jpg",
    href: "#",
  },
  {
    num: "05",
    name: "PONG",
    description:
      "Feature-complete PONG in Unity with raycasting-based opponent AI, custom physics, and local multiplayer including controller support. Hosted on itch.io",
    stack: ["Unity", "C#"],
    year: "2025",
    image: "/assets/pong.jpg",
    href: "#",
  },
];

const SKILLS = [
  {
    label: "Languages",
    items: ["Java", "C", "C#", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind", "HTML", "CSS"] },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express", "SQLite", "MongoDB"],
  },
  { label: "Tools", items: ["Unity", "Claude API", "Git", "Jira / Scrum"] },
];

// --- Smooth scroll helper ---
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// --- Component ---
export default function Home() {
  const [scrollPct, setScrollPct] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;

      setScrollPct(total > 0 ? (currentY / total) * 100 : 0);

      if (currentY < lastScrollY.current) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setNavVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen font-mono font-semibold">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50">
        <div
          className="h-full bg-white/70 transition-all duration-75"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* --- Nav --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-[#111111] px-6 sm:px-10 py-4 flex justify-between items-center transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span
          className="text-base text-white/65 hover:text-white transition-colors cursor-pointer"
          onClick={() => scrollTo("title")}
        >
          luke_supan
        </span>
        <div className="flex gap-6 sm:gap-14">
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
          >
            /projects
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
          >
            /about
          </button>
          <a
            href={supan}
            target="_blank"
            className="text-sm text-white/65 hover:text-white transition-colors underline underline-offset-4"
          >
            resume.pdf
          </a>
        </div>
      </nav>

      {/* --- Title --- */}
      <section
        id="title"
        className="pt-[80px] sm:pt-[52px] px-6 sm:px-10 py-16 sm:py-24 min-h-[85vh] flex flex-col justify-center"
      >
        {/* On mobile: stacked. On sm+: row with image to the right, centered */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12 sm:gap-16">
          {/* Name + tagline */}
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              LUKE SUPAN
            </h1>

            {/* Tagline */}
            <div className="flex flex-col gap-1 pl-[1.15em] sm:pl-[0.5em]">
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                CS grad from UCF, Magna Cum Laude, May 2026.
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Currently making full stack projects and learning Roblox Dev
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Open to any SWE roles/programs.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex sm:justify-center justify-center relative">
            <div className="absolute inset-0 scale-110" />
            <img
              src={beachLuke}
              alt="Luke Supan"
              className="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-96 lg:h-[30rem] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* --- Projects --- */}
      <section id="projects" className="px-6 sm:px-10 py-20">
        <button
          onClick={() => setProjectsOpen((v) => !v)}
          className="flex items-center gap-3 text-3xl text-white mb-8 tracking-widest bg-transparent border-none cursor-pointer hover:text-white/70 transition-colors duration-150 w-full text-left font-mono font-semibold"
        >
          <span
            className={`inline-block transition-transform duration-300 ${projectsOpen ? "rotate-90" : "rotate-0"}`}
          >
            &gt;
          </span>
          PROJECTS
        </button>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out overflow-hidden ${
            projectsOpen
              ? "max-h-[9999px] opacity-100"
              : "max-h-0 opacity-0 mb-0"
          }`}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.num} project={project} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* --- About --- */}
      <section
        id="about"
        className="px-6 sm:px-10 py-20 border-b border-white/10"
      >
        <button
          onClick={() => setAboutOpen((v) => !v)}
          className="flex items-center gap-3 text-3xl text-white mb-10 tracking-widest bg-transparent border-none cursor-pointer hover:text-white/70 transition-colors duration-150 w-full text-left font-mono font-semibold"
        >
          <span
            className={`inline-block transition-transform duration-300 ${aboutOpen ? "rotate-90" : "rotate-0"}`}
          >
            &gt;
          </span>
          ABOUT
        </button>

        <div
          className={`flex flex-col gap-12 max-w-2xl overflow-hidden transition-all duration-500 ease-in-out ${
            aboutOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Bio */}
          <Reveal>
            <p className="text-lg sm:text-2xl leading-relaxed text-white/80">
              I graduated from UCF Magna Cum Laude as a Computer Science major
              with a 3.9 GPA in May, 2026.
              <br></br>
              <br></br>I enjoy making projects for myself and my friends. I
              started with simple CLI tools, eventually moving to full-stack web
              apps and some Unity work.
              <br></br>
              <br></br>
              I'm now working on learning Roblox Dev alongside creating a job
              application tracker web app.
              <br></br>
              <br></br>
              Open to any SWE positions currently.
            </p>
          </Reveal>

          {/* Education */}
          <Reveal delay={60}>
            <div>
              <p className="text-xl text-white/90 tracking-widest uppercase mb-3">
                Education
              </p>
              <span className="text-2xl text-white/90">
                University of Central Florida - B.S. Computer Science
              </span>
              <br />
              <span className="text-base text-white/65 mt-1 inline-block">
                GPA 3.9 &middot; Magna Cum Laude &middot; May 2026
              </span>
            </div>
          </Reveal>

          {/* Skills */}
          <Reveal delay={120}>
            <div>
              <p className="text-base text-white/65 tracking-widest uppercase mb-4">
                Skills
              </p>
              <div className="flex flex-col gap-3">
                {SKILLS.map((group) => (
                  <div key={group.label} className="flex gap-4 items-start">
                    <span className="text-sm text-white/50 uppercase tracking-widest w-24 pt-0.5 flex-shrink-0">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-white/80 border border-white/20 px-2 py-0.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Currently */}
          <Reveal delay={180}>
            <div>
              <p className="text-base text-white/65 tracking-widest uppercase mb-3">
                Currently
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                Looking for full-time SWE roles in any location.
                <br></br>
                Working on Roblox Dev and an application tracker web app.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="px-6 sm:px-10 py-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a
            href="https://github.com/LukeSupan"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            github
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            linkedin
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            handshake
          </a>
          <a
            href="mailto:lukesupan@outlook.com"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            lukesupan@outlook.com
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-base text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none underline"
        >
          back to top
        </button>

        <span className="text-sm text-white/70 tracking-widest">
          lukesupan.github.io
        </span>
      </footer>
    </div>
  );
}
