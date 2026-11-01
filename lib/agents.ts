/** Agent roster. Replace the placeholder agents with real names, photos, bios and contact info. */
export interface Agent {
  slug: string;
  name: string;
  title: string;
  photo?: string; // in /public; omit to show initials
  initials: string;
  phone: string;
  phoneHref: string;
  email: string;
  bio: string;
  focus: string[];
  placeholder?: boolean;
}

export const AGENTS: Agent[] = [
  {
    slug: "michele",
    name: "Michele",
    title: "Broker / Owner",
    photo: "/agent-michele.webp",
    initials: "M",
    phone: "(518) 555-0142",
    phoneHref: "tel:+15185550142",
    email: "michele@charlotterealtygroup.com",
    bio: "Michele founded Charlotte Realty Group to give buyers and sellers in Washington County a local, hands-on brokerage. [Placeholder: a few lines about her background and how long she's lived in the area.]",
    focus: ["Farms & acreage", "Historic homes", "Sellers"],
  },
  {
    slug: "agent-two",
    name: "[Agent name]",
    title: "Licensed Real Estate Salesperson",
    initials: "A",
    phone: "(518) 555-0143",
    phoneHref: "tel:+15185550143",
    email: "agent@charlotterealtygroup.com",
    bio: "[Placeholder bio: where they live, what they love about the area, and the kinds of clients they work with best.]",
    focus: ["First-time buyers", "Village homes"],
    placeholder: true,
  },
  {
    slug: "agent-three",
    name: "[Agent name]",
    title: "Licensed Real Estate Salesperson",
    initials: "A",
    phone: "(518) 555-0144",
    phoneHref: "tel:+15185550144",
    email: "agent@charlotterealtygroup.com",
    bio: "[Placeholder bio: where they live, what they love about the area, and the kinds of clients they work with best.]",
    focus: ["Land", "Relocation"],
    placeholder: true,
  },
];
