import resumePdf from "./SupanResume.pdf";

function App() {
  return (
    // whole thing
    <main className="grid min-h-screen place-items-center bg-[#242424] px-6 text-white">
      {/* triangle */}
      <section className="relative grid h-[720px] max-h-[86vh] w-[860px] max-w-[92vw] place-items-start justify-items-center pt-[210px] text-center">
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

        {/* triangle */}
        <div className="triangle-mark" aria-hidden="true">
          <div className="triangle-outline"></div>
          <div className="triangle-fill"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
