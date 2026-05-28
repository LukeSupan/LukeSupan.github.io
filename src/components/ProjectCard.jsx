import { useState } from "react";
import { Reveal } from "./Animated";

export function ProjectCard({ project, delay }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Reveal direction="up" delay={delay}>
      <a href={project.href} className="group flex flex-col overflow-hidden">
        {/* image area */}
        <div
          className="relative w-full bg-white/4 overflow-hidden flex items-center justify-center mb-4"
          style={{ aspectRatio: "16/9" }}
        >
          {!imgFailed ? (
            <img
              src={project.image}
              alt={project.name}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-500"
            />
          ) : (
            <span className="text-s text-white/20 uppercase tracking-widest px-4 text-center">
              {project.name}
            </span>
          )}
        </div>

        {/* info */}
        <div className="flex flex-col gap-2">
          <span className="text-base text-white/85 tracking-wide group-hover:text-white transition-colors duration-150">
            {project.name}
          </span>
          <p className="text-sm text-white/55 leading-relaxed">
            {project.description}
          </p>
          <p className="text-s text-white/60 mt-1 tracking-wide">
            {project.stack.join(" / ")}
          </p>
        </div>
      </a>
    </Reveal>
  );
}
