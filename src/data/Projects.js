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
    thumbnail: "/project-images/power-level/thumbnail.jpg",
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
        image: "/project-images/power-level/rainbow-six-stats.jpg",
        caption:
          "Current output from Rainbow Six Siege matches, including player pairing performance and win-rate breakdowns."
      },
      {
        title: "AI Output from Rainbow Six Siege Statistics",
        image: "/project-images/power-level/rainbow-six-ai-output.jpg",
        caption:
          "Claude-generated rankings and analysis written with a character voice to make performance tracking more engaging."
      },
      {
        title: "Marvel Rivals Statistics",
        image: "/project-images/power-level/marvel-rivals-stats.jpg",
        caption:
          "Role-based tracking for Tank, DPS, and Support players using the same flexible stat model."
      }
    ],
    links: []
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
    thumbnail: "/project-images/psycall/thumbnail.jpg",
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
        image: "/project-images/psycall/current-schedule.jpg",
        caption:
          "Published schedule view for residents and administrators."
      },
      {
        title: "Configure Tab",
        image: "/project-images/psycall/configure.jpg",
        caption:
          "Administrative configuration and staged schedule editing flow."
      },
      {
        title: "GitHub Repository",
        image: "/project-images/psycall/repository.jpg",
        caption: "Repository view for the capstone implementation."
      }
    ],
    links: []
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
    stack: ["HTML", "CSS"],
    skills: ["HTML", "CSS", "Client Relations"],
    thumbnail: "/project-images/cody-hunter/thumbnail.jpg",
    summary:
      "A GitHub Pages e-portfolio built from scratch to present research projects, field photography, resume materials, and GIS work for graduate applications.",
    description: [
      "I built this static e-portfolio as a freelance project for a UF Geology & Geography student applying to graduate programs. I gathered requirements, designed the layout, and implemented the site in vanilla HTML and CSS.",
      "Since launch, I have continued maintaining the site by updating information, adding project pages, and adding his personal portfolio as a PDF."
    ],
    highlights: [
      "Designed and built the site from scratch with vanilla HTML and CSS.",
      "Created clean sections for research projects, field photography, resume content, and GIS skills.",
      "Hosted on GitHub Pages and maintained after launch."
    ],
    media: [
      {
        title: "E-Portfolio",
        image: "/project-images/cody-hunter/eportfolio.jpg",
        caption: "Main portfolio experience."
      },
      {
        title: "Home Page",
        image: "/project-images/cody-hunter/home-page.jpg",
        caption: "Homepage layout and student profile content."
      },
      {
        title: "Project Figures",
        image: "/project-images/cody-hunter/project-figures.jpg",
        caption: "Research figure presentation for project pages."
      }
    ],
    links: []
  },
  {
    num: "04",
    id: "halo-stat-tracker",
    name: "Halo Stat Tracker",
    subtitle: "A WAMP stat tracker for playstyle and combat stats.",
    dates: "Nov 2025",
    year: "2025",
    role: "Solo developer",
    affiliation: "University of Central Florida",
    status: "Course project",
    stack: ["PHP", "MySQL", "WAMP"],
    skills: ["PHP", "MySQL", "WAMP"],
    thumbnail: "/project-images/halo-stat-tracker/thumbnail.jpg",
    summary:
      "A solo WAMP application where admins can post playstyle data, kills, and deaths, then view aggregated stats on individual player pages.",
    description: [
      "Halo Stat Tracker was my first look into statistical trackers, which became one of my favorite categories of projects to make and use.",
      "Admins can create posts showing playstyle, kills, and deaths. Individual stat pages aggregate those entries into total user statistics."
    ],
    highlights: [
      "Built solo for a UCF web development course.",
      "Implemented admin-created stat posts and aggregated stat views.",
      "Introduced the stat-tracking ideas that later influenced Power Level."
    ],
    media: [
      {
        title: "GitHub Repository",
        image: "/project-images/halo-stat-tracker/repository.jpg",
        caption: "Repository view for the WAMP implementation."
      }
    ],
    links: []
  },
  {
    num: "05",
    id: "minesweeper",
    name: "Minesweeper",
    subtitle: "A Java Android recreation of Minesweeper.",
    dates: "Nov 2025",
    year: "2025",
    role: "Solo developer",
    affiliation: "University of Central Florida",
    status: "Course project",
    stack: ["Android", "Java"],
    skills: ["Mobile Application Development", "Android Development", "Java"],
    thumbnail: "/project-images/minesweeper/thumbnail.jpg",
    summary:
      "A solo Android recreation of Minesweeper with variable grid sizing, responsive board layout, and win/loss detection.",
    description: [
      "This project recreates standard grid-based Minesweeper gameplay for Android using Java.",
      "Players can choose the board size, and the app resizes the grid to fit both the screen and the user's preferences."
    ],
    highlights: [
      "Built solo for a UCF mobile development course.",
      "Supports configurable grid size with responsive board resizing.",
      "Includes standard Minesweeper win/loss detection."
    ],
    media: [
      {
        title: "GitHub Repository",
        image: "/project-images/minesweeper/repository.jpg",
        caption: "Repository view for the Android project."
      }
    ],
    links: []
  },
  {
    num: "06",
    id: "blog-mern",
    name: "Blog",
    subtitle: "A MERN stack blog with admin and reader roles.",
    dates: "Oct 2025",
    year: "2025",
    role: "Solo developer",
    affiliation: "University of Central Florida",
    status: "Course project",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    skills: ["MongoDB", "React.js", "Express", "Node.js"],
    thumbnail: "/project-images/blog/thumbnail.jpg",
    summary:
      "A solo MERN blog app where admins can create, edit, and delete signed posts while users can read published content.",
    description: [
      "This MERN stack blog app was built solo for a UCF web development course.",
      "It features admin and user roles. Admins can create, read, update, and delete posts signed with their unique user ID, while users can view posts without editing permissions."
    ],
    highlights: [
      "Implemented role-based access for admins and users.",
      "Built CRUD flows for posts tied to unique admin IDs.",
      "Created a full MERN stack course project from database to frontend."
    ],
    media: [
      {
        title: "GitHub Repository",
        image: "/project-images/blog/repository.jpg",
        caption: "Repository view for the MERN blog."
      }
    ],
    links: []
  },
  {
    num: "07",
    id: "screenbuddy",
    name: "ScreenBuddy",
    subtitle: "A cross-platform screen time tracker with virtual pet rewards.",
    dates: "Jun 2025 - Jul 2025",
    year: "2025",
    role: "Frontend developer",
    affiliation: "University of Central Florida",
    status: "Course project",
    stack: ["MERN", "Flutter", "Recharts"],
    skills: ["Mobile Application Development", "Flutter", "React", "Recharts", "MERN"],
    thumbnail: "/project-images/screenbuddy/thumbnail.jpg",
    summary:
      "A team-built screen time tracker with daily usage goals, mobile virtual pet rewards, and a React dashboard for account and usage data.",
    description: [
      "ScreenBuddy is a cross-platform screen time tracker built with a 5-person team for a software engineering course.",
      "Users set daily usage goals and earn in-app currency to unlock virtual pets on mobile, while a React web dashboard handles account management and screen time visualizations."
    ],
    highlights: [
      "Designed and implemented frontend UI across React web and Flutter mobile.",
      "Built Recharts visualizations for screen time trends.",
      "Collaborated on a 5-person software engineering course team."
    ],
    media: [
      {
        title: "GitHub Repository - Mobile Version",
        image: "/project-images/screenbuddy/mobile-repository.jpg",
        caption: "Repository view for the Flutter mobile app."
      },
      {
        title: "GitHub Repository - Web Version",
        image: "/project-images/screenbuddy/web-repository.jpg",
        caption: "Repository view for the React web dashboard."
      }
    ],
    links: []
  },
  {
    num: "08",
    id: "comet-contacts",
    name: "Comet Contacts",
    subtitle: "A LAMP contact manager with a REST API integration.",
    dates: "May 2025 - Jun 2025",
    year: "2025",
    role: "Frontend developer",
    affiliation: "University of Central Florida",
    status: "Course project",
    stack: ["LAMP", "HTML", "CSS", "JavaScript"],
    skills: ["HTML", "CSS", "JavaScript", "REST API Integration"],
    thumbnail: "/project-images/comet-contacts/thumbnail.jpg",
    summary:
      "A team-built web contact manager where users can store, search, and manage personal contacts.",
    description: [
      "Comet Contacts is a simple web-based contact manager built with a team for a software engineering course.",
      "I designed and built the frontend UI and handled integration with the REST API developed by the backend team."
    ],
    highlights: [
      "Designed the frontend UI for the contact manager.",
      "Integrated the frontend with the backend team's REST API.",
      "Built as part of a team software engineering course project."
    ],
    media: [
      {
        title: "GitHub Repository",
        image: "/project-images/comet-contacts/repository.jpg",
        caption: "Repository view for the LAMP contact manager."
      }
    ],
    links: []
  },
  {
    num: "09",
    id: "pong",
    name: "PONG",
    subtitle: "A Unity recreation of Pong with controller support and custom physics.",
    dates: "Apr 2025 - May 2025",
    year: "2025",
    role: "Solo developer",
    status: "Released",
    stack: ["Unity", "C#"],
    skills: ["Unity", "Game Programming", "C#"],
    thumbnail: "/project-images/pong/thumbnail.jpg",
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
        image: "/project-images/pong/title.jpg",
        caption:
          "Title screen with Singleplayer, Local Multiplayer, and quit options."
      },
      {
        title: "PONG on itch.io",
        image: "/project-images/pong/itch.jpg",
        caption: "Web build hosted on itch.io."
      }
    ],
    links: []
  }
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
