/* Illustrative demo roles for the concept. Real listings live on the official
   Qatar Airways careers portal. Internal flags `saudiOnly`/`nawat` are reused
   from the source system to mean "Qatari-nationals only" / "Al Darb pathway". */
export type Job = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Programme" | "Contract";
  level: "Entry" | "Experienced" | "Senior" | "Leadership";
  summary: string;
  saudiOnly?: boolean;
  nawat?: boolean;
  featured?: boolean;
};

export const JOBS: Job[] = [
  {
    id: "cabin-crew",
    title: "Cabin Crew — Doha Base",
    team: "Cabin Crew",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Entry",
    summary:
      "Be the face of five-star service at 40,000 feet. Based in Doha with access to more than 160 destinations across one of the world's most diverse fleets.",
    featured: true,
  },
  {
    id: "al-darb-graduate",
    title: "Al Darb Graduate Programme — Cohort 2026",
    team: "Operations & Corporate",
    location: "Doha, Qatar",
    type: "Programme",
    level: "Entry",
    summary:
      "A structured Qatarisation pathway for Qatari national graduates, rotating across the Group with mentorship and international exposure.",
    saudiOnly: true,
    nawat: true,
    featured: true,
  },
  {
    id: "first-officer-787",
    title: "First Officer — Boeing 787 Dreamliner",
    team: "Pilots & Flight Operations",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Fly one of the youngest widebody fleets in the world on a global long-haul network, with a clear command-upgrade pathway.",
    featured: true,
  },
  {
    id: "licensed-engineer",
    title: "Licensed Aircraft Engineer (B1/B2)",
    team: "Engineering",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Maintain an advanced fleet with type-endorsement support inside a world-class Doha engineering operation.",
    featured: true,
  },
  {
    id: "guest-experience-designer",
    title: "Premium Experience Designer",
    team: "Operations & Corporate",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Shape the award-winning journey — from Qsuite to the lounge — that keeps Qatar Airways rated the world's best.",
    featured: true,
  },
  {
    id: "al-darb-commercial",
    title: "Al Darb Pathway — Commercial",
    team: "Operations & Corporate",
    location: "Doha, Qatar",
    type: "Programme",
    level: "Entry",
    summary:
      "A dedicated Qatarisation pathway developing Qatari national talent across commercial functions.",
    saudiOnly: true,
    featured: true,
  },
  {
    id: "airport-ops-controller",
    title: "Airport Operations Controller — Hamad International",
    team: "Cargo & Airport Operations",
    location: "Hamad International Airport, Doha",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Keep the world's best airport moving with precision across a 24-hour global hub.",
    featured: true,
  },
  {
    id: "captain-787",
    title: "Captain — Boeing 787 Dreamliner",
    team: "Pilots & Flight Operations",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Senior",
    summary:
      "Command a modern widebody fleet across one of the most extensive long-haul networks in aviation.",
  },
  {
    id: "customer-care-agent",
    title: "Contact Centre Agent (Arabic & English)",
    team: "Customer Services",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Entry",
    summary:
      "Be the reassuring voice behind every journey, supporting guests across digital and voice channels.",
  },
  {
    id: "cargo-specialist",
    title: "Cargo Operations Specialist",
    team: "Cargo & Airport Operations",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Move freight across the globe with Qatar Airways Cargo, one of the world's largest air-cargo carriers.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer — Digital",
    team: "Operations & Corporate",
    location: "Doha, Qatar",
    type: "Full-time",
    level: "Experienced",
    summary:
      "Build the data backbone of a digitally ambitious airline group from our Doha headquarters.",
  },
  {
    id: "lounge-host",
    title: "Premium Lounge Host — Al Mourjan",
    team: "Customer Services",
    location: "Hamad International Airport, Doha",
    type: "Contract",
    level: "Entry",
    summary:
      "Deliver signature hospitality in the award-winning lounges at the heart of Hamad International.",
  },
];

export const TEAMS_FILTER = [
  "Cabin Crew",
  "Pilots & Flight Operations",
  "Engineering",
  "Operations & Corporate",
  "Cargo & Airport Operations",
  "Customer Services",
];
