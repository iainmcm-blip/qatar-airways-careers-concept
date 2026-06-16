export type Programme = {
  id: string;
  name: string;
  type: string;
  summary: string;
  eligibility: string[];
  image: string;
  imagePosition?: string;
  real?: boolean;
};

/* Al Darb is Qatar Airways' real Qatarisation programme. The graduate and
   technical pathways below are illustrative concept extensions of it. */
export const PROGRAMMES: Programme[] = [
  {
    id: "al-darb",
    name: "Al Darb — Qatarisation Programme",
    type: "National talent · Group-wide",
    summary:
      "Al Darb is Qatar Airways Group's national development programme, empowering Qatari nationals to grow into leadership across the airline, the airport and the wider Group — with mentorship, international exposure and tailored development in service of Qatar National Vision 2030.",
    eligibility: [
      "Qatari national",
      "Ambition to build a long-term career in aviation",
      "Strong communication and leadership potential",
      "Fluent in Arabic and English",
    ],
    image: "/brand/al-darb-crew.jpg",
    imagePosition: "object-center",
    real: true,
  },
  {
    id: "graduate",
    name: "Al Darb Graduate Pathway",
    type: "Corporate · 12–24 months",
    summary:
      "A structured graduate development pathway rotating Qatari national graduates across commercial, digital, operations and people functions — building the leaders of the world's best airline group.",
    eligibility: [
      "Qatari national graduate",
      "Bachelor's degree (any discipline)",
      "Strong analytical and communication skills",
      "Ambition to lead on a global stage",
    ],
    image: "/brand/ops-digital.jpg",
    imagePosition: "object-center",
  },
  {
    id: "technical",
    name: "Technical Qatarisation Pathway",
    type: "Engineering · 18–36 months",
    summary:
      "A dedicated pathway developing Qatari aircraft-engineering talent — including the next generation of Qatari women in aircraft engineering — with type-endorsement support and mentorship inside a world-class MRO.",
    eligibility: [
      "Qatari national",
      "STEM background or vocational qualification",
      "Eligibility for aircraft maintenance licensing",
      "Commitment to a long-term technical career",
    ],
    image: "/brand/team-engineer.jpg",
    imagePosition: "object-[center_28%] scale-[1.28] origin-[50%_28%]",
  },
];

export const NAWAT_PROCESS = [
  { title: "Apply", body: "Submit your application through the official Qatar Airways careers portal — it takes minutes." },
  { title: "Assessment", body: "Attend an assessment day to meet the team and showcase your potential." },
  { title: "Offer", body: "Receive your place on the Al Darb programme and your offer." },
  { title: "Develop", body: "Begin a structured development journey with mentorship from senior leaders." },
  { title: "Rotate", body: "Gain international exposure across the airline, the airport and the Group." },
  { title: "Lead", body: "Step into a leadership or specialist role and help shape the future of Qatari aviation." },
];
