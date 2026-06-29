import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ProjectVisual } from "../components/ProjectVisual";
import { Reveal } from "../components/Animated";
import { getProjectById, PROJECTS } from "../data/Projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (!selectedMedia) return;

    function onKeyDown(event) {
      if (event.key === "Escape") setSelectedMedia(null);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedMedia]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1c1c1c] font-mono font-semibold text-white">
        <Nav />
        <main className="px-6 pt-32 pb-20 sm:px-10">
          <p className="mb-4 text-sm uppercase tracking-widest text-white/40">
            Project not found
          </p>
          <h1 className="mb-8 text-4xl font-bold tracking-normal sm:text-6xl">
            That project page does not exist.
          </h1>
          <Link
            to="/"
            className="text-sm text-white/65 underline underline-offset-4 transition-colors hover:text-white"
          >
            back home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const otherProjects = PROJECTS.filter((item) => item.id !== project.id).slice(
    0,
    3,
  );

  return (
    <div className="min-h-screen bg-[#1c1c1c] font-mono font-semibold text-white">
      <Nav />

      <main>
        <section className="px-6 pt-24 pb-10 sm:px-10 sm:pt-28">
          <Reveal>
            <div className="max-w-5xl">
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="mb-7 inline-block text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white"
              >
                back to projects
              </Link>
              <p className="mb-4 text-sm uppercase tracking-widest text-white/40">
                {project.num} / {project.dates}
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-none tracking-normal sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-white/75">
                {project.subtitle}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-white/10 px-6 py-6 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetaBlock label="Role" value={project.role} />
            <MetaBlock label="Status" value={project.status} />
            <MetaBlock label="Stack" value={project.stack.join(" / ")} />
            <MetaBlock
              label="Context"
              value={project.affiliation || "Personal project"}
            />
          </div>
        </section>

        <section className="grid gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.35fr)]">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="mb-6 text-2xl uppercase tracking-widest text-white/90">
                Overview
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/75">
                {project.summary}
              </p>
              <div className="flex flex-col gap-6">
                {project.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-white/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="border-l border-white/10 pl-6">
              <h2 className="mb-5 text-base uppercase tracking-widest text-white/70">
                Highlights
              </h2>
              <ul className="flex flex-col gap-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm leading-relaxed text-white/60">
                    {highlight}
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-4 text-base uppercase tracking-widest text-white/70">
                    Links
                  </h2>
                  <div className="flex flex-col gap-3">
                    {project.links.map((link) => (
                      <ProjectLink key={link.label} link={link} />
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </Reveal>
        </section>

        {project.media.length > 0 && (
          <section className="px-6 py-12 sm:px-10">
            <h2 className="mb-8 text-2xl uppercase tracking-widest text-white/90">
              Media
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {project.media.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <article className="overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setSelectedMedia(item)}
                      className="block w-full cursor-zoom-in bg-transparent p-0 text-left"
                    >
                      <ProjectVisual
                        project={project}
                        src={item.image}
                        alt={item.title}
                        label={item.title}
                        fit="contain"
                      />
                    </button>
                    <div className="p-5">
                      <h3 className="mb-3 text-base text-white/85">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/55">
                        {item.caption}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="border-t border-white/10 px-6 py-16 sm:px-10">
          <h2 className="mb-8 text-2xl uppercase tracking-widest text-white/90">
            More Projects
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className="rounded-sm border border-white/10 p-5 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
              >
                <span className="mb-3 block text-xs text-white/35">
                  {item.num} / {item.year}
                </span>
                <span className="mb-3 block text-base text-white/85">
                  {item.name}
                </span>
                <span className="text-sm leading-relaxed text-white/50">
                  {item.summary}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {selectedMedia && (
        <MediaLightbox
          media={selectedMedia}
          project={project}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      <Footer />
    </div>
  );
}

function MetaBlock({ label, value }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-widest text-white/35">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-white/75">{value}</p>
    </div>
  );
}

function ProjectLink({ link }) {
  if (!link.href) {
    return (
      <span className="text-sm text-white/35">
        {link.label} <span className="text-white/25">(link coming soon)</span>
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white/65 underline underline-offset-4 transition-colors hover:text-white"
    >
      {link.label}
    </a>
  );
}

function MediaLightbox({ media, project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 sm:px-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-full w-full max-w-6xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="border border-white/20 px-3 py-2 text-sm text-white/70 transition-colors hover:border-white/45 hover:text-white"
            aria-label="Close media viewer"
          >
            close
          </button>
        </div>

        <div className="min-h-0 overflow-hidden rounded-sm border border-white/15 bg-[#111111]">
          <img
            src={media.image}
            alt={media.title}
            className="max-h-[72vh] w-full object-contain"
          />
        </div>

        <div className="border-x border-b border-white/15 bg-[#111111] p-5">
          <p className="mb-2 text-base text-white/90">{media.title}</p>
          <p className="text-sm leading-relaxed text-white/60">
            {media.caption}
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/30">
            {project.name}
          </p>
        </div>
      </div>
    </div>
  );
}
