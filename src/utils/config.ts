export interface Page {
  readonly name: string;
  readonly href: string;
}

export const pages = [
  { name: "home", href: "/" },
  { name: "contact", href: "/contact" },
  { name: "faq", href: "/faq" },
];
