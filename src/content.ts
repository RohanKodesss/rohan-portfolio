export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  line: string;
  summary: string;
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
    summary:
      "A brand-analysis pass turns a business into constraints. Typography and symbol models draw the mark, then a composition engine sets the lockup, clear space and one-colour version.",
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
  },
  {
    id: "repoquest",
    name: "RepoQuest",
    kind: "Game",
    year: "2025",
    line: "A repository, played as a dungeon.",
    summary:
      "Paste a public GitHub repo and explore it as rooms, keys and monsters generated from its real files. The code decides the facts; the model only narrates.",
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
  },
  {
    id: "lurkr",
    name: "Lurkr",
    kind: "Security tool",
    year: "2025",
    line: "Four checks, one scan.",
    summary:
      "One scan answers four checks from an in-memory cache, with target data never written to disk.",
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

export const experience = [
  {
    year: "2026",
    name: "Inkloom",
    role: "Founder, solo builder",
    detail:
      "A logo system that treats a brand as a set of constraints, not a prompt. I built the model pipeline, the interface and the launch.",
    href: "https://inkloom.art",
    linkLabel: "inkloom.art",
  },
  {
    year: "2025",
    name: "RepoQuest",
    role: "Solo builder",
    detail:
      "A repository you can walk through as a dungeon. The parser reads the real files; the model only tells the story around them.",
    href: "https://repoquestt.vercel.app",
    linkLabel: "repoquestt.vercel.app",
  },
  {
    year: "2025",
    name: "Lurkr",
    role: "Solo builder",
    detail:
      "Four security checks behind one scan, answered from an in-memory cache so target data never touches disk.",
    href: "https://lurkr-bsr.vercel.app",
    linkLabel: "lurkr-bsr.vercel.app",
  },
  {
    year: "Earlier",
    name: "Small experiments",
    role: "Python, data, curiosity",
    detail:
      "BillNest, a movie review classifier and Cashflow Compass. Smaller builds, mostly to answer a question I had.",
    href: "https://github.com/RohanKodesss",
    linkLabel: "GitHub",
  },
];

export const toolkit = [
  { label: "Languages", value: "TypeScript, Python, JavaScript" },
  { label: "Frameworks", value: "React, Flask" },
  { label: "Data", value: "Postgres, in-memory cache" },
  { label: "Platform", value: "Cloudflare, Vercel, GitHub" },
];

export const email = "rohan922007@gmail.com";
export const github = "https://github.com/RohanKodesss";

export const patterns = [
  { id: "plain", label: "Plain" },
  { id: "twill", label: "Twill" },
  { id: "basket", label: "Basket" },
] as const;

export type PatternId = (typeof patterns)[number]["id"];
