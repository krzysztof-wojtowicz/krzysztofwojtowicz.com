export type ProjectData = {
  slug: string; // used in the subpage url: /projects/<slug>
  title: string;
  year: number; // cards are sorted by it, newest first
  short: string; // one-liner shown on the card
  description: string; // full description shown on the subpage
  tech: string[];
  image?: string; // optional thumbnail / mockup
  link?: string;
  github_link?: string;
  github_link_front?: string;
  github_link_back?: string;
};

export const projects: ProjectData[] = [
  {
    slug: "rpg-console-game",
    title: "rpg_console_game",
    year: 2026,
    short: "Multiplayer roguelike dungeon crawler that runs in the terminal.",
    description:
      "Multiplayer roguelike dungeon crawler written in C# that runs entirely in the terminal, built for the Object-Oriented Design course at WUT. Up to 9 players connect to an authoritative server over TCP and explore a procedurally generated, hacker-themed dungeon together, collecting loot and fighting enemies that see and hear them. Almost every game system is built on a classic design pattern, from commands and strategies to decorators, builders and abstract factories, all rendered in a flicker-free, colored console UI.",
    tech: ["c#", ".net", "tcp sockets", "json", "design patterns"],
    image: "/img/rpg_console_game.png",
    github_link: "https://github.com/krzysztof-wojtowicz/rpg-console-game",
  },
  {
    slug: "backup-wizard",
    title: "backup_wizard",
    year: 2025,
    short: "Real-time file backup CLI for Linux, written in C.",
    description:
      "Interactive command-line tool for real-time file backups on Linux, built for the Operating Systems 1 course at WUT. It watches source directories with the inotify API and mirrors every change to one or more targets, running each backup in its own child process so the shell stays responsive. It also features a smart restore that copies only changed files, symlink handling, graceful shutdown on signals and activity logging.",
    tech: ["c", "linux", "inotify", "posix processes", "signals", "make"],
    github_link:
      "https://github.com/krzysztof-wojtowicz/interactive-backup-wizard",
  },
  {
    slug: "numerical-methods",
    title: "numerical_methods",
    year: 2025,
    short: "Root finding, Fourier approximation and ODE solvers in MATLAB.",
    description:
      "A collection of numerical methods implemented from scratch in MATLAB for the Numerical Methods course at WUT: a global root finder based on vectorized bisection, a trigonometric approximation tool that evaluates Fourier series with the Goertzel algorithm (about 3x faster than direct summation), and a solver for linear ODEs of any order using three variants of 4th-order Runge-Kutta methods.",
    tech: [
      "matlab",
      "bisection",
      "fourier series",
      "goertzel algorithm",
      "runge-kutta",
    ],
    github_link:
      "https://github.com/krzysztof-wojtowicz/matlab-numerical-methods-projects",
  },
  {
    slug: "mapple",
    title: "mapple",
    year: 2023,
    short: "Social media web app for orienteering enthusiasts.",
    description:
      "Social media web app designed for orienteering enthusiasts. It allows users to share their maps and tracks with other runners, making it easier to explore, analyze, and discuss different routes and experiences.",
    tech: [
      "react.js",
      "tailwind css",
      "node.js",
      "express.js",
      "mongodb",
      "cloudinary",
    ],
    image: "/img/mapple_both.png",
    link: "https://mapple-app.vercel.app",
    github_link_front:
      "https://github.com/krzysztof-wojtowicz/mapple-web-app-frontend",
    github_link_back:
      "https://github.com/krzysztof-wojtowicz/mapple-web-app-backend",
  },
  {
    slug: "drone-cone",
    title: "drone_cone",
    year: 2023,
    short: "Official website of the DroneCone project.",
    description:
      "DroneCone's official website, built with modern web technologies for a fast, interactive, and visually stunning experience.",
    tech: ["next.js", "tailwind css", "framer motion", "resend api"],
    image: "/img/drone_cone_both.png",
    link: "https://dronecone.vercel.app",
    github_link: "https://github.com/krzysztof-wojtowicz/dronecone-website",
  },
  {
    slug: "playlist-pal",
    title: "playlist_pal",
    year: 2024,
    short: "Personalized Spotify playlists from your favorite songs.",
    description:
      "PlaylistPal is my personal project, built to explore the integration of Spotify's Web API while delivering a seamless way for users to generate personalized playlists based on their favorite songs and artists.",
    tech: ["next.js", "tailwind css", "gsap", "spotify web api"],
    image: "/img/playlist_pal_both.png",
    link: "https://playlist-pal.vercel.app",
    github_link: "https://github.com/krzysztof-wojtowicz/playlist-pal-spotify",
  },
];
