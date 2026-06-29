import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import supan from "../assets/supan.pdf";

function scrollTo(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior });
}

export function Nav() {
  const [scrollPct, setScrollPct] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  function goToSection(id) {
    if (location.pathname === "/") {
      scrollTo(id);
      return;
    }

    navigate("/", { state: { scrollTo: id } });
  }

  useEffect(() => {
    // Prevent horizontal overscroll from exposing the gap behind the nav
    const prev = document.body.style.overscrollBehaviorX;
    document.body.style.overscrollBehaviorX = "none";
    return () => {
      document.body.style.overscrollBehaviorX = prev;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;

      setScrollPct(total > 0 ? (currentY / total) * 100 : 0);

      if (currentY < lastScrollY.current) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setNavVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-screen h-[2px] bg-transparent z-50">
        <div
          className="h-full bg-white/80"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-screen z-40 border-b border-white/10 bg-[#111111]/88 px-6 py-4 backdrop-blur sm:px-10 flex justify-between items-center transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span
          className="text-base text-white/65 hover:text-white transition-colors cursor-pointer"
          onClick={() => goToSection("title")}
        >
          luke_supan
        </span>

        <div className="flex gap-4 sm:gap-10 items-center">
          <button
            type="button"
            onClick={() => goToSection("projects")}
            className="text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
          >
            projects
          </button>
          <button
            type="button"
            onClick={() => goToSection("about")}
            className="text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
          >
            about
          </button>
          <a
            href={supan}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline text-sm text-white/65 hover:text-white transition-colors underline underline-offset-4"
          >
            resume.pdf
          </a>
        </div>
      </nav>
    </>
  );
}
