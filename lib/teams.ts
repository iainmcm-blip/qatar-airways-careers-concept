export type Team = {
  slug: string;
  name: string;
  image: string;
  imagePosition?: string;
  tagline: string;
  blurb: string;
  dayToDay: string[];
  openRoles: number;
  saudiFocus?: string;
};

export const TEAMS: Team[] = [
  {
    slug: "cabin-crew",
    name: "Cabin Crew & Crew Services",
    image: "/brand/team-cabin-crew.jpg",
    imagePosition: "object-[35%_40%]",
    tagline: "Five-star hospitality at 40,000 feet",
    blurb:
      "Our cabin crew are the most visible expression of the Qatar Airways promise. Based in Doha and drawn from more than 150 nationalities, they carry award-winning service to every corner of the network.",
    dayToDay: [
      "Deliver the five-star service the world rates the best",
      "Care for guests across 160+ global destinations",
      "Represent Qatar and the Group on the world stage",
    ],
    openRoles: 24,
    saudiFocus: "Al Darb pathways for Qatari national crew.",
  },
  {
    slug: "pilots",
    name: "Pilots & Flight Operations",
    image: "/brand/team-pilot.jpg",
    imagePosition: "object-[center_20%]",
    tagline: "One of the youngest widebody fleets in the sky",
    blurb:
      "Fly an advanced, modern fleet across one of the most extensive long-haul networks in aviation, with a transparent command pathway and the backing of a world-leading operation.",
    dayToDay: [
      "Operate modern Airbus and Boeing widebody aircraft",
      "Fly an extensive global long-haul network",
      "Progress on a clear command timeline",
    ],
    openRoles: 14,
  },
  {
    slug: "engineering",
    name: "Engineering",
    image: "/brand/team-engineer.jpg",
    imagePosition: "object-top",
    tagline: "Maintain an advanced fleet to a world-class standard",
    blurb:
      "Join a sophisticated engineering and MRO operation in Doha, with type-endorsement support, modern facilities and a dedicated focus on developing Qatari national engineering talent.",
    dayToDay: [
      "Maintain a young, technologically advanced fleet",
      "Access type endorsements and training infrastructure",
      "Uphold a world-class airworthiness standard",
    ],
    openRoles: 18,
    saudiFocus: "Qatarisation pathways in aircraft engineering.",
  },
  {
    slug: "operations-corporate",
    name: "Operations & Corporate",
    image: "/brand/qa-team.jpg",
    imagePosition: "object-center",
    tagline: "The expertise behind the world's best airline",
    blurb:
      "From commercial and digital to people, finance and sustainability, these are the teams steering a global airline group of twelve subsidiaries from our Doha headquarters.",
    dayToDay: [
      "Steer a global airline group across functions",
      "Work across commercial, digital, people and finance",
      "Advance Qatar National Vision 2030 through aviation",
    ],
    openRoles: 31,
    saudiFocus: "Al Darb graduate and professional pathways.",
  },
  {
    slug: "cargo-airport",
    name: "Cargo & Airport Operations",
    image: "/brand/cargo.jpg",
    imagePosition: "object-center",
    tagline: "Keep a global hub moving, around the clock",
    blurb:
      "Precision on the ground makes the experience in the air. Join the teams behind Qatar Airways Cargo and the operation at Hamad International, one of the world's best airports.",
    dayToDay: [
      "Coordinate turnarounds at a 24-hour global hub",
      "Move freight with Qatar Airways Cargo worldwide",
      "Deliver seamless airport experiences in Doha",
    ],
    openRoles: 16,
  },
  {
    slug: "customer-services",
    name: "Customer Services",
    image: "/brand/ops-digital.jpg",
    imagePosition: "object-center",
    tagline: "Guest care that never sleeps",
    blurb:
      "Be the reassuring voice and the problem-solver behind every journey, supporting guests across channels, languages and time zones with genuine Qatari hospitality.",
    dayToDay: [
      "Support guests across digital and voice channels",
      "Resolve with empathy and speed",
      "Uphold five-star service standards",
    ],
    openRoles: 12,
  },
];
