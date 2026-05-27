import { useState } from "react";
import team from "../assets/team.jpg";
import supan from "../assets/supan.pdf";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal, Collapsible } from "../components/Animated";

import { PROJECTS } from "../data/projects";
import { SKILLS } from "../data/skills";

export default function Home() {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen font-mono font-semibold">
      <Nav />

      {/* --- title --- */}
      <section
        id="title"
        className="pt-20 sm:pt-16 px-6 sm:px-10 py-16 sm:py-24 min-h-[85vh] flex flex-col justify-center"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12 sm:gap-16">
          {/* name and mini bio */}
          <div className="max-w-xl min-w-0">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              LUKE SUPAN
            </h1>

            <div className="flex flex-col gap-1 pl-4 sm:pl-2 border-l border-white/20">
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                CS grad from UCF, Magna Cum Laude, May 2026.
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Currently making full stack projects and learning Roblox Dev.
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Open to any SWE roles/programs.
              </p>
            </div>
          </div>

          {/* photo */}
          <div className="flex-1 flex-shrink-0 flex justify-center lg:justify-start min-w-0 max-w-8xl">
            <img
              src={team}
              alt="Luke Supan and Senior Design Team"
              className="w-full aspect-[3/2] object-cover object-bottom rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* --- projects --- */}
      <section id="projects" className="px-6 sm:px-10 py-20">
        <button
          onClick={() => setProjectsOpen((v) => !v)}
          className="flex items-center gap-3 text-3xl text-white mb-8 tracking-widest bg-transparent border-none cursor-pointer hover:text-white/70 transition-colors duration-150 w-full text-left font-mono font-semibold"
        >
          <span
            className={`inline-block transition-transform duration-300 text-[#7dd3a8] ${projectsOpen ? "rotate-90" : "rotate-0"}`}
          >
            &gt;
          </span>
          PROJECTS
        </button>

        <Collapsible open={projectsOpen}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.num} project={project} delay={i * 80} />
            ))}
          </div>
        </Collapsible>
      </section>

      {/* --- about --- */}
      <section
        id="about"
        className="px-6 sm:px-10 py-20 border-b border-white/10"
      >
        <button
          onClick={() => setAboutOpen((v) => !v)}
          className="flex items-center gap-3 text-3xl text-white mb-10 tracking-widest bg-transparent border-none cursor-pointer hover:text-white/70 transition-colors duration-150 w-full text-left font-mono font-semibold"
        >
          <span
            className={`inline-block transition-transform duration-300 text-[#7dd3a8] ${aboutOpen ? "rotate-90" : "rotate-0"}`}
          >
            &gt;
          </span>
          ABOUT
        </button>

        <Collapsible open={aboutOpen}>
          <div className="flex flex-col gap-12 max-w-2xl pb-2">
            {/* bio */}
            <Reveal>
              <p className="text-lg sm:text-xl leading-relaxed text-white/80">
                I graduated from UCF Magna Cum Laude as a Computer Science major
                with a 3.9 GPA in May, 2026.
                <br />
                <br />
                I enjoy making projects for myself and my friends. I started
                with simple CLI tools, eventually moving to full-stack web apps
                and some Unity work.
                <br />
                <br />
                I'm now working on learning Roblox Dev alongside creating a job
                application tracker web app.
                <br />
                <br />
                Open to any SWE positions currently.
              </p>
            </Reveal>

            {/* education */}
            <Reveal delay={60}>
              <div>
                <p className="text-xl text-white/90 tracking-widest uppercase mb-3">
                  Education
                </p>
                <span className="text-2xl text-white/90">
                  University of Central Florida — B.S. Computer Science
                </span>
                <br />
                <span className="text-base text-white/65 mt-1 inline-block">
                  GPA 3.9 &middot; Magna Cum Laude &middot; May 2026
                </span>
                <br />
                <a
                  href={supan}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-white/65 hover:text-white transition-colors underline underline-offset-4 mt-2 inline-block"
                >
                  resume.pdf
                </a>
              </div>
            </Reveal>

            {/* skills */}
            <Reveal delay={120}>
              <div>
                <p className="text-xl text-white/90 tracking-widest uppercase mb-3">
                  Skills
                </p>
                <div className="flex flex-col gap-3">
                  {SKILLS.map((group) => (
                    <div
                      key={group.label}
                      className="flex gap-4 items-baseline border-l-2 border-[#7dd3a8]/25 pl-3"
                    >
                      <span className="text-xs text-white/40 uppercase tracking-widest w-20 flex-shrink-0">
                        {group.label}
                      </span>
                      <span className="text-sm text-[#7dd3a8]/70 leading-relaxed">
                        {group.items.join(" / ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Collapsible>
      </section>

      <Footer />
    </div>
  );
}
