import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import beachLuke from "../assets/hero/beachluke-hero.jpg";
import enolaImage from "../assets/hero/enolaimage-hero.jpg";
import natureImage from "../assets/hero/natureimage-hero.jpg";
import supan from "../assets/supan.pdf";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Animated";

import { OTHER_PROJECTS, PROJECTS } from "../data/Projects";
import { SKILLS } from "../data/Skills";

const HERO_IMAGES = [
  {
    src: beachLuke,
    alt: "Luke Supan at the beach",
    position: "object-[50%_22%]",
  },
  {
    src: enolaImage,
    alt: "Luke Supan outdoors at the Enola Gay",
    position: "object-[50%_32%]",
  },
  {
    src: natureImage,
    alt: "Luke Supan outside in Colorado",
    position: "object-[50%_28%]",
  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const location = useLocation();
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImage = HERO_IMAGES[heroIndex];

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    requestAnimationFrame(() => {
      scrollTo(location.state.scrollTo);
    });
  }, [location.state]);

  useEffect(() => {
    const preloadedImages = HERO_IMAGES.map(({ src }) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      return image;
    });

    return () => {
      preloadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1c1c1c] font-mono font-semibold text-white">
      <Nav />

      <main>
        <section
          id="title"
          className="relative isolate flex min-h-[82vh] items-center px-6 pb-12 pt-24 sm:px-10"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[#1c1c1c]" />

          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.45fr)] lg:items-center">
            <Reveal>
              <div className="max-w-4xl">
                <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-normal sm:text-7xl lg:text-8xl">
                  LUKE SUPAN
                </h1>

                <div className="mt-8 max-w-3xl border-l border-white/16 pl-4 text-lg leading-relaxed text-white/72 sm:text-xl">
                  <p>CS grad from UCF, Magna Cum Laude, May 2026.</p>
                  <p className="mt-2">
                    Looking for Software Engineer positions.
                  </p>
                  <p className="mt-6">
                    Working on full stack projects, including a Claude API-based intelligent notepad.
                    Maintaining a role-based stat tracking site (Power
                    Level) and a portfolio site for a prospective UF grad
                    student.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => scrollTo("projects")}
                    className="border border-white/80 bg-white px-4 py-3 text-sm text-[#171717] transition-colors hover:bg-emerald-100"
                  >
                    view projects
                  </button>
                  <a
                    href={supan}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 px-4 py-3 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white"
                  >
                    resume.pdf
                  </a>
                  <a
                    href="mailto:lukesupan@outlook.com"
                    className="border border-white/20 px-4 py-3 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white"
                  >
                    email me
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} direction="left">
              <HeroCarousel
                images={HERO_IMAGES}
                activeIndex={heroIndex}
                image={heroImage}
                onPrevious={() =>
                  setHeroIndex((index) =>
                    index === 0 ? HERO_IMAGES.length - 1 : index - 1,
                  )
                }
                onNext={() =>
                  setHeroIndex((index) => (index + 1) % HERO_IMAGES.length)
                }
                onSelect={setHeroIndex}
              />
            </Reveal>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Selected Work"
              title="PROJECTS"
              intro="My favorite projects that I've worked on."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.num}
                  project={project}
                  delay={index * 70 + 80}
                />
              ))}
            </div>

            <Reveal delay={220}>
              <MoreWork />
            </Reveal>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-white/10 px-6 py-20 sm:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(360px,0.55fr)]">
            <Reveal>
              <div>
                <SectionLabel>About</SectionLabel>
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-white/72">
                  <p>
                    I graduated from UCF Magna Cum Laude as a Computer Science
                    major with a 3.9 GPA in May, 2026.
                  </p>
                  <p>
                    I enjoy making useful/fun projects for myself and my
                    friends. I started with simple CLI tools, eventually moving
                    to full-stack web apps and Unity for some game dev.

                    I have an interest in AI powered applications, and am currently working on a Claude API Skilljar certification.
                  </p>
                  <p>
                    For more information on the story behind each project, click
                    on the project cards in the{" "}
                    <span
                      className="cursor-pointer text-white/80 underline underline-offset-4 transition-colors hover:text-white"
                      onClick={() => scrollTo("projects")}
                    >
                      projects
                    </span>{" "}
                    section.
                  </p>
                </div>

                <div className="mt-10">
                  <InfoPanel
                    label="Education"
                    title="University of Central Florida"
                    body="B.S. Computer Science / GPA 3.9 / Magna Cum Laude"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border-l border-white/10 pl-6">
                <SectionLabel>Skills</SectionLabel>
                <div className="space-y-7">
                  {SKILLS.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-xs uppercase tracking-widest text-amber-100/55">
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/68"
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
          </div>
        </section>
      </main>

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
    <figure className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:justify-self-end">
      <div className="absolute -left-5 top-8 hidden h-[calc(100%-3rem)] w-full border border-amber-200/20 lg:block" />
      <div className="relative overflow-hidden rounded-md border border-white/12 bg-[#101010]">
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width="960"
          height="1200"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className={`aspect-[4/5] h-full w-full object-cover ${image.position}`}
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-16">
          <div className="flex gap-2">
            {images.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Show hero image ${index + 1}`}
                className={`h-2.5 w-2.5 border border-white/55 transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-black/20"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous hero image"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/35 text-lg text-white/75 transition-colors hover:border-emerald-200/50 hover:text-white"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next hero image"
              className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/35 text-lg text-white/75 transition-colors hover:border-emerald-200/50 hover:text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}

function MoreWork() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8">
      <div className="mb-5">
        <h2 className="text-xl text-white/90">Additional Work</h2>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {OTHER_PROJECTS.map((project) => (
          <article
            key={project.name}
            className="grid gap-3 py-4 md:grid-cols-[minmax(170px,0.35fr)_minmax(0,1fr)_minmax(180px,0.35fr)] md:items-center"
          >
            <div>
              <h3 className="text-base text-white/82">{project.name}</h3>
              <span className="text-xs text-white/35">{project.year}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/55">
              {project.summary}
            </p>
            <p className="text-xs leading-relaxed text-amber-100/50 md:text-right">
              {project.stack.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <Reveal>
      <div className="max-w-4xl">
        <p className="mb-4 text-xs uppercase tracking-widest text-emerald-100/50">
          {eyebrow}
        </p>
        <h2 className="text-3xl leading-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
          {intro}
        </p>
      </div>
    </Reveal>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-5 text-xs uppercase tracking-widest text-emerald-100/50">
      {children}
    </p>
  );
}

function InfoPanel({ label, title, body }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.03] p-5">
      <p className="mb-4 text-xs uppercase tracking-widest text-white/35">
        {label}
      </p>
      <h3 className="mb-3 text-base text-white/88">{title}</h3>
      <p className="text-sm leading-relaxed text-white/56">{body}</p>
    </article>
  );
}
