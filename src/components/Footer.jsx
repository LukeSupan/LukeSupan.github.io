export function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-10 flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a
          href="https://github.com/LukeSupan"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/lukesupan/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          linkedin
        </a>
        <a
          href="https://ucf.joinhandshake.com/profiles/lukesupan"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          handshake
        </a>
        <a
          href="mailto:lukesupan@outlook.com"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          lukesupan@outlook.com
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-base text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none underline"
      >
        back to top
      </button>

      <span className="text-sm text-white/70 tracking-widest">
        lukesupan.github.io
      </span>
    </footer>
  );
}
