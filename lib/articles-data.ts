/**
 * Articles data, placeholder rows until Alan delivers his actual
 * article links + dates + headlines. Replace this whole array
 * (or migrate to MDX) once real content is available.
 *
 * The `pub` slug is what the filter chips on /articles use.
 * Allowed values: "moneysense", "financial-post", "yahoo", "macleans", "postmedia", "other".
 */

export type Article = {
  pub: string;
  pubLabel: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

export const articles: ReadonlyArray<Article> = [
  {
    pub: "moneysense",
    pubLabel: "MoneySense",
    date: "[ Date ]",
    title: "[ Article headline goes here, keep close to the original ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. This is what shows up to a visitor scanning the list, make it specific and useful, not generic. ]",
    url: "#",
  },
  {
    pub: "financial-post",
    pubLabel: "Financial Post",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "yahoo",
    pubLabel: "Yahoo Finance Canada",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "moneysense",
    pubLabel: "MoneySense",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "macleans",
    pubLabel: "Maclean's",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "financial-post",
    pubLabel: "Financial Post",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "postmedia",
    pubLabel: "Ottawa Citizen",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "moneysense",
    pubLabel: "MoneySense",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "yahoo",
    pubLabel: "Yahoo Finance Canada",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
  {
    pub: "other",
    pubLabel: "Canadian Business",
    date: "[ Date ]",
    title: "[ Article headline goes here ]",
    excerpt:
      "[ A short 1–3 sentence excerpt that captures the angle of the article. ]",
    url: "#",
  },
];

export const articleFilters = [
  { value: "all", label: "All articles" },
  { value: "moneysense", label: "MoneySense" },
  { value: "financial-post", label: "Financial Post" },
  { value: "yahoo", label: "Yahoo Finance" },
  { value: "macleans", label: "Maclean's" },
  { value: "postmedia", label: "Postmedia" },
  { value: "other", label: "Other" },
] as const;
