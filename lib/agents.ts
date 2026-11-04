/**
 * Agent roster. PLACEHOLDER COPY — Michele is reviewing the wording.
 * Names, photos, license numbers and contact details for agents 2 and 3 still to come.
 */
export interface Agent {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  license: string;
  photo: string;
  bio: string;
  phone: string;
  phoneHref: string;
  email: string;
}

export const AGENTS: Agent[] = [
  {
    slug: "michele",
    name: "Michele",
    title: "Broker / Owner",
    specialty: "Attorney & Broker",
    license: "NYS Lic. #10491200000",
    photo: "/agent-headshot.webp",
    bio: "Before I was a broker, I spent 30 years as a real estate attorney. I've read thousands of contracts, title reports and surveys, so I know where deals go wrong and how to keep yours on track.",
    phone: "(518) 555-0142",
    phoneHref: "tel:+15185550142",
    email: "michele@charlotterealtygroup.com",
  },
  {
    slug: "horse-properties",
    name: "[Agent name]",
    title: "Licensed Real Estate Salesperson",
    specialty: "Equestrian Properties",
    license: "NYS Lic. #[number]",
    photo: "/agent-headshot-2.webp",
    bio: "[Name] trains at some of the region's best-known horse farms. If you're buying or selling an equestrian property, he knows what matters, from footing and fencing to barn layout, and who the serious buyers are.",
    phone: "(518) 555-0143",
    phoneHref: "tel:+15185550143",
    email: "[name]@charlotterealtygroup.com",
  },
  {
    slug: "property-condition",
    name: "[Name]",
    title: "[Title]",
    specialty: "Construction & Property Condition",
    license: "",
    photo: "/agent-headshot-2.webp",
    bio: "[Name] has spent his career as an aircraft mechanic, where details aren't optional. He brings that eye to every house, barn and outbuilding, so you know what you're looking at before you make an offer.",
    phone: "(518) 555-0144",
    phoneHref: "tel:+15185550144",
    email: "[name]@charlotterealtygroup.com",
  },
];
