import { useState } from "react";

function initialsFor(name) {
  return name
    .split(/[\s:-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ProjectVisual({
  project,
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = src || project.thumbnail;
  const shouldShowImage = imageSrc && !imgFailed;

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#262626] border border-white/10 ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {shouldShowImage ? (
        <img
          src={imageSrc}
          alt={alt || project.name}
          onError={() => setImgFailed(true)}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-white/40">
              {label || project.status || project.year}
            </span>
            <span className="text-xs text-white/35">{project.num}</span>
          </div>

          <div>
            <span className="mb-4 block text-5xl font-bold text-white/15 sm:text-6xl">
              {initialsFor(project.name)}
            </span>
            <p className="text-base leading-tight text-white/75">{project.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
