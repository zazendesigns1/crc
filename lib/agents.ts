/**
 * Team roster. Copy adapted from Michele's drafts (Nov 2026) — still for her review.
 * Billy's photo, license and contact details are placeholders.
 */
export interface Agent {
  slug: string;
  name: string;
  firstName: string;
  title: string;
  specialty: string;
  license: string;
  photo: string;
  portrait: string; // full-length profile photo
  bio: string; // one or two lines for the team card
  headline: string; // profile page headline
  story: string[]; // profile page paragraphs
  beyond?: string; // personal paragraph, still to come
  highlights: string[];
  phone: string;
  phoneHref: string;
  email: string;
}

export const AGENTS: Agent[] = [
  {
    slug: "michele",
    name: "Michele Anderson",
    firstName: "Michele",
    title: "Founder | Real Estate Broker",
    specialty: "30 years in real estate law",
    license: "NYS Lic. #10491200000",
    photo: "/head-michele-hd.webp",
    portrait: "/portrait-michele.webp",
    bio: "Thirty years as a real estate attorney gives Michele a different perspective on every transaction.",
    headline: "A lifetime of real estate experience. A different perspective on every transaction.",
    story: [
      "For 30 years, Michele practiced as a real estate attorney, working through contracts, title, ownership structures and the complications that can surface before a closing. Today she brings that experience to buyers and sellers of distinguished residences, investment property, equestrian estates and land.",
      "For many of her clients, a sale is part of something bigger: letting go of a long-held asset, finding replacement property, or rethinking their real estate holdings. Michele's focus is on spotting the questions that matter early, so her clients can make decisions with confidence.",
    ],
    beyond: "[Michele's personal paragraph: her connection to the region, family, farm, or the land and lifestyle that define the area.]",
    highlights: ["30 years of real estate legal experience", "Founder of Charlotte Realty Group", "Distinguished residences, investment real estate, equestrian estates and land"],
    phone: "(518) 555-0142",
    phoneHref: "tel:+15185550142",
    email: "michele@charlotterealtygroup.com",
  },
  {
    slug: "billy",
    name: "Billy Smith",
    firstName: "Billy",
    title: "Real Estate Salesperson",
    specialty: "Equestrian properties",
    license: "NYS Lic. #[number]",
    photo: "/head-billy-hd.webp",
    portrait: "/portrait-billy.webp",
    bio: "An established local reputation and a lifelong connection to the equestrian community: horse properties, land and the rural lifestyle.",
    headline: "Local knowledge. A lifetime around horses.",
    story: [
      "For buyers and sellers of equestrian property, experience in the horse world matters. Billy trains at some of the region's best-known horse farms, and his reputation among horse people is built on years of hands-on work, not just sales.",
      "He knows what makes a horse property work: pasture and footing, fencing, barn layout, water, riding facilities and the realities of day-to-day care. Whether you're evaluating a working farm, searching for the right acreage or selling a treasured property, Billy understands that these places are more than real estate. They're a way of life.",
    ],
    highlights: ["Trains at major horse farms across the region", "Equestrian estates, farms and rural acreage", "Established local reputation and relationships"],
    phone: "(518) 555-0143",
    phoneHref: "tel:+15185550143",
    email: "billy@charlotterealtygroup.com",
  },
  {
    slug: "scott",
    name: "Scott Morrissey",
    firstName: "Scott",
    title: "Real Estate Salesperson",
    specialty: "Technical perspective",
    license: "NYS Lic. #[number]",
    photo: "/head-scott-photo.webp",
    portrait: "/portrait-scott-photo.webp",
    bio: "A licensed aircraft mechanic, Scott brings a technical, detail-oriented eye for how a property is built and how it works.",
    headline: "A technical perspective. A commitment to detail.",
    story: [
      "As a licensed aircraft mechanic, Scott has built a career on technical knowledge, precision and attention to detail. Aviation taught him to understand the systems, structures and practical details that make something work as intended.",
      "That perspective carries naturally into real estate, where careful evaluation and attention to detail can make a real difference. Scott is committed to giving clients a knowledgeable, personal experience, working alongside a team whose expertise spans real estate law, equestrian properties, investment real estate and distinctive residences.",
    ],
    highlights: ["Licensed aircraft mechanic", "Systems, structures and property condition", "Part of a team spanning law, equestrian and investment real estate"],
    phone: "(518) 555-0144",
    phoneHref: "tel:+15185550144",
    email: "scott@charlotterealtygroup.com",
  },
];

export const getAgent = (slug: string) => AGENTS.find((a) => a.slug === slug);