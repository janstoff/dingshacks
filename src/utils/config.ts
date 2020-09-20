export interface Page {
  readonly name: string;
  readonly href: string;
}

export const CONTACT_EMAIL_ADDRESS = "jan.steinhoff@gmail.com";

export const PAGES = [
  { name: "home", href: "/" },
  { name: "story", href: "/story" },
  { name: "results", href: "/results" },
  { name: "contact", href: "/contact" },
];
