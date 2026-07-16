import { useState } from "react";
import resumePdf from "./SupanResume.pdf";

const shapes = ["triangle", "square", "pentagon"];

function App() {
  const [shapeIndex, setShapeIndex] = useState(0);
  const shape = shapes[shapeIndex];

  function showPreviousShape() {
    setShapeIndex((currentIndex) =>
      currentIndex === 0 ? shapes.length - 1 : currentIndex - 1,
    );
  }

  function showNextShape() {
    setShapeIndex((currentIndex) =>
      currentIndex === shapes.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    // whole thing
    <main className="grid min-h-screen place-items-center bg-[#242424] px-6 text-white">
      {/* triangle */}
      <section className="relative grid h-[720px] max-h-[86vh] w-[860px] max-w-[92vw] place-items-start justify-items-center pt-[180px] text-center">
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
        <div
          className={`polygon-mark shape-${shape}`}
          aria-hidden="true"
        >
          <div className="polygon-outline"></div>
          <div className="polygon-fill"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
