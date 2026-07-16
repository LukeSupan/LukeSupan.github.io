import { useEffect, useLayoutEffect, useRef, useState } from "react";
import resumePdf from "./SupanResume.pdf";

// three for now. honestly really just need two but you gotta have a square to have a pentagon
// could shoot for up arrow down arrow but. eh. this is stylish
const shapes = ["triangle", "square", "pentagon"];

function getPreviousShapeIndex(currentIndex) {
  return currentIndex === 0 ? shapes.length - 1 : currentIndex - 1;
}

function getNextShapeIndex(currentIndex) {
  return currentIndex === shapes.length - 1 ? 0 : currentIndex + 1;
}

function App() {
  const [visualShapeIndex, setVisualShapeIndex] = useState(0);
  const [contentShapeIndex, setContentShapeIndex] = useState(0);
  const heroRef = useRef(null);
  const hasMounted = useRef(false);
  const shapeChangeAfterScroll = useRef(null);
  const scrollLockDirection = useRef(null);
  const scrollLockTimeout = useRef(null);
  const touchStartY = useRef(null);
  const visualShape = shapes[visualShapeIndex];
  const contentShape = shapes[contentShapeIndex];

  function lockOldRevealDirection(previousShape) {
    window.clearTimeout(scrollLockTimeout.current);

    if (previousShape === "triangle") {
      scrollLockDirection.current = "down";
    } else if (previousShape === "pentagon") {
      scrollLockDirection.current = "up";
    } else {
      scrollLockDirection.current = null;
      return;
    }

    scrollLockTimeout.current = window.setTimeout(() => {
      scrollLockDirection.current = null;
    }, 800);
  }

  function changeShape(getShapeIndex) {
    const nextShapeIndex = getShapeIndex(visualShapeIndex);
    const previousShape = shapes[visualShapeIndex];

    window.clearTimeout(shapeChangeAfterScroll.current);
    lockOldRevealDirection(previousShape);
    setVisualShapeIndex(nextShapeIndex);

    heroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    shapeChangeAfterScroll.current = window.setTimeout(() => {
      setContentShapeIndex(nextShapeIndex);
    }, 475);
  }

  function showPreviousShape() {
    changeShape(getPreviousShapeIndex);
  }

  function showNextShape() {
    changeShape(getNextShapeIndex);
  }

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
  }, [visualShapeIndex]);

  useEffect(() => {
    return () => {
      window.clearTimeout(shapeChangeAfterScroll.current);
      window.clearTimeout(scrollLockTimeout.current);
    };
  }, []);

  useEffect(() => {
    function isLockedScroll(scrollAmount) {
      return (
        (scrollLockDirection.current === "down" && scrollAmount > 0) ||
        (scrollLockDirection.current === "up" && scrollAmount < 0)
      );
    }

    function handleWheel(event) {
      if (isLockedScroll(event.deltaY)) {
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

      if (isLockedScroll(scrollAmount)) {
        event.preventDefault();
      }
    }

    function handleScrollKey(event) {
      const scrollAmounts = {
        ArrowUp: -1,
        PageUp: -1,
        Home: -1,
        ArrowDown: 1,
        PageDown: 1,
        End: 1,
        " ": 1,
      };

      const scrollAmount = scrollAmounts[event.key];

      if (scrollAmount && isLockedScroll(scrollAmount)) {
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

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    if (!hasMounted.current) {
      hero.scrollIntoView({ block: "start" });
      hasMounted.current = true;
      return;
    }

    hero.scrollIntoView({ block: "start" });
  }, [contentShape]);

  return (
    // whole thing
    <main className="bg-[#242424] text-white">
      {contentShape === "pentagon" && (
        <section className="grid min-h-screen place-items-center px-6 text-center text-white/55">
          <div>
            <p className="text-sm">upper reveal</p>
            <p className="mt-4 max-w-md text-xs leading-6">
              placeholder for pentagon direction (up duh)
            </p>
          </div>
        </section>
      )}

      <section
        className="grid min-h-screen place-items-center px-6"
        ref={heroRef}
      >
        {/* triangle */}
        <div className="relative grid h-[720px] max-h-[86vh] w-[860px] max-w-[92vw] place-items-start justify-items-center pt-[180px] text-center">
          <button
            aria-label="previous shape"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 text-3xl text-white/45 transition hover:text-white sm:left-[-46px]"
            onClick={showPreviousShape}
            type="button"
          >
            &lt;
          </button>

          <button
            aria-label="next shape"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 text-3xl text-white/45 transition hover:text-white sm:right-[-46px]"
            onClick={showNextShape}
            type="button"
          >
            &gt;
          </button>

          {/* name */}
          <div className="relative z-10">
            <h1 className="text-3xl font-normal">luke supan</h1>

            {/* links to my stuff*/}
            <nav className="mt-8 flex flex-col items-center gap-3 text-lg text-white/55">
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

          {/* polygon */}
          <div className={`polygon-mark shape-${visualShape}`} aria-hidden="true">
            <div className="polygon-outline"></div>
            <div className="polygon-fill"></div>
          </div>
        </div>
      </section>

      {contentShape === "triangle" && (
        <section className="grid min-h-screen place-items-center px-6 text-center text-white/55">
          <div>
            <p className="text-sm">lower reveal</p>
            <p className="mt-4 max-w-md text-xs leading-6">
              placeholder for triangle direction (down duh)
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
