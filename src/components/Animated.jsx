import { useEffect, useRef, useState } from "react";

// --- hook for reveal ---
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, optionsRef.current);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// --- reveal ---
export function Reveal({ children, delay = 0, direction = "up" }) {
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

// --- collapsible ---
// measures content height to animate smoothly
export function Collapsible({ open, className = "", children }) {
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(() => {
      if (innerRef.current) setHeight(innerRef.current.scrollHeight);
    });
    ro.observe(innerRef.current);
    setHeight(innerRef.current.scrollHeight);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={className}
      style={{
        maxHeight: open ? height : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 500ms ease-in-out, opacity 300ms ease-in-out",
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
