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
import haloWarsTrackerImage from "./assets/projects/halowars2tracker.png";
import detailedModeImage from "./assets/projects/detailedMode.png";

export const shapePages = {
  triangle: {
    eyebrow: "about",
    body: "i'm luke, a recent CS grad from UCF working primarily with React, FastAPI, Postgres, frequently with the Anthropic Claude API",
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
  "my primary stack: React, FastAPI, Postgres, Tailwind, Anthropic Claude API",
  "current goals: SWE roles based in Florida",
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
    mobileDetail:
      "full-stack stats tracker with auth, parsing, aggregation, and AI summaries.",
    points: [
      "now tracks 500+ games across its current 8 game types",
      "parses team splits, roles, matchups, win rates, and player breakdowns",
      "uses Claude to turn aggregate stats into rankings and readable analysis",
      "deployed with Vercel, Render, Supabase auth, and Postgres saves",
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
        body: "after the normal stats are calculated, they are read into the prompt for vegeta. power level has a lot of different possible statistics, and all are passed to give Claude all information needed to make a tier list. i've managed to get the results pretty consistent (despite using the cheapest Claude model of Haiku).",
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
        image: detailedModeImage,
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
        body: "for certain games, APIs exist that allow me to automate the input. halo wars 2 (and all halo games for that matter) use the Halo API. i created a python script to scrape all custom match data automatically, it then formats the result into formatted power level input. the screenshot here is other output that the script creates.",
        image: haloWarsTrackerImage,
        label: "additional tool",
        points: [
          "pulls halo wars 2 custom game data when called",
          "formats Halo API output into power level input",
          "removes the manual tracking step while playing, removing human error during input",
        ],
        title: "halo wars 2 scraper (sister tool)",
      },
    ],
    tech: "React, FastAPI, Postgres, Anthropic Claude API",
  },
  {
    date: "sep 2025 - may 2026",
    detail:
      "senior capstone for hca healthcare. i led a six-person agile team and built a flexible scheduling interface for psychiatry residents moving from pgy3 to pgy4. i worked primarily as frontend but helped out full stack.",
    href: "https://github.com/lbrown169/Medical-Resident-Scheduling",
    label: "psycall",
    mobileDetail:
      "senior capstone scheduler for HCA Healthcare, focused on staged resident rotation editing and admin review.",
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
    storyPages: [
      {
        body: "psycall was my senior capstone project for hca healthcare. the main goal was to make the pgy3 to pgy4 resident scheduling process easier to manage than the old manual email workflow. this overview is the general landing point for checking schedule state before publishing.",
        image: pgy4DashboardImage,
        imageAlt: "psycall pgy4 dashboard",
        label: "overview",
        points: [
          "built for psychiatry resident rotation scheduling",
          "replaced a manual process for roughly 96 monthly resident rotations",
          "made schedule status easier for admins to review before finalizing",
          "made rotation requests more transparent for residents",
        ],
        title: "psycall overview",
      },
      {
        body: "the configure tab was where admins could set the dates for the rotation request form that the residents fill out. it would also allow admins to set certain residents as chiefs, this changes the rules for the generation of the schedule.",
        image: configureTabImage,
        imageAlt: "psycall configure tab",
        label: "configure",
        points: [
          "allows configuration of the rotation form for residents by the admin",
          "adjusts rules for the rotation schedule generation algorithm.",
        ],
        title: "configuration before scheduling",
      },
      {
        body: "the rotation page was the core staged editing surface. this is where the schedule could be adjusted, checked for issues (which can be overridden by admins), and prepared before publishing. i worked on the controlled schedule table pattern so edits, warnings, overrides, and reversions could stay manageable.",
        image: psycallRotationPageImage,
        imageAlt: "psycall rotation page",
        label: "staging",
        points: [
          "staged schedule edits before publishing",
          "displayed warnings and supported manual administrator overrides",
        ],
        title: "rotation staging",
      },
    ],
    tech: "Next.js, Tailwind",
  },
  {
    date: "apr 2025",
    detail:
      "a feature-complete pong recreation in unity. has controller support and ball movement i scripted myself to avoid using unity physics. live now on itch.io. also relatively difficult.",
    href: "https://holeset.itch.io/pong-by-holeset",
    label: "pong",
    mobileDetail:
      "feature-complete Unity Pong remake with browser play, controller support, and custom ball movement.",
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
    tech: "Unity, C#",
  },
  {
    date: "mar 2026",
    detail:
      "a static portfolio for a UF geology and geography student applying to grad programs. it isn't my typical design for a site, which is extreme minimalism and dark patterns, so it was a good break from my usual.",
    href: "https://codyhunter-ufl.github.io",
    label: "cody e-portfolio",
    mobileDetail:
      "client portfolio built in React/Tailwind with reusable project data and post-launch updates.",
    points: [
      "gathered requirements, mocked the layout, and built the site from scratch",
      "organized research projects, field photography, resume content, and gis work",
      "kept the structure easy to update after launch",
    ],
    images: [
      { alt: "cody e-portfolio project figure", src: eportFigureImage },
      { alt: "cody e-portfolio home page", src: eportHomeImage },
    ],
    tech: "React, Tailwind",
  },
  {
    date: "pre 2025",
    detail:
      "a couple other projects i worked on throughout my time at ucf. good stepping stones to get to bigger and better things.",
    href: "https://github.com/LukeSupan",
    label: "other stuff",
    mobileDetail:
      "earlier coursework and team projects across web apps, Android, Unity, PHP/MySQL, and MERN.",
    points: [
      "halo stat tracker: php and mysql stats app",
      "minesweeper: android java clone with resizable boards",
      "bloggit and comet contacts: web apps with auth, roles, and api integration",
      "screenbuddy: team-built screen time tracker with a react dashboard and flutter app",
      "screenbuddy: built dashboard visualizations with recharts",
      "epoch: a top down roguelite, my first game in unity, made with a team",
    ],
    tech: "PHP, MySQL, Unity, Android, Java, MERN, Flutter, LAMP",
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
      "i have a requirement with music where i have to have some sort of connection to the song to listen to it consistently. this means most of the music here is from media i've consumed.",
    href: "https://open.spotify.com/playlist/3tyzSA0YmNqV6UESEqwIdZ?si=736238794d6d46de",
    label: "spotify",
  },
  {
    detail:
      "this is my halowarpoint profile (note: i didn't make this. it's just a tool i frequent). it uses the Halo API (which i also use frequently) to get a bunch of stats about my profile.",
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
      "i don't rank games much anymore, but i've ranked most of my favorites on here.",
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
