import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  aboutImages,
  aboutNotes,
  galleryDrafts,
  galleryImages,
  getLinksForShape,
  projectDrafts,
  shapePages,
} from "./content";

// three for now. honestly really just need two but you gotta have a square to have a pentagon
// could shoot for up arrow down arrow but. eh. this is stylish
const shapes = ["triangle", "square", "pentagon"];

const gallerySize = {
  width: 860,
  height: 720,
};

const desktopGridSize = 64;
const mobileGridSize = 82;

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

function ProjectImages({ images, onOpen }) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="project-images">
      {images.map((image, index) => (
        <button
          aria-label={`open ${image.alt}`}
          className="image-open-button"
          key={image.src}
          onClick={() => onOpen(images, index)}
          type="button"
        >
          <img
            alt={image.alt}
            decoding="async"
            loading="lazy"
            src={image.src}
          />
        </button>
      ))}
    </div>
  );
}

function GalleryImages({ onOpen }) {
  return (
    <div className="gallery-photo-grid">
      {galleryImages.map((image, index) => (
        <figure className="gallery-photo" key={image.src}>
          <button
            aria-label={`open ${image.alt}`}
            className="image-open-button"
            onClick={() => onOpen(galleryImages, index)}
            type="button"
          >
            <img
              alt={image.alt}
              decoding="async"
              loading="lazy"
              src={image.src}
            />
          </button>
        </figure>
      ))}
    </div>
  );
}

function AboutImages({ onOpen }) {
  return (
    <div className="about-images">
      {aboutImages.map((image, index) => (
        <button
          aria-label={`open ${image.alt}`}
          className={`image-open-button about-image about-image-${image.orientation}`}
          key={image.src}
          onClick={() => onOpen(aboutImages, index)}
          type="button"
        >
          <img
            alt={image.alt}
            decoding="async"
            loading="lazy"
            src={image.src}
          />
        </button>
      ))}
    </div>
  );
}

function ImageLightbox({ lightbox, onClose, onNext, onPrevious }) {
  const touchStartX = useRef(null);
  const image = lightbox?.images[lightbox.index];
  const imageCount = lightbox?.images.length ?? 0;

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, onClose]);

  if (!lightbox || !image) {
    return null;
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const swipeDistance = touchStartX.current - touchEndX;

    touchStartX.current = null;

    if (Math.abs(swipeDistance) < 40) {
      return;
    }

    if (swipeDistance > 0) {
      onNext();
      return;
    }

    onPrevious();
  }

  return (
    <div
      aria-label="image viewer"
      aria-modal="true"
      className="lightbox"
      onClick={onClose}
      role="dialog"
    >
      <button
        aria-label="close image viewer"
        className="lightbox-close"
        onClick={onClose}
        type="button"
      >
        x
      </button>

      <button
        aria-label="previous image"
        className="lightbox-button lightbox-button-previous"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        type="button"
      >
        &lt;
      </button>

      <figure
        className="lightbox-frame"
        onClick={(event) => event.stopPropagation()}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <img alt={image.alt} src={image.src} />
        <figcaption>
          <span>{image.alt}</span>
          <span>
            {lightbox.index + 1} / {imageCount}
          </span>
        </figcaption>
      </figure>

      <button
        aria-label="next image"
        className="lightbox-button lightbox-button-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        type="button"
      >
        &gt;
      </button>
    </div>
  );
}

function ShapeDetailSection({
  isTransitioning,
  onNext,
  onPrevious,
  shape,
  visualShape,
}) {
  const page = shapePages[shape];
  const topbarRef = useRef(null);
  const [isTopbarStuck, setIsTopbarStuck] = useState(false);
  const [lightbox, setLightbox] = useState(null);
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

  useEffect(() => {
    function updateTopbarState() {
      if (!topbarRef.current) {
        return;
      }

      const topOffset = 0;
      const topbarTop = topbarRef.current.getBoundingClientRect().top;

      setIsTopbarStuck(topbarTop <= topOffset + 0.5);
    }

    updateTopbarState();
    window.addEventListener("scroll", updateTopbarState, { passive: true });
    window.addEventListener("resize", updateTopbarState);

    return () => {
      window.removeEventListener("scroll", updateTopbarState);
      window.removeEventListener("resize", updateTopbarState);
    };
  }, []);

  function openLightbox(images, index) {
    if (window.matchMedia("(max-width: 639px)").matches) {
      return;
    }

    setLightbox({ images, index });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function showPreviousLightboxImage() {
    setLightbox((currentLightbox) => {
      if (!currentLightbox) {
        return currentLightbox;
      }

      return {
        ...currentLightbox,
        index:
          currentLightbox.index === 0
            ? currentLightbox.images.length - 1
            : currentLightbox.index - 1,
      };
    });
  }

  function showNextLightboxImage() {
    setLightbox((currentLightbox) => {
      if (!currentLightbox) {
        return currentLightbox;
      }

      return {
        ...currentLightbox,
        index:
          currentLightbox.index === currentLightbox.images.length - 1
            ? 0
            : currentLightbox.index + 1,
      };
    });
  }

  return (
    <section className={`detail-section detail-${shape}`}>
      <div className="detail-shell">
        <header
          className={`detail-topbar ${isTopbarStuck ? "is-stuck" : ""}`}
          ref={topbarRef}
        >
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

              <div className="about-notes">
                {aboutNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>

              <AboutImages onOpen={openLightbox} />
            </div>
          )}

          {shape === "square" && (
            <>
              <p className="detail-statement">{page.body}</p>

              <div className="project-list">
                {projectDrafts.map((project) => (
                  <article
                    className="project-row"
                    key={project.label}
                  >
                    <div className="project-copy">
                      <a
                        className="project-title-link"
                        href={project.href}
                        onClick={
                          project.href === "#"
                            ? (event) => event.preventDefault()
                            : undefined
                        }
                        rel={project.href === "#" ? undefined : "noreferrer"}
                        target={project.href === "#" ? undefined : "_blank"}
                      >
                        <strong>{project.label}</strong>
                      </a>
                      <small>
                        {project.tech} - {project.date}
                      </small>
                      <p>{project.detail}</p>

                      <ul className="project-points">
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <ProjectImages images={project.images} onOpen={openLightbox} />
                    </div>
                  </article>
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
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{item.label}</span>
                    <p>{item.detail}</p>
                  </a>
                ))}
              </div>

              <GalleryImages onOpen={openLightbox} />
            </>
          )}
        </div>
      </div>

      <ImageLightbox
        lightbox={lightbox}
        onClose={closeLightbox}
        onNext={showNextLightboxImage}
        onPrevious={showPreviousLightboxImage}
      />
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

function isMobileViewport() {
  return window.matchMedia("(max-width: 639px)").matches;
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

  const pageSwipeStart = useRef(null);

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

  // index to shape converter
  const visualShape = shapes[visualShapeIndex];
  const contentShape = shapes[contentShapeIndex];
  const heroLinks = getLinksForShape(contentShape);

  // change shape on button press
  const changeShape = useCallback((getShapeIndex) => {
    const nextShapeIndex = getShapeIndex(visualShapeIndex);

    // clear an old timeout if it exists
    window.clearTimeout(contentSwapTimeout.current);
    window.clearTimeout(textTransitionTimeout.current);
    setIsTextTransitioning(true);
    setVisualShapeIndex(nextShapeIndex);

    // set timeout until we swap content. less jank
    contentSwapTimeout.current = window.setTimeout(() => {
      setContentShapeIndex(nextShapeIndex);
    }, 475);

    // keep text hidden until the polygon has been stable for a moment
    textTransitionTimeout.current = window.setTimeout(() => {
      setIsTextTransitioning(false);
    }, 700);
  }, [visualShapeIndex]);

  function showPreviousShape() {
    changeShape(getPreviousShapeIndex);
  }

  function showNextShape() {
    changeShape(getNextShapeIndex);
  }

  function handlePageTouchStart(event) {
    if (!isMobileViewport() || document.querySelector(".lightbox")) {
      return;
    }

    if (event.target.closest("a, button")) {
      pageSwipeStart.current = null;
      return;
    }

    const touch = event.touches[0];

    pageSwipeStart.current = touch
      ? {
          x: touch.clientX,
          y: touch.clientY,
        }
      : null;
  }

  function handlePageTouchEnd(event) {
    if (!pageSwipeStart.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const swipeStart = pageSwipeStart.current;
    pageSwipeStart.current = null;

    if (!touch || !isMobileViewport()) {
      return;
    }

    const deltaX = swipeStart.x - touch.clientX;
    const deltaY = swipeStart.y - touch.clientY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (absX < 56 || absX < absY * 1.35) {
      return;
    }

    if (deltaX > 0) {
      showNextShape();
      return;
    }

    showPreviousShape();
  }

  // change shape with arrow keys on desktop
  useEffect(() => {
    function handleKeyDown(event) {
      if (document.querySelector(".lightbox")) {
        return;
      }

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
      window.cancelAnimationFrame(galleryScaleFrame.current);
      window.cancelAnimationFrame(gridSizeFrame.current);
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

    // Shape changes now swap content in place. The only automatic scroll is the
    // initial landing on the shape.
  }, [contentShape]);

  return (
    <main
      className="site-shell text-white"
      onTouchEnd={handlePageTouchEnd}
      onTouchStart={handlePageTouchStart}
    >
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
        onNext={showNextShape}
        onPrevious={showPreviousShape}
        shape={contentShape}
        visualShape={visualShape}
      />
    </main>
  );
}

export default App;
