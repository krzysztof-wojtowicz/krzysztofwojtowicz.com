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
