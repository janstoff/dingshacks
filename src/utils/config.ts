export interface Page {
  readonly name: string;
  readonly href: string;
}

export const pages = [
  { name: "home", href: "/" },
  { name: "story", href: "/story" },
  { name: "results", href: "/results" },
  { name: "contact", href: "/contact" },
];
