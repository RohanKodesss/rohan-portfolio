export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  line: string;
  description: string;
  href: string;
  linkLabel: string;
  image: string;
  alt: string;
  tone: "forest" | "paper";
};

export const projects: Project[] = [
  {
    id: "inkloom",
    name: "Inkloom",
    kind: "AI product",
    year: "2026",
    line: "Logo models, not prompts.",
    description:
      "A brand analysis pass turns a business into constraints. Typography and symbol models draw the mark, then a composition engine sets the lockup, the clear space and the one-colour version.",
    href: "https://inkloom.art",
    linkLabel: "inkloom.art",
    image: "/images/inkloom.jpg",
    alt: "The Inkloom home page, headlined Logos, built the way designers build them.",
    tone: "forest",
  },
  {
    id: "repoquest",
    name: "RepoQuest",
    kind: "Game",
    year: "2025",
    line: "A repository, played as a dungeon.",
    description:
      "Paste a public GitHub repo and walk it as rooms, keys and monsters read from its real files. The code decides the facts; the model only tells the story.",
    href: "https://repoquestt.vercel.app",
    linkLabel: "repoquestt.vercel.app",
    image: "/images/repoquest.jpg",
    alt: "The RepoQuest start screen: a repository URL field and a Check Repo button.",
    tone: "paper",
  },
  {
    id: "lurkr",
    name: "Lurkr",
    kind: "Security tool",
    year: "2025",
    line: "Four checks, one scan.",
    description:
      "Typosquatted domains, socket certificates, browser releases and breach exposure, answered from an in-memory cache and never written to disk.",
    href: "https://lurkr-bsr.vercel.app",
    linkLabel: "lurkr-bsr.vercel.app",
    image: "/images/lurkr.jpg",
    alt: "The Lurkr home page: a security scanner with a target field and four live signal panels.",
    tone: "forest",
  },
];

export const earlier = [
  {
    name: "BillNest",
    detail: "Bill management in Python",
    href: "https://github.com/RohanKodesss/BillNest-",
  },
  {
    name: "Movie Review",
    detail: "Genre and review classifier in Python",
    href: "https://github.com/RohanKodesss/moviereview",
  },
  {
    name: "Cashflow Compass",
    detail: "A personal finance experiment",
    href: "https://github.com/RohanKodesss/Hackerrank",
  },
];

export const facts = [
  { label: "Based", value: "India" },
  { label: "Works", value: "Alone, end to end" },
  { label: "Now", value: "Inkloom, early access" },
];

export const email = "rohan922007@gmail.com";
export const github = "https://github.com/RohanKodesss";

export const patterns = [
  { id: "plain", label: "Plain" },
  { id: "twill", label: "Twill" },
  { id: "basket", label: "Basket" },
] as const;

export type PatternId = (typeof patterns)[number]["id"];
