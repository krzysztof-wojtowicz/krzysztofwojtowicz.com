export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string; // short description shown under the photo
  credit?: string; // e.g. "photo: Author", shown in brackets after the caption
};

export type ActivitySection = {
  heading?: string; // shown as "void <heading>()", no heading when not set
  description: string;
  tags?: string[];
  stats?: Record<string, string>; // key numbers, shown as "stats = {key: value}"
  photos?: Photo[];
};

export type ActivityData = {
  slug: string; // used in the subpage url: /activities/<slug>
  title: string;
  short: string; // one-liner shown on the card
  logo?: { src: string; alt: string }; // shown next to the subpage title
  sections: ActivitySection[]; // content of the subpage
};

export const activities: ActivityData[] = [
  {
    slug: "at-jetbrains",
    title: "at_jetbrains",
    short: "JetBrains Campus Ambassador at WUT.",
    sections: [
      {
        heading: "community",
        description:
          "Since February 2026, I've been a JetBrains Campus Ambassador, leading the JetBrains student community at Warsaw University of Technology. I'm part of a 4-person Warsaw team (8 ambassadors across Poland) and act as the primary point of contact between the university and JetBrains. Together with local student organizations, I've organized 5+ technical workshops, lectures and events about modern software development tools, as well as fun events like the Warsaw Outdoor Game, reaching over 500 students.",
        tags: ["campus ambassador", "lectures", "workshops", "student events"],
        stats: {
          since: "feb 2026",
          events: "5+",
          students_reached: "500+",
          warsaw_team: "4",
        },
        photos: [
          {
            src: "/img/jb/jb_me.jpg",
            width: 1666,
            height: 2500,
            alt: "Me in a jacket with JetBrains patches",
            caption: "JetBrains Campus Ambassador at WUT",
          },
        ],
      },
      {
        heading: "internships",
        description:
          "As part of the JetBrains University Relations team, I promote JetBrains internship programmes among students. I represent JetBrains at university job fairs, where I talk with students about JetBrains professional tools, community initiatives and open positions, and I give short talks at student events, such as the AGH integration trip. So far, this has helped attract over 400 internship applications from WUT students.",
        tags: ["job fairs", "internships", "university relations"],
        stats: { internship_applications: "400+" },
        photos: [
          {
            src: "/img/jb/jb_job_fair.jpg",
            width: 2500,
            height: 2240,
            alt: "Me talking with a student at the JetBrains booth",
            caption:
              "Talking with students at the JetBrains booth during the WUT job fair",
          },
          {
            src: "/img/jb/jb_presentation_agh.jpg",
            width: 2500,
            height: 2025,
            alt: "Me giving a presentation about JetBrains opportunities for students",
            caption:
              "My presentation for participants of the AGH integration trip",
          },
        ],
      },
    ],
  },
  {
    slug: "student-initiatives",
    title: "student_initiatives",
    short: "Active member of the Student Council (WRS MiNI) at WUT.",
    logo: { src: "/img/wrs_mini/logo_wrs_mini.svg", alt: "WRS MiNI logo" },
    sections: [
      {
        heading: "council",
        description:
          "For two years now, I've been an active member of the Faculty Student Council (WRS MiNI) at Warsaw University of Technology, a team of about 25 people. During the last council term, I was a delegate to the Finance and Economic Committee: I oversaw the council's budget, assisted project leaders in drafting funding applications, and ran training sessions on financial procedures for our members. I've also managed the partnerships team of about 8 people, been a member of the social media team and designed graphics for our events.",
        tags: [
          "budget",
          "funding applications",
          "partnerships",
          "social media",
          "graphic design",
        ],
        stats: {
          years: "2",
          council_members: "~25",
          partnerships_team: "~8",
        },
        photos: [
          {
            src: "/img/wrs_mini/wrs_bonfire_graphic.jpg",
            width: 2048,
            height: 1152,
            alt: "Event graphic for the post-session bonfire \"Ognisko Posesyjne\"",
            caption: "Graphic for the post-session bonfire \"Ognisko Posesyjne\"",
            credit: "designed by me",
          },
        ],
      },
      {
        heading: "events",
        description:
          "I've helped organize 6+ events for students of our faculty. I was the main coordinator of the integration trip \"MiNIówka\", leading a 9-person organizing team for 55 participants. At other events, such as the faculty picnic \"Całkonalia\" with around 400-500 attendees, I was one of the organizers.",
        tags: ["event organization", "team coordination"],
        stats: {
          events: "6+",
          miniowka_participants: "55",
          miniowka_team: "9",
          calkonalia_attendees: "400-500",
        },
        photos: [
          {
            src: "/img/wrs_mini/calkonalia.jpg",
            width: 1628,
            height: 1334,
            alt: "Me grilling sausages at the Całkonalia faculty picnic",
            caption:
              "Grilling sausages for participants of the faculty picnic \"Całkonalia\"",
            credit: "photo: Michał Popkowicz, FOCUS",
          },
        ],
      },
    ],
  },
  {
    slug: "sports",
    title: "sports",
    short: "Orienteering runner, cartographer and event organizer.",
    sections: [
      {
        heading: "career",
        description:
          "I've been an orienteering runner for over 10 years, representing the UNTS Warszawa club. Over that time I've won 13 medals at the Polish Championships, 5 of them gold. I was also a member of the Polish Youth Team and represented Poland at the 2022 European Youth Orienteering Championships (EYOC). Orienteering combines running with navigation: you race through unknown terrain with only a map and a compass, choosing your own route between the controls, so every race is as much a mental challenge as a physical one.",
        tags: ["orienteering", "running", "unts warszawa"],
        stats: { years: "10+", polish_champs_medals: "13", gold: "5" },
        photos: [
          {
            src: "/img/sports/unts_waw.jpeg",
            width: 1080,
            height: 1396,
            alt: "Me in the UNTS Warszawa club jersey",
            caption: "Representing UNTS Warszawa in the club jersey.",
          },
          {
            src: "/img/sports/polish_champs_track.png",
            width: 1825,
            height: 1580,
            alt: "Orienteering map with my GPS track from the 2024 Polish Championships",
            caption:
              "My winning route from the 2024 Polish Championships, drawn on the competition map.",
          },
        ],
      },
      {
        heading: "cartography",
        description:
          "Beyond racing, I make orienteering maps myself. An orienteering map is far more detailed than a regular one: it shows landforms, vegetation density, fences, buildings and every path that can affect a runner's route choice, all drawn according to strict international specifications. I draw my maps in OCAD, starting from base materials like LiDAR elevation data and orthophotos, and then verify and complete the details in the field.",
        tags: ["ocad", "lidar", "orthophoto", "fieldwork"],
        photos: [
          {
            src: "/img/sports/Wiatraczna_2023.jpg",
            width: 1198,
            height: 985,
            alt: "Sprint orienteering map of the area around Rondo Wiatraczna in Warsaw",
            caption:
              "Wiatraczna (2023): sprint map of Praga, Warsaw, around Rondo Wiatraczna.",
          },
          {
            src: "/img/sports/Mlochow_2024.jpg",
            width: 1489,
            height: 1208,
            alt: "Forest orienteering map of Las Młochowski",
            caption:
              "Młochów (2024): forest map of Las Młochowski, south of Warsaw near Podkowa Leśna.",
          },
        ],
      },
      {
        heading: "organizing",
        description:
          "I also help organize orienteering competitions and take an active part in their preparation. I've been a member of the organizing team at events such as the 2024 Polish Championships in night and middle distance, the 2025 Polish Championships in ultralong distance, Sudety Cup, Mazury Cup and WMOC 2026 (World Masters Orienteering Championships) in Rzeszów.",
        tags: ["event organization", "polish championships", "wmoc 2026"],
        photos: [
          {
            src: "/img/sports/sudety_cup.jpeg",
            width: 2048,
            height: 1365,
            alt: "Me at the start of Sudety Cup",
            caption: "At the start of Sudety Cup",
            credit: "photo: MoonLine Media",
          },
        ],
      },
    ],
  },
];
