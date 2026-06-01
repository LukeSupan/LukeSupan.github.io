import { useState } from "react";
import team from "../assets/team.jpg";
import supan from "../assets/supan.pdf";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal, Collapsible } from "../components/Animated";

import { PROJECTS } from "../data/projects";
import { SKILLS } from "../data/skills";

// redundant from nav.jsx. fine for now
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

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
                Currently making full stack projects and maintaining a role-base stat tracking site. 
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Looking for Software Engineer positions.
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
            className={`inline-block transition-transform duration-300 text-white ${projectsOpen ? "rotate-90" : "rotate-0"}`}
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
            className={`inline-block transition-transform duration-300 text-white ${aboutOpen ? "rotate-90" : "rotate-0"}`}
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
                I enjoy making useful/fun projects for myself and my friends. I
                started with simple CLI tools, eventually moving to full-stack
                web apps and Unity for some game dev.
                <br />
                <br />
                For more information on the story behind each project. Click on
                the project cards in the{" "}
                <span
                  className="text-white/80 hover:text-white transition-colors cursor-pointer underline"
                  onClick={() => scrollTo("projects")}
                >
                  project
                </span>{" "}
                section. (this doesnt work right now... i need to make the pages for the projects)
                <br />
                <br />
              </p>
            </Reveal>

            {/* education */}
            <Reveal delay={60}>
              <div>
                <p className="text-2xl text-white/90 tracking-widest uppercase mb-3">
                  Education
                </p>
                <span className="text-xl text-white/90">
                  University of Central Florida - B.S. Computer Science
                </span>
                <br />
                <span className="text-base text-white/65 mt-1 inline-block">
                  GPA 3.9 - Magna Cum Laude - May 2026
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
                <p className="text-2xl text-white/90 tracking-widest uppercase mb-3">
                  Skills
                </p>
                <div className="flex flex-col gap-6">
                  {SKILLS.map((group) => (
                    <div key={group.label}>
                      <p className="text-base text-white/40 tracking-widest mb-2">
                        {group.label}
                      </p>
                      <p className="text-base text-white/70 leading-relaxed">
                        {group.items.join(" / ")}
                      </p>
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
