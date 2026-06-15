export type RAEvent = {
  id: string;
  title: string;
  type: "Open Day" | "Webinar" | "Career Fair" | "Assessment";
  date: string;
  month: string;
  location: string;
  format: "In person" | "Online";
  language: string;
  comingSoon?: boolean;
};

/* Illustrative events for the concept demo. */
export const EVENTS: RAEvent[] = [
  { id: "e1", title: "Cabin Crew Open Day", type: "Open Day", date: "12 Jul 2026", month: "July", location: "Doha", format: "In person", language: "Arabic & English" },
  { id: "e2", title: "Pilots Recruitment Webinar", type: "Webinar", date: "18 Jul 2026", month: "July", location: "Online", format: "Online", language: "English" },
  { id: "e3", title: "Engineering Careers Open Day", type: "Open Day", date: "02 Aug 2026", month: "August", location: "Doha", format: "In person", language: "Arabic & English" },
  { id: "e4", title: "Al Darb Graduate Programme Webinar", type: "Webinar", date: "09 Aug 2026", month: "August", location: "Online", format: "Online", language: "Arabic" },
  { id: "e5", title: "Cabin Crew Assessment Day", type: "Assessment", date: "20 Aug 2026", month: "August", location: "Doha", format: "In person", language: "English" },
  { id: "e6", title: "International Talent Webinar", type: "Webinar", date: "Coming soon", month: "September", location: "Online", format: "Online", language: "English", comingSoon: true },
];

export const EVENT_TYPES = ["All", "Open Day", "Webinar", "Career Fair", "Assessment"];
export const EVENT_REGIONS = ["All regions", "Doha", "Online"];
