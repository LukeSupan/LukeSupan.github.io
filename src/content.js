import resumePdf from "./SupanResume.pdf";

export const shapePages = {
  triangle: {
    eyebrow: "about",
    body: "i'm luke, a recent CS grad from UCF looking for a SWE role that will help me grow as an engineer",
  },
  square: {
    eyebrow: "projects",
    body: "my recent (and current) projects focus on my love of statistics gathering, tracking, and analysis",
  },
  pentagon: {
    eyebrow: "gallery",
    body: "fun links related to myself + pictures",
  },
};

export const aboutNotes = [
  "ucf computer science, magna cum laude",
  "my primary stack: react, fastapi, postgres, tailwind, claudeapi",
  "current goals: swe roles based in florida, roblox dev in the future",
  "active project: a custom games scraper for halo wars 2 to work with power level (my personal favorite project)",
];

export const projectDrafts = [
  {
    date: "feb 2026 - current",
    detail:
      "my one-size-fits-all gaming stat tracker. it started as a python cli i made to find out who, among my friends, was the worst at overwatch. then turned into a deployed full-stack app that i now use to track all of my games (and ping pong)",
    href: "https://power-level-scouter.vercel.app",
    label: "power level",
    points: [
      "now tracks 500+ games across it's current 8 game types",
      "parses team splits, roles, matchups, win rates, and player breakdowns",
      "uses claude to turn aggregate stats into rankings and readable analysis",
      "deployed with vercel, render, supabase auth, and postgres saves",
    ],
    tech: "react, fastapi, postgres, claude api",
  },
  {
    date: "sep 2025 - may 2026",
    detail:
      "senior capstone for hca healthcare. i led a six-person agile team and built a flexible scheduling interface for psychiatry residents moving from pgy3 to pgy4. i worked primarily as frontend but helped out full stack.",
    href: "https://github.com/lbrown169/Medical-Resident-Scheduling",
    label: "psycall",
    points: [
      "replaced a manual email-based process for roughly 96 yearly rotation assignments",
      "built a reusable controlled schedule table that another team also adopted",
      "supported drafts, publishing, csv downloads, warnings, overrides, and selective reverts",
      "handled sponsor meetings, jira coordination, and team planning",
    ],
    tech: "next.js, tailwind",
  },
  {
    date: "apr 2025",
    detail:
      "a feature-complete pong recreation in unity. has controller support and ball movement i scripted myself to avoid using unity physics. live now on itch.io. also relatively difficult.",
    href: "https://holeset.itch.io/pong-by-holeset",
    label: "pong",
    points: [
      "shipped as a playable browser build on itch.io",
      "includes local multiplayer, controller support, scoring, and match resets",
      "enemy ai uses raycasts to predict and intercept the ball",
      "ball movement was created by hand instead of relying on unity physics",
    ],
    tech: "unity, c#",
  },
  {
    date: "july 2026",
    detail:
      "this site right now. i kept trying to think of a cool gimmick, thought of the shapes idea, so i remade the site.",
    href: "https://lukesupan.com",
    label: "portfolio",
    points: [
      "shape navigation with very distinct mobile and desktop layouts",
      "maintained with each new project",
      "pretty fun to make. this isn't on my resume so these bullets aren't too serious",
    ],
    tech: "react, tailwind, vite",
  },
  {
    date: "mar 2026",
    detail:
      "a static portfolio for a uf geology and geography student applying to grad programs. it isn't my typical design for a site which is extreme minimalism and dark patterns. so it was a good break from my usual.",
    href: "https://codyhunter-ufl.github.io",
    label: "cody e-portfolio",
    points: [
      "gathered requirements, mocked the layout, and built the site from scratch",
      "organized research projects, field photography, resume content, and gis work",
      "kept the structure easy to update after launch",
    ],
    tech: "react, tailwind",
  },
  {
    date: "jun 2025 - jul 2025",
    detail:
      "a team-built screen time tracker with a web dashboard and mobile app. users set daily goals and earn currency for virtual pets. a project for my pre-capstone class.",
    href: "#",
    label: "screenbuddy",
    points: [
      "worked across react web ui and flutter mobile screens",
      "built dashboard visualizations with recharts",
      "first real experience with web data presentation/analysis (helpful for power level)",
    ],
    tech: "mern, flutter, recharts",
  },
  {
    date: "pre 2025",
    detail:
      "a couple other projects i worked on throughout my time at ucf. good stepping stones to get to bigger and better things.",
    href: "https://github.com/LukeSupan",
    label: "other stuff",
    points: [
      "halo stat tracker: php and mysql stats app",
      "minesweeper: android java clone with resizable boards",
      "bloggit and comet contacts: web apps with auth, roles, and api integration",
      "epoch: a top down roguelite, my first game in unity, made with a team"
    ],
    tech: "php, mysql, unity, android, java, mern, lamp",
  },
];

export const galleryDrafts = [
  {
    detail: "i have a requirement with music where i have to have some sort of connection to the song to listen to it consistently. this means most of the music here is from media ive consumed.",
    label: "spotify",
  },
  {
    detail: "this is my halowarpoint profile (note: i didnt make this. its just a tool i frequent). it uses the haloapi (which i also use frequently) to get a bunch of stats about my profile.",
    label: "halo wars",
  },
  {
    detail: "so cool.",
    label: "neat",
  },
  {
    detail: "i dont rank games much anymore, but ive ranked most of my favorites on here.",
    label: "backloggd",
  },
];

export function getLinksForShape(shape) {
  if (shape === "square") {
    return [
      { href: "https://power-level-scouter.vercel.app", label: "power level" },
      { href: "https://holeset.itch.io/pong-by-holeset", label: "pong" },
      {
        href: "https://github.com/lbrown169/Medical-Resident-Scheduling",
        label: "psycall",
      },
      { href: "https://lukesupan.com", label: "portfolio" },
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
    { href: "https://www.linkedin.com/in/lukesupan/", label: "linkedin" },
    { href: resumePdf, label: "resume" },
  ];
}
