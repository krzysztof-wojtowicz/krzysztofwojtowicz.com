export type InterestData = {
  slug: string; // used in the subpage url: /interests/<slug>
  title: string;
  short: string; // one-liner shown on the card
};

export const interests: InterestData[] = [
  {
    slug: "current-work",
    title: "current_work",
    short: "What I'm working on right now.",
  },
  {
    slug: "student-initiatives",
    title: "student_initiatives",
    short: "Student Council and other initiatives at WUT.",
  },
  {
    slug: "sports",
    title: "sports",
    short: "Running and orienteering, on and off the map.",
  },
];
