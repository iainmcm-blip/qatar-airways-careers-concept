/* Illustrative employee stories — to be replaced with real, verified
   employee stories. The `saudi` flag is reused to mean "Qatari national". */
export type Story = {
  id: string;
  name: string;
  role: string;
  team: string;
  format: "Profile" | "Day in the Life" | "Video" | "Career Journey" | "Nationalities";
  quote: string;
  image: string;
  imagePosition?: string;
  nationality?: string;
  saudi?: boolean;
};

export const STORIES: Story[] = [
  {
    id: "noor-cabin",
    name: "Noor",
    role: "Cabin Crew — Doha Base",
    team: "Cabin Crew",
    format: "Career Journey",
    quote:
      "In four years I've called Doha home and the world my office. Five-star service isn't a slogan here — it's the standard we hold each other to.",
    image: "/brand/team-cabin-crew.jpg",
    imagePosition: "object-[center_18%]",
    nationality: "Lebanon",
  },
  {
    id: "daniel-pilot",
    name: "Daniel",
    role: "First Officer — Boeing 787",
    team: "Pilots & Flight Operations",
    format: "Profile",
    quote:
      "I came for the network and the fleet. I stayed for the command pathway — it's the clearest and fairest I've flown under.",
    image: "/brand/team-pilot.jpg",
    imagePosition: "object-top",
    nationality: "United Kingdom",
  },
  {
    id: "aisha-aldarb",
    name: "Aisha",
    role: "Commercial Analyst — Al Darb Pathway",
    team: "Operations & Corporate",
    format: "Day in the Life",
    quote:
      "Al Darb put a Qatari graduate in rooms where real decisions get made. Every week I'm shaping how the Group competes globally.",
    image: "/brand/team-corporate.jpg",
    imagePosition: "object-[center_35%]",
    nationality: "Qatar",
    saudi: true,
  },
  {
    id: "marco-engineer",
    name: "Marco",
    role: "Licensed Aircraft Engineer",
    team: "Engineering",
    format: "Profile",
    quote:
      "A young fleet, world-class facilities and a team that holds the bar high. The technical depth here is genuinely rare.",
    image: "/brand/hero-fleet.jpg",
    imagePosition: "object-[center_40%]",
    nationality: "Italy",
  },
  {
    id: "fatima-engineer",
    name: "Fatima",
    role: "Engineering Trainee — Al Darb",
    team: "Engineering",
    format: "Nationalities",
    quote:
      "Building a career in aircraft engineering at home in Qatar — and being trusted to do it well — means everything to me and my family.",
    image: "/brand/team-engineer.jpg",
    imagePosition: "object-top",
    nationality: "Qatar",
    saudi: true,
  },
  {
    id: "omar-experience",
    name: "Omar",
    role: "Premium Experience Designer",
    team: "Operations & Corporate",
    format: "Video",
    quote:
      "From Qsuite to the lounge, we design moments people remember for years. That obsession with detail is what keeps us the world's best.",
    image: "/brand/ife.jpg",
    imagePosition: "object-center",
    nationality: "Qatar",
    saudi: true,
  },
];
