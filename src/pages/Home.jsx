import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import coasterImage from "../assets/coasterimage.png";
import enolaImage from "../assets/enolaimage.jpg";
import natureImage from "../assets/natureimage.jpg";
import team from "../assets/team.jpg";
import supan from "../assets/supan.pdf";
import washingtonImage from "../assets/washingtonimage.jpg";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal, Collapsible } from "../components/Animated";

import { OTHER_PROJECTS, PROJECTS } from "../data/Projects";
import { SKILLS } from "../data/Skills";

const HERO_IMAGES = [
  {
    src: team,
    alt: "Luke Supan and Senior Design Team",
    position: "object-bottom",
  },
  {
    src: coasterImage,
    alt: "Luke Supan at a coaster park",
    position: "object-center",
  },
  {
    src: enolaImage,
    alt: "Luke Supan outdoors in Enola",
    position: "object-center",
  },
  {
    src: natureImage,
    alt: "Luke Supan outside in nature",
    position: "object-center",
  },
  {
    src: washingtonImage,
    alt: "Luke Supan in Washington",
    position: "object-center",
  },
];

// redundant from nav.jsx. fine for now
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const location = useLocation();
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(true);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImage = HERO_IMAGES[heroIndex];

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    requestAnimationFrame(() => {
      scrollTo(location.state.scrollTo);
    });
  }, [location.state]);

  function showPreviousHero() {
    setHeroIndex((index) =>
      index === 0 ? HERO_IMAGES.length - 1 : index - 1,
    );
  }

  function showNextHero() {
    setHeroIndex((index) => (index + 1) % HERO_IMAGES.length);
  }

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen font-mono font-semibold">
      <Nav />

      {/* --- title --- */}
      <section
        id="title"
        className="pt-20 sm:pt-16 px-6 sm:px-10 py-16 sm:py-24 min-h-[85vh] flex flex-col justify-center"
      >
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[minmax(420px,0.75fr)_minmax(500px,0.95fr)] xl:grid-cols-[minmax(500px,0.78fr)_minmax(620px,0.92fr)] lg:items-center">
          {/* name and mini bio */}
          <div className="max-w-3xl min-w-0">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              LUKE SUPAN
            </h1>

            <div className="flex flex-col gap-1 pl-4 sm:pl-2 border-l border-white/20">
            
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                CS grad from UCF, Magna Cum Laude, May 2026.
              </p>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Looking for Software Engineer positions.
              </p>
              <br></br>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
                Working on full stack projects, including a job application tracker.
                <br></br>
                Maintaining a role-based stat tracking site (Power Level) and a portfolio site for a prospective UF grad student.
              </p>
            </div>
          </div>

          {/* photo */}
          <HeroCarousel
            images={HERO_IMAGES}
            activeIndex={heroIndex}
            image={heroImage}
            onPrevious={showPreviousHero}
            onNext={showNextHero}
            onSelect={setHeroIndex}
          />
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

          <Reveal delay={PROJECTS.length * 80 + 80}>
            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="mb-5 text-base uppercase tracking-widest text-white/45">
                Other Work
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {OTHER_PROJECTS.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-sm border border-white/10 p-5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-base text-white/80">
                        {project.name}
                      </h3>
                      <span className="text-xs text-white/35">
                        {project.year}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-white/55">
                      {project.summary}
                    </p>
                    <p className="text-xs tracking-wide text-white/45">
                      {project.stack.join(" / ")}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
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
                For more information on the story behind each project, click on
                the project cards in the{" "}
                <span
                  className="text-white/80 hover:text-white transition-colors cursor-pointer underline"
                  onClick={() => scrollTo("projects")}
                >
                  projects
                </span>{" "}
                section.
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

function HeroCarousel({
  images,
  activeIndex,
  image,
  onPrevious,
  onNext,
  onSelect,
}) {
  return (
    <div className="min-w-0 lg:justify-self-end">
      <div className="group relative w-full max-w-[980px] overflow-hidden rounded-lg border border-white/10 bg-[#111111] aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2]">
        <img
          src={image.src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-110 object-cover ${image.position} opacity-25 blur-2xl transition-opacity duration-500`}
        />
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`relative z-10 h-full w-full object-contain ${image.position}`}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-10">
          <div className="flex gap-2">
            {images.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Show hero image ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full border border-white/50 transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous hero image"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/25 text-lg text-white/75 transition-colors hover:border-white/50 hover:text-white"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next hero image"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/25 text-lg text-white/75 transition-colors hover:border-white/50 hover:text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
