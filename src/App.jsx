import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import resumePdf from "./SupanResume.pdf";

// three for now. honestly really just need two but you gotta have a square to have a pentagon
// could shoot for up arrow down arrow but. eh. this is stylish
const shapes = ["triangle", "square", "pentagon"];

const gallerySize = {
  width: 860,
  height: 720,
};

const desktopGridSize = 64;
const mobileGridSize = 82;

const shapePages = {
  triangle: {
    eyebrow: "about",
    body: "a small home base for the work, experiments, and odd little interface ideas.",
  },
  square: {
    eyebrow: "projects",
    body: "four anchor projects, with room for the smaller things that come next.",
  },
  pentagon: {
    eyebrow: "gallery",
    body: "music, games, and the personal corners that make the portfolio feel lived in.",
  },
};

const aboutNotes = [
  ["base", "computer science, web interfaces, small useful tools"],
  ["taste", "minimal pages, playful systems, clean interactions"],
  ["status", "building the portfolio while the shape idea evolves"],
];

const projectDrafts = [
  {
    detail: "a small stats-first idea for reading progress at a glance.",
    label: "power level",
  },
  {
    detail: "classic arcade motion, tuned for a quiet portfolio corner.",
    label: "pong",
  },
  {
    detail: "a sharper project page for the thing with the strange name.",
    label: "psycall",
  },
  {
    detail: "this site, treated as an interface experiment instead of a resume shell.",
    label: "portfolio",
  },
];

const galleryDrafts = [
  {
    detail: "playlists, current rotation, or whatever has been looping lately.",
    label: "spotify",
  },
  {
    detail: "stats, profile, clips, or a small shrine to the strategy grind.",
    label: "halo wars",
  },
  {
    detail: "a drawer for links, images, and tiny finds that do not need a category.",
    label: "neat",
  },
  {
    detail: "games played, games waiting, and the quiet pressure of the backlog.",
    label: "backloggd",
  },
];

function getLinksForShape(shape) {
  if (shape === "square") {
    return [
      { href: "#", label: "power level" },
      { href: "#", label: "pong" },
      { href: "#", label: "psycall" },
      { href: "#", label: "portfolio" },
    ];
  }

  if (shape === "pentagon") {
    return [
      { href: "#", label: "spotify" },
      { href: "#", label: "halo wars" },
      { href: "#", label: "neat" },
      { href: "#", label: "backloggd" },
    ];
  }

  return [
    { href: "mailto:lukesupan@outlook.com", label: "email" },
    { href: "https://github.com/LukeSupan", label: "github" },
    { href: "#", label: "linkedin" },
    { href: resumePdf, label: "resume" },
  ];
}

function ShapeLinks({ className, links }) {
  return (
    <nav className={className}>
      {links.map((link) => {
        const isPlaceholder = link.href === "#";
        const opensNewTab =
          !isPlaceholder && !link.href.startsWith("mailto:");

        return (
          <a
            className="transition hover:text-white"
            href={link.href}
            key={link.label}
            onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
            rel={opensNewTab ? "noreferrer" : undefined}
            target={opensNewTab ? "_blank" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

function DetailMark({ shape }) {
  return (
    <span className={`detail-mark shape-${shape}`} aria-hidden="true">
      <span className="polygon-outline"></span>
      <span className="polygon-fill"></span>
    </span>
  );
}

function ShapeDetailSection({
  isTransitioning,
  links,
  onNext,
  onPrevious,
  shape,
  visualShape,
}) {
  const page = shapePages[shape];
  const detailControls = (
    <div className="detail-controls" aria-label="section controls">
      <button
        aria-label="previous shape"
        className="detail-button"
        onClick={onPrevious}
        type="button"
      >
        &lt;
      </button>
      <button
        aria-label="next shape"
        className="detail-button"
        onClick={onNext}
        type="button"
      >
        &gt;
      </button>
    </div>
  );

  return (
    <section className={`detail-section detail-${shape}`}>
      <div className="detail-shell">
        <header className="detail-topbar">
          <div className="detail-heading">
            <DetailMark shape={visualShape} />
            <p className={isTransitioning ? "is-changing" : ""}>{page.eyebrow}</p>
          </div>

          <span aria-hidden="true" className="detail-control-spacer"></span>

          {detailControls}
        </header>

        <div className={`detail-content ${isTransitioning ? "is-changing" : ""}`}>
          {shape === "triangle" && (
            <div className="about-layout">
              <p className="detail-statement">{page.body}</p>

              <dl className="about-notes">
                {aboutNotes.map(([label, value]) => (
                  <div className="about-note" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {shape === "square" && (
            <>
              <p className="detail-statement">{page.body}</p>

              <div className="project-list">
                {projectDrafts.map((project, index) => (
                  <a
                    className="project-row"
                    href="#"
                    key={project.label}
                    onClick={(event) => event.preventDefault()}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.label}</strong>
                    <em>{project.detail}</em>
                  </a>
                ))}
              </div>
            </>
          )}

          {shape === "pentagon" && (
            <>
              <p className="detail-statement">{page.body}</p>

              <div className="gallery-grid">
                {galleryDrafts.map((item) => (
                  <a
                    className="gallery-item"
                    href="#"
                    key={item.label}
                    onClick={(event) => event.preventDefault()}
                  >
                    <span>{item.label}</span>
                    <p>{item.detail}</p>
                  </a>
                ))}
              </div>

              <ShapeLinks className="detail-links" links={links} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function getPreviousShapeIndex(currentIndex) {
  return currentIndex === 0 ? shapes.length - 1 : currentIndex - 1;
}

function getNextShapeIndex(currentIndex) {
  return currentIndex === shapes.length - 1 ? 0 : currentIndex + 1;
}

function getGalleryScale() {
  if (typeof window === "undefined") {
    return 1;
  }

  return Math.min(
    1,
    (window.innerWidth * 0.92) / gallerySize.width,
    (window.innerHeight * 0.86) / gallerySize.height,
  );
}

function App() {
  // polygons current visual
  const [visualShapeIndex, setVisualShapeIndex] = useState(0);

  // polygons current ruleset for displaying content (changes after visual)
  const [contentShapeIndex, setContentShapeIndex] = useState(0);

  // hides text/links briefly while shape-specific content swaps
  const [isTextTransitioning, setIsTextTransitioning] = useState(false);

  const [galleryScale, setGalleryScale] = useState(getGalleryScale);

  // used to point at middle
  const heroRef = useRef(null);

  // Tracks if the page already did its first automatic scroll to the middle.
  const hasScrolledToHeroOnLoad = useRef(false);

  const basePixelRatio = useRef(
    typeof window === "undefined" ? 1 : window.devicePixelRatio || 1,
  );
  const galleryScaleFrame = useRef(null);
  const gridSizeFrame = useRef(null);

  // store content swap timer so it can be cancelled if you shape swap again instantly
  const contentSwapTimeout = useRef(null);

  // store text transition timer so it stays consistent if you spam shape swap
  const textTransitionTimeout = useRef(null);

  // briefly blocks downward scroll while a shape swap is settling
  const scrollDownLockTimeout = useRef(null);
  const isScrollDownLocked = useRef(false);
  const touchStartY = useRef(null);
  const shouldSkipNextHeroScroll = useRef(false);
  const preservedDetailScrollY = useRef(null);

  // index to shape converter
  const visualShape = shapes[visualShapeIndex];
  const contentShape = shapes[contentShapeIndex];
  const heroLinks = getLinksForShape(contentShape);

  function lockScrollDown() {
    window.clearTimeout(scrollDownLockTimeout.current);
    isScrollDownLocked.current = true;

    scrollDownLockTimeout.current = window.setTimeout(() => {
      isScrollDownLocked.current = false;
    }, 850);
  }

  // change shape on button press
  const changeShape = useCallback((getShapeIndex, scrollToHero = true) => {
    const nextShapeIndex = getShapeIndex(visualShapeIndex);

    // clear an old timeout if it exists
    window.clearTimeout(contentSwapTimeout.current);
    window.clearTimeout(textTransitionTimeout.current);
    setIsTextTransitioning(true);
    setVisualShapeIndex(nextShapeIndex);
    shouldSkipNextHeroScroll.current = !scrollToHero;
    preservedDetailScrollY.current = scrollToHero ? null : window.scrollY;
    lockScrollDown();

    if (scrollToHero) {
      // scroll to the shape
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // set timeout until we swap content. less jank
    contentSwapTimeout.current = window.setTimeout(() => {
      setContentShapeIndex(nextShapeIndex);
    }, 475);

    // keep text hidden until the polygon has been stable for a moment
    textTransitionTimeout.current = window.setTimeout(() => {
      setIsTextTransitioning(false);
    }, 700);
  }, [visualShapeIndex]);

  function showPreviousShape({ scrollToHero = true } = {}) {
    changeShape(getPreviousShapeIndex, scrollToHero);
  }

  function showNextShape({ scrollToHero = true } = {}) {
    changeShape(getNextShapeIndex, scrollToHero);
  }

  // change shape with arrow keys on desktop
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        changeShape(getPreviousShapeIndex);
      }

      if (event.key === "ArrowRight") {
        changeShape(getNextShapeIndex);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [changeShape]);

  // timer cancel insurance
  useEffect(() => {
    return () => {
      window.clearTimeout(contentSwapTimeout.current);
      window.clearTimeout(textTransitionTimeout.current);
      window.clearTimeout(scrollDownLockTimeout.current);
      window.cancelAnimationFrame(galleryScaleFrame.current);
      window.cancelAnimationFrame(gridSizeFrame.current);
    };
  }, []);

  useEffect(() => {
    function isLockedDownScroll(scrollAmount) {
      return isScrollDownLocked.current && scrollAmount > 0;
    }

    function handleWheel(event) {
      if (isLockedDownScroll(event.deltaY)) {
        event.preventDefault();
      }
    }

    function handleTouchStart(event) {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(event) {
      if (touchStartY.current === null) {
        return;
      }

      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const scrollAmount = touchStartY.current - currentY;

      if (isLockedDownScroll(scrollAmount)) {
        event.preventDefault();
      }
    }

    function handleScrollKey(event) {
      const downScrollKeys = new Set(["ArrowDown", "PageDown", "End", " "]);

      if (downScrollKeys.has(event.key) && isScrollDownLocked.current) {
        event.preventDefault();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleScrollKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleScrollKey);
    };
  }, []);

  useEffect(() => {
    function updateGridSize() {
      const browserZoom =
        (window.devicePixelRatio || basePixelRatio.current) /
        basePixelRatio.current;
      const pinchZoom = window.visualViewport?.scale || 1;
      const visibleScale = Math.max(browserZoom * pinchZoom, 0.1);
      const gridSize =
        window.innerWidth < 640 ? mobileGridSize : desktopGridSize;

      document.documentElement.style.setProperty(
        "--grid-size",
        `${gridSize / visibleScale}px`,
      );
    }

    function queueGridSizeUpdate() {
      window.cancelAnimationFrame(gridSizeFrame.current);
      gridSizeFrame.current = window.requestAnimationFrame(updateGridSize);
    }

    updateGridSize();
    window.addEventListener("resize", queueGridSizeUpdate);
    window.visualViewport?.addEventListener("resize", queueGridSizeUpdate);

    return () => {
      window.removeEventListener("resize", queueGridSizeUpdate);
      window.visualViewport?.removeEventListener("resize", queueGridSizeUpdate);
      window.cancelAnimationFrame(gridSizeFrame.current);
      document.documentElement.style.removeProperty("--grid-size");
    };
  }, []);

  useLayoutEffect(() => {
    function updateGalleryScale() {
      const nextScale = getGalleryScale();
      setGalleryScale((currentScale) =>
        currentScale === nextScale ? currentScale : nextScale,
      );
    }

    function queueGalleryScaleUpdate() {
      window.cancelAnimationFrame(galleryScaleFrame.current);
      galleryScaleFrame.current = window.requestAnimationFrame(updateGalleryScale);
    }

    updateGalleryScale();
    window.addEventListener("resize", queueGalleryScaleUpdate);

    return () => {
      window.removeEventListener("resize", queueGalleryScaleUpdate);
      window.cancelAnimationFrame(galleryScaleFrame.current);
    };
  }, []);

  useLayoutEffect(() => {
    // middle of page section
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    if (!hasScrolledToHeroOnLoad.current) {
      hero.scrollIntoView({ block: "start" });
      hasScrolledToHeroOnLoad.current = true;
      return;
    }

    if (preservedDetailScrollY.current !== null) {
      const scrollY = preservedDetailScrollY.current;

      preservedDetailScrollY.current = null;
      shouldSkipNextHeroScroll.current = false;
      window.scrollTo({ top: scrollY, left: window.scrollX });
      return;
    }

    if (shouldSkipNextHeroScroll.current) {
      shouldSkipNextHeroScroll.current = false;
      return;
    }

    hero.scrollIntoView({ block: "start" });
  }, [contentShape]);

  return (
    <main className="site-shell text-white">
      <section className="hero-section" ref={heroRef}>
        <div
          className="desktop-gallery-frame"
          style={{
            height: `${gallerySize.height * galleryScale}px`,
            width: `${gallerySize.width * galleryScale}px`,
          }}
        >
          <div
            className="desktop-polygon-gallery"
            style={{ transform: `scale(${galleryScale})` }}
          >
            <button
              aria-label="previous shape"
              className="desktop-shape-button desktop-shape-button-previous"
              onClick={showPreviousShape}
              type="button"
            >
              &lt;
            </button>

            <button
              aria-label="next shape"
              className="desktop-shape-button desktop-shape-button-next"
              onClick={showNextShape}
              type="button"
            >
              &gt;
            </button>

            <div
              className={`polygon-content relative z-10 ${
                isTextTransitioning ? "is-covered" : ""
              }`}
            >
              <h1 className="polygon-name font-normal">luke supan</h1>

              <ShapeLinks
                className={`polygon-links text-white/55 ${
                  contentShape === "square"
                    ? "polygon-links-grid"
                    : "flex flex-col items-center"
                }`}
                links={heroLinks}
              />
            </div>

            <div className={`polygon-mark shape-${visualShape}`} aria-hidden="true">
              <div className="polygon-outline"></div>
              <div className="polygon-fill"></div>
            </div>

          </div>
        </div>

        <div className="mobile-hero-stack">
          <h1 className="hero-name">luke supan</h1>

          <div className="shape-motion-row">
            <button
              aria-label="previous shape"
              className="mobile-shape-button"
              onClick={showPreviousShape}
              type="button"
            >
              &lt;
            </button>

            <div className={`shape-object shape-${visualShape}`} aria-hidden="true">
              <div className="polygon-outline"></div>
              <div className="polygon-fill"></div>
            </div>

            <button
              aria-label="next shape"
              className="mobile-shape-button"
              onClick={showNextShape}
              type="button"
            >
              &gt;
            </button>
          </div>

          <ShapeLinks
            className={`hero-links mobile-hero-links ${
              isTextTransitioning ? "is-changing" : ""
            }`}
            links={heroLinks}
          />
        </div>
      </section>

      <ShapeDetailSection
        isTransitioning={isTextTransitioning}
        links={heroLinks}
        onNext={() => showNextShape({ scrollToHero: false })}
        onPrevious={() => showPreviousShape({ scrollToHero: false })}
        shape={contentShape}
        visualShape={visualShape}
      />
    </main>
  );
}

export default App;
