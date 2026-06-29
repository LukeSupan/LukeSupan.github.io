import { Link } from "react-router-dom";
import { Reveal } from "./Animated";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, delay }) {
  return (
    <Reveal direction="up" delay={delay}>
      <Link
        to={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden"
      >
        <ProjectVisual
          project={project}
          className="mb-4 rounded-sm"
          imageClassName="opacity-70 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
        />

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            <span className="text-xs text-white/35">{project.num}</span>
            <span className="text-xs text-white/35">{project.year}</span>
          </div>
          <span className="text-base text-white/85 transition-colors duration-150 group-hover:text-white">
            {project.name}
          </span>
          <p className="text-sm text-white/55 leading-relaxed">
            {project.summary}
          </p>
          <p className="mt-auto pt-2 text-xs tracking-wide text-white/55">
            {project.stack.join(" / ")}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
