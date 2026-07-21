import resumePdf from "./assets/SupanResume.pdf";
import beachLukeImage from "./assets/gallery/beachluke.jpg";
import catArtImage from "./assets/gallery/Cat Art.jpg";
import coasterImage from "./assets/gallery/coasterimage.png";
import enolaImage from "./assets/gallery/enolaimage.jpg";
import justStartedImage from "./assets/gallery/i think just started.jpg";
import silksongImage from "./assets/gallery/silksong.png";
import silksongTwoImage from "./assets/gallery/silksong2.jpg";
import teamImage from "./assets/gallery/team.jpg";
import washingtonImage from "./assets/gallery/washingtonimage.jpg";
import configureTabImage from "./assets/projects/configureTab.png";
import eportFigureImage from "./assets/projects/eportFigure.png";
import eportHomeImage from "./assets/projects/eportHome.png";
import pgy4DashboardImage from "./assets/projects/pgy4Dashboard.png";
import pongGameplayImage from "./assets/projects/pongGameplay.png";
import pongTitleImage from "./assets/projects/pongTitle.png";
import psycallRotationPageImage from "./assets/projects/psycallRotationPage.png";
import r6VegetaOutputImage from "./assets/projects/r6VegetaOutput.png";
import scouterImage from "./assets/projects/scouter.png";

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

export const aboutImages = [
  {
    alt: "capstone team photo. nice memory.",
    orientation: "wide",
    src: teamImage,
  },
  {
    alt: "hornet looking at the light above. silksong",
    orientation: "wide",
    src: silksongTwoImage,
  },
];

export const aboutDesktopImages = [
  {
    alt: "halo ce cover art. so good.",
    desktopSlot: "left",
    orientation: "wide",
    src: justStartedImage,
  },
  {
    alt: "washington monument. very cool.",
    desktopSlot: "right",
    orientation: "wide",
    src: washingtonImage,
  },
];

export const projectDrafts = [
  {
    date: "feb 2026 - current",
    detail:
      "my one-size-fits-all gaming stat tracker. it started as a python cli i made to find out who, among my friends, was the worst at overwatch. it then turned into a deployed full-stack app that i now use to track all of my games (and ping pong)",
    href: "https://power-level-scouter.vercel.app",
    label: "power level",
    points: [
      "now tracks 500+ games across it's current 8 game types",
      "parses team splits, roles, matchups, win rates, and player breakdowns",
      "uses claude to turn aggregate stats into rankings and readable analysis",
      "deployed with vercel, render, supabase auth, and postgres saves",
    ],
    images: [
      {
        alt: "power level rainbow six siege vegeta output",
        src: r6VegetaOutputImage,
      },
      { alt: "power level scouter stats page", src: scouterImage },
    ],
    storyPages: [
      {
        body: "the general idea of power level is you leave it open as you play, i personally use my second monitor but mobile is optimized for fast input. when you finish a game you quickly type up the results of the game as formatted input, then submit, and you'll see your updated stats. you can then run vegeta to get your personalized tier list and power levels.",
        image: scouterImage,
        imageAlt: "power level scouter stats page",
        label: "intro",
        points: [
          "supabase auth keeps saves tied to a user",
          "user results are parsed and formed into readable stats which can be displayed in a simple or a detailed mode",
          "the output focuses primarily on stats that are fun to compare after playing and can be used to suggest which players are best",
        ],
        title: "power level overview",
      },
      {
        body: "after the normal stats are calculated, they are read into the prompt for vegeta. power level has a lot of different possible statistics, and all are passed to give claude all information needed to make a tier list. i've managed to get the results pretty consistent (despite using the cheapest claude model of haiku).",
        image: r6VegetaOutputImage,
        imageAlt: "power level rainbow six siege vegeta output",
        label: "vegeta",
        points: [
          "only metrics relevant to the current game type are used. if you are playing a game with roles but no kd. roles are used, kd will not be mentioned.",
          "the goal is analysis that is entertaining to read. insults for the lower players and strong reactions to powerful players achieve this.",
        ],
        title: "claude output as vegeta",
      },
      {
        body: "this mode allows sorting by different statistics for both individual players and teams. it is essentially the main mode for manual analysis. the matchup board allows players to see who does well against who.",
        image: scouterImage,
        imageAlt: "power level detailed stats view draft",
        label: "detailed mode",
        points: [
          "additional filters and sorting options beyond simple mode",
          "bar graphs to show different stats at a glance",
          "a graph for KD and kills/deaths per game is included",
        ],
        title: "additional sorting, filtering, and specific analysis",
      },
      {
        body: "for certain games, apis exist that allow me to automate the input. halo wars 2 (and all halo games for that matter) use the haloapi. i created a python script to scrape all custom match data automatically, it then formats the result into formatted power level input.",
        label: "additional tool",
        points: [
          "pulls halo wars 2 custom game data when called",
          "formats haloapi output into power level input",
          "removes the manual tracking step while playing, removing human error during input",
        ],
        title: "halo wars 2 scraper (sister tool)",
      },
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
    images: [
      { alt: "psycall configure tab", src: configureTabImage },
      { alt: "psycall pgy4 dashboard", src: pgy4DashboardImage },
      { alt: "psycall rotation page", src: psycallRotationPageImage },
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
    images: [
      { alt: "pong gameplay", src: pongGameplayImage },
      { alt: "pong title screen", src: pongTitleImage },
    ],
    tech: "unity, c#",
  },
  {
    date: "july 2026",
    detail:
      "this site right now. i kept trying to think of a cool gimmick, thought of the shapes idea, so i remade the site.",
    href: "https://github.com/LukeSupan/LukeSupan",
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
    images: [
      { alt: "cody e-portfolio project figure", src: eportFigureImage },
      { alt: "cody e-portfolio home page", src: eportHomeImage },
    ],
    tech: "react, tailwind",
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
      "screenbuddy: team-built screen time tracker with a react dashboard and flutter app",
      "screenbuddy: built dashboard visualizations with recharts",
      "epoch: a top down roguelite, my first game in unity, made with a team",
    ],
    tech: "php, mysql, unity, android, java, mern, flutter, lamp",
  },
];

export const galleryImages = [
  { alt: "beach luke", src: beachLukeImage },
  { alt: "capstone team photo. nice memory.", src: teamImage },
  { alt: "washington monument. very cool.", src: washingtonImage },
  { alt: "the enola gay. and me.", src: enolaImage },
  { alt: "image from space mountain", src: coasterImage },
  { alt: "my pfp on most platforms.", src: catArtImage },
  { alt: "first silksong completion", src: silksongImage },
  { alt: "hornet looking at the light above. silksong", src: silksongTwoImage },
  { alt: "halo ce cover art. so good.", src: justStartedImage },
];

export const galleryDrafts = [
  {
    detail:
      "i have a requirement with music where i have to have some sort of connection to the song to listen to it consistently. this means most of the music here is from media ive consumed.",
    href: "https://open.spotify.com/playlist/3tyzSA0YmNqV6UESEqwIdZ?si=736238794d6d46de",
    label: "spotify",
  },
  {
    detail:
      "this is my halowarpoint profile (note: i didnt make this. its just a tool i frequent). it uses the haloapi (which i also use frequently) to get a bunch of stats about my profile.",
    href: "https://halowarpoint.com/service-record?gamerTag=holesec",
    label: "halo wars",
  },
  {
    detail: "so cool. spoilers for chainsaw man reze.",
    href: "https://youtu.be/ZeTlktszpng?t=29",
    label: "neat",
  },
  {
    detail:
      "i dont rank games much anymore, but ive ranked most of my favorites on here.",
    href: "https://backloggd.com/u/holese/",
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
      { href: "https://github.com/LukeSupan/LukeSupan", label: "portfolio" },
    ];
  }

  if (shape === "pentagon") {
    return [
      {
        href: "https://open.spotify.com/playlist/3tyzSA0YmNqV6UESEqwIdZ?si=736238794d6d46de",
        label: "spotify",
      },
      {
        href: "https://halowarpoint.com/service-record?gamerTag=holesec",
        label: "halo wars",
      },
      { href: "https://youtu.be/ZeTlktszpng?t=29", label: "neat" },
      { href: "https://backloggd.com/u/holese/", label: "backloggd" },
    ];
  }

  return [
    { href: "mailto:lukesupan@outlook.com", label: "email" },
    { href: "https://github.com/LukeSupan", label: "github" },
    { href: "https://www.linkedin.com/in/lukesupan/", label: "linkedin" },
    { href: resumePdf, label: "resume" },
  ];
}
