import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import resumePdf from "./SupanResume.pdf";

// three for now. honestly really just need two but you gotta have a square to have a pentagon
// could shoot for up arrow down arrow but. eh. this is stylish
const shapes = ["triangle", "square", "pentagon"];

const gallerySize = {
  width: 860,
  height: 720,
};

const gridSize = 64;

const shapePages = {
  triangle: {
    eyebrow: "triangle page",
    body: "placeholder for triangle content",
  },
  square: {
    eyebrow: "square page",
    body: "placeholder for square content",
  },
  pentagon: {
    eyebrow: "pentagon page",
    body: "placeholder for pentagon content",
  },
};

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

  // white polygon cover that hides the text during shape changes
  const [isTextCoverVisible, setIsTextCoverVisible] = useState(false);

  const [galleryScale, setGalleryScale] = useState(getGalleryScale);

  // used to point at middle
  const heroRef = useRef(null);

  // Tracks if the page already did its first automatic scroll to the middle.
  const hasScrolledToHeroOnLoad = useRef(false);

  const basePixelRatio = useRef(
    typeof window === "undefined" ? 1 : window.devicePixelRatio || 1,
  );

  // store content swap timer so it can be cancelled if you shape swap again instantly
  const contentSwapTimeout = useRef(null);

  // store text cover timer so it stays visible if you spam shape swap
  const textCoverTimeout = useRef(null);

  // index to shape converter
  const visualShape = shapes[visualShapeIndex];
  const contentShape = shapes[contentShapeIndex];
  const pageContent = shapePages[contentShape];

  // change shape on button press
  const changeShape = useCallback((getShapeIndex) => {
    const nextShapeIndex = getShapeIndex(visualShapeIndex);

    // clear an old timeout if it exists
    window.clearTimeout(contentSwapTimeout.current);
    window.clearTimeout(textCoverTimeout.current);
    setIsTextCoverVisible(true);
    setVisualShapeIndex(nextShapeIndex);

    // scroll to the shape
    heroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // set timeout until we swap content. less jank
    contentSwapTimeout.current = window.setTimeout(() => {
      setContentShapeIndex(nextShapeIndex);
    }, 475);

    // keep the cover on until the polygon has been stable for a moment
    textCoverTimeout.current = window.setTimeout(() => {
      setIsTextCoverVisible(false);
    }, 700);
  }, [visualShapeIndex]);

  function showPreviousShape() {
    changeShape(getPreviousShapeIndex);
  }

  function showNextShape() {
    changeShape(getNextShapeIndex);
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
      window.clearTimeout(textCoverTimeout.current);
    };
  }, []);

  useEffect(() => {
    function updateGridSize() {
      const browserZoom =
        (window.devicePixelRatio || basePixelRatio.current) /
        basePixelRatio.current;
      const pinchZoom = window.visualViewport?.scale || 1;
      const visibleScale = Math.max(browserZoom * pinchZoom, 0.1);

      document.documentElement.style.setProperty(
        "--grid-size",
        `${gridSize / visibleScale}px`,
      );
    }

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    window.visualViewport?.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
      window.visualViewport?.removeEventListener("resize", updateGridSize);
      document.documentElement.style.removeProperty("--grid-size");
    };
  }, []);

  useLayoutEffect(() => {
    function updateGalleryScale() {
      setGalleryScale(getGalleryScale());
    }

    updateGalleryScale();
    window.addEventListener("resize", updateGalleryScale);

    return () => {
      window.removeEventListener("resize", updateGalleryScale);
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
                isTextCoverVisible ? "is-covered" : ""
              }`}
            >
              <h1 className="polygon-name font-normal">luke supan</h1>

              <nav className="polygon-links flex flex-col items-center text-white/55">
                <a
                  className="transition hover:text-white"
                  href="mailto:lukesupan@outlook.com"
                  target="_blank"
                >
                  email
                </a>
                <a
                  className="transition hover:text-white"
                  href="https://github.com/LukeSupan"
                  target="_blank"
                >
                  github
                </a>
                <a className="transition hover:text-white" href="#" target="_blank">
                  linkedin
                </a>
                <a
                  className="transition hover:text-white"
                  href={resumePdf}
                  target="_blank"
                >
                  resume
                </a>
              </nav>
            </div>

            <div className={`polygon-mark shape-${visualShape}`} aria-hidden="true">
              <div className="polygon-outline"></div>
              <div className="polygon-fill"></div>
            </div>

            <div
              className={`polygon-text-cover shape-${visualShape} ${
                isTextCoverVisible ? "is-visible" : ""
              }`}
              aria-hidden="true"
            >
              <div className="polygon-text-cover-fill"></div>
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

          <nav className="hero-links">
            <a
              className="transition hover:text-white"
              href="mailto:lukesupan@outlook.com"
              target="_blank"
            >
              email
            </a>
            <a
              className="transition hover:text-white"
              href="https://github.com/LukeSupan"
              target="_blank"
            >
              github
            </a>
            <a className="transition hover:text-white" href="#" target="_blank">
              linkedin
            </a>
            <a
              className="transition hover:text-white"
              href={resumePdf}
              target="_blank"
            >
              resume
            </a>
          </nav>
        </div>
      </section>

      <section className="grid min-h-screen place-items-center px-6 text-center text-white/55">
        <div>
          <p className="text-sm">{pageContent.eyebrow}</p>
          <p className="mt-4 max-w-md text-xs leading-6">{pageContent.body}</p>
        </div>
      </section>
    </main>
  );
}

export default App;
