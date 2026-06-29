import configureTab from "../assets/projectimages/configureTab.png";
import eportFigure from "../assets/projectimages/eportFigure.png";
import eportHome from "../assets/projectimages/eportHome.png";
import pgy4Dashboard from "../assets/projectimages/pgy4Dashboard.png";
import pongGameplay from "../assets/projectimages/pongGameplay.png";
import pongTitle from "../assets/projectimages/pongTitle.png";
import r6Stats from "../assets/projectimages/r6Stats.png";
import r6VegetaOutput from "../assets/projectimages/r6VegetaOutput.png";
import rivals from "../assets/projectimages/rivals.png";

export const PROJECTS = [
  {
    num: "01",
    id: "power-level",
    name: "Power Level",
    subtitle: "A flexible stat tracking system for competitive games.",
    dates: "Feb 2025 - Present",
    year: "2025 - Present",
    role: "Solo developer",
    status: "Maintained",
    stack: ["React", "FastAPI", "PostgreSQL", "Claude API"],
    skills: ["React", "FastAPI", "PostgreSQL", "Supabase", "Claude API", "Python"],
    thumbnail: r6Stats,
    summary:
      "Power Level is a one-size-fits-all stat tracker that turns shorthand match logs into win rates, team composition analysis, and AI-generated player rankings.",
    description: [
      "Power Level started as a Python CLI tool I made to figure out which friends, roles, and team compositions were helping or hurting our Overwatch games. I logged each game with structured shorthand for roles, team splits, KD ratios, and MVP tags, then aggregated the results into useful win-rate breakdowns.",
      "After friends wanted to use it too, I rebuilt it as a hosted full-stack site on Vercel and Render. The web version uses FastAPI, PostgreSQL through Supabase, email verification, password reset flows, and Claude API analysis to turn formatted match data into consistent power rankings and commentary.",
      "The system supports multiple game types with custom roles and versus modes, so the same core tracker can handle games like Rainbow Six Siege, Marvel Rivals, Overwatch, and more."
    ],
    highlights: [
      "Tracks 500+ individual games across multiple game types.",
      "Supports custom roles, team splits, versus modes, KD ratios, and MVP tagging.",
      "Uses Claude Haiku 4.5 to generate pattern analysis and player tier lists.",
      "Includes Supabase-backed saves, account security, email verification, and password resets."
    ],
    media: [
      {
        title: "Rainbow Six Siege Stats",
        image: r6Stats,
        caption:
          "Current output from Rainbow Six Siege matches, including player pairing performance and win-rate breakdowns."
      },
      {
        title: "AI Output from Rainbow Six Siege Statistics",
        image: r6VegetaOutput,
        caption:
          "Claude-generated rankings and analysis written with a character voice to make performance tracking more engaging."
      },
      {
        title: "Marvel Rivals Statistics",
        image: rivals,
        caption:
          "Role-based tracking for Tank, DPS, and Support players using the same flexible stat model."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/LukeSupan/stack-tracker-web"
      },
      {
        label: "Live Site",
        href: "https://power-level-scouter.vercel.app/"
      }
    ]
  },
  {
    num: "02",
    id: "psycall-pgy4-scheduler",
    name: "Psycall: PGY4 Rotation Schedule",
    subtitle: "A rotation scheduling system for psychiatry residents.",
    dates: "Sep 2025 - May 2026",
    year: "2026",
    role: "Project manager and frontend developer",
    affiliation: "University of Central Florida / HCA Healthcare",
    status: "Capstone",
    stack: ["Next.js", "ASP.NET Core", "MySQL", "Tailwind CSS"],
    skills: ["Next.js", "Tailwind CSS", "ASP.NET Core", "MySQL", "Jira"],
    thumbnail: pgy4Dashboard,
    summary:
      "Psycall extends HCA Healthcare's platform with schedule drafts, publishable resident rotations, CSV downloads, and warning previews for administrative changes.",
    description: [
      "Psycall was my senior capstone project at UCF, built for HCA Healthcare to support psychiatry residents moving from PGY3 to PGY4. I served as project manager, led sponsor meetings, and coordinated team work through Jira.",
      "My main engineering contribution was the frontend schedule display table. A second team needed the same component for a slightly different workflow, so I built it generically enough for both teams to use without duplication.",
      "The system supports multiple schedule drafts, only one publishable schedule at a time, CSV downloads, and a staging flow that previews warnings before admins commit changes."
    ],
    highlights: [
      "Led sponsor meetings and project coordination for a 5-person capstone team.",
      "Built a reusable schedule table shared across two teams.",
      "Supported draft schedules, published schedules, resident/admin views, and CSV export.",
      "Designed warning previews with apply-all, revert-all, and selective revert options."
    ],
    media: [
      {
        title: "Current Schedule Tab",
        image: pgy4Dashboard,
        caption:
          "Published schedule view for residents and administrators."
      },
      {
        title: "Configure Tab",
        image: configureTab,
        caption:
          "Administrative configuration and staged schedule editing flow."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/lbrown169/Medical-Resident-Scheduling"
      }
    ]
  },
  {
    num: "03",
    id: "cody-hunter-eportfolio",
    name: "Cody Hunter E-Portfolio",
    subtitle: "A static portfolio for a UF geology and geography student.",
    dates: "Mar 2026 - Apr 2026",
    year: "2026",
    role: "Freelance designer and developer",
    status: "Maintained",
    stack: ["React", "Tailwind CSS"],
    skills: ["React", "Tailwind CSS", "Client Relations"],
    thumbnail: eportHome,
    summary:
      "A GitHub Pages e-portfolio built from scratch to present research projects, field photography, resume materials, and GIS work for graduate applications.",
    description: [
      "I built this e-portfolio as a freelance project for a UF Geology & Geography student applying to graduate programs. I gathered requirements, designed the layout, and implemented the site with React and Tailwind CSS.",
      "Since launch, I have continued maintaining the site by updating information, adding project pages, and adding his personal portfolio as a PDF."
    ],
    highlights: [
      "Designed and built the site from scratch with React and Tailwind CSS.",
      "Created clean sections for research projects, field photography, resume content, and GIS skills.",
      "Hosted on GitHub Pages and maintained after launch."
    ],
    media: [
      {
        title: "Home Page",
        image: eportHome,
        caption: "Homepage layout and student profile content."
      },
      {
        title: "Project Figures",
        image: eportFigure,
        caption: "Research figure presentation for project pages."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/codyhunter-ufl/codyhunter-ufl.github.io"
      },
      {
        label: "Live Site",
        href: "https://codyhunter-ufl.github.io/"
      }
    ]
  },
  {
    num: "04",
    id: "pong",
    name: "PONG",
    subtitle: "A Unity recreation of Pong with controller support and custom physics.",
    dates: "Apr 2025 - May 2025",
    year: "2025",
    role: "Solo developer",
    status: "Released",
    stack: ["Unity", "C#"],
    skills: ["Unity", "Game Programming", "C#"],
    thumbnail: pongTitle,
    summary:
      "A faithful Pong recreation with local multiplayer, controller support, raycasting-based AI, and custom ball physics.",
    description: [
      "PONG is a solo Unity recreation of the original game with local multiplayer, full controller support, and an enemy AI that uses raycasting to track and intercept the ball.",
      "I recreated the original Pong ball physics from scratch to better match the feel of the original instead of relying on Unity's default physics."
    ],
    highlights: [
      "Built local multiplayer and full controller support.",
      "Implemented raycasting-based enemy AI.",
      "Recreated Pong-style ball physics from scratch.",
      "Published a web build on itch.io."
    ],
    media: [
      {
        title: "PONG Title",
        image: pongTitle,
        caption:
          "Title screen with Singleplayer, Local Multiplayer, and quit options."
      },
      {
        title: "PONG Gameplay",
        image: pongGameplay,
        caption:
          "Web build gameplay using custom ball physics and paddle controls."
      }
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/LukeSupan/pong-unity-test"
      },
      {
        label: "itch.io Page",
        href: "https://holeset.itch.io/pong-by-holeset"
      }
    ]
  }
];

export const OTHER_PROJECTS = [
  {
    name: "ScreenBuddy",
    year: "2025",
    stack: ["MERN", "Flutter", "Recharts"],
    summary:
      "Cross-platform screen time tracker with usage goals, virtual pet rewards, and a React analytics dashboard."
  },
  {
    name: "Comet Contacts",
    year: "2025",
    stack: ["LAMP", "HTML", "CSS", "JavaScript"],
    summary:
      "Team-built contact manager where I designed the frontend and integrated with a REST API."
  },
  {
    name: "Halo Stat Tracker",
    year: "2025",
    stack: ["PHP", "MySQL", "WAMP"],
    summary:
      "Solo stat tracking app for playstyle posts and aggregated Halo stats."
  },
  {
    name: "Minesweeper",
    year: "2025",
    stack: ["Android", "Java"],
    summary:
      "Android Minesweeper recreation with configurable board size and win/loss detection."
  },
  {
    name: "Blog",
    year: "2025",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    summary:
      "MERN blog app with admin/user roles and post CRUD for a web development course."
  }
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
