import { useState } from "react";
import { Reveal } from "./Animated";

export function ProjectCard({ project, delay }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Reveal direction="up" delay={delay}>
      <a
        href={project.href}
        className="group flex flex-col border border-white/10 hover:border-white/30 transition-colors duration-200 overflow-hidden"
      >
        {/* image area */}
        <div
          className="relative w-full bg-white/5 overflow-hidden flex items-center justify-center"
          style={{ aspectRatio: "16/9" }}
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

        {/* info */}
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
                className="text-xs text-[#7dd3a8]/80 border border-[#7dd3a8]/30 px-1.5 py-0.5"
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
