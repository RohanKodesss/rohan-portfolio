export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  line: string;
  problem: string;
  built: string;
  outcome: string;
  role: string;
  stack: string;
  href: string;
  linkLabel: string;
  repo: string;
  image: string;
  alt: string;
  tone: "panel" | "surface";
};

export const positioning =
  "I build AI products and small web tools end to end: model, interface, launch. I'm best at taking a fuzzy idea and shipping a working v1 solo.";

export const positioningShort =
  "I build AI products and small web tools end to end, and I'm best at taking a fuzzy idea to a working v1 solo.";

export const projects: Project[] = [
  {
    id: "inkloom",
    name: "Inkloom",
    kind: "AI product",
    year: "2026",
    line: "Logo models, not prompts.",
    problem:
      "Logo generators return one image, not an identity. Founders still need a mark that holds up in one colour and at small sizes.",
    built:
      "A brand-analysis pass turns a business into constraints. Typography and symbol models draw the mark, then a composition engine sets the lockup, clear space and one-colour version.",
    outcome: "Live in early access at inkloom.art. Open source on GitHub.",
    role: "Solo: product, model pipeline, interface, launch.",
    stack: "TypeScript, React Router, Postgres, Cloudflare",
    href: "https://inkloom.art",
    linkLabel: "inkloom.art",
    repo: "https://github.com/RohanKodesss/inkloom",
    image: "/images/inkloom.jpg",
    alt: "The Inkloom home page, headlined Logos, built the way designers build them.",
    tone: "panel",
  },
  {
    id: "repoquest",
    name: "RepoQuest",
    kind: "Game",
    year: "2025",
    line: "A repository, played as a dungeon.",
    problem:
      "Reading a new repository is still a wall of files. Existing code maps are static diagrams, not something you can walk.",
    built:
      "Paste a public GitHub repo and explore it as rooms, keys and monsters generated from its real files. The code decides the facts; the model only narrates.",
    outcome: "Live at repoquestt.vercel.app. Open source on GitHub.",
    role: "Solo: game design, repo parser, model prompts, front end, deploy.",
    stack: "Python, Flask, Gemini, JavaScript",
    href: "https://repoquestt.vercel.app",
    linkLabel: "repoquestt.vercel.app",
    repo: "https://github.com/RohanKodesss/Repoquest",
    image: "/images/repoquest.jpg",
    alt: "The RepoQuest start screen: a repository URL field and a Check Repo button.",
    tone: "surface",
  },
  {
    id: "lurkr",
    name: "Lurkr",
    kind: "Security tool",
    year: "2025",
    line: "Four checks, one scan.",
    problem:
      "Checking a domain for typosquats, certificate issues, browser versions and breach exposure usually means four separate tools.",
    built:
      "One scan answers four checks from an in-memory cache, with target data never written to disk.",
    outcome: "Live at lurkr-bsr.vercel.app. Open source on GitHub.",
    role: "Solo: threat checks, cache, interface, deploy.",
    stack: "Python, Flask, JavaScript, in-memory cache",
    href: "https://lurkr-bsr.vercel.app",
    linkLabel: "lurkr-bsr.vercel.app",
    repo: "https://github.com/RohanKodesss/Lurkr",
    image: "/images/lurkr.jpg",
    alt: "The Lurkr home page: a security scanner with a target field and four live signal panels.",
    tone: "panel",
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
