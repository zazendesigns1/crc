/** Agent roster. Placeholder: all three cards currently share Michele's details until the real agent info arrives. */
export interface Agent {
  slug: string;
  name: string;
  title: string;
  license: string;
  photo: string;
  experience: string;
  serves: string;
  speaks: string;
  bio: string;
  phone: string;
  phoneHref: string;
  email: string;
}

const MICHELE: Omit<Agent, "slug"> = {
  name: "Michele",
  title: "Broker / Owner",
  license: "NYS Lic. #10491200000",
  photo: "/michele-headshot.webp",
  experience: "12 years",
  serves: "Cambridge, Salem, Shushan, Greenwich",
  speaks: "English",
  bio: "Specializes in farmhouses, acreage and historic homes along the Battenkill.",
  phone: "(518) 555-0142",
  phoneHref: "tel:+15185550142",
  email: "michele@charlotterealtygroup.com",
};

export const AGENTS: Agent[] = [
  { slug: "agent-1", ...MICHELE },
  { slug: "agent-2", ...MICHELE },
  { slug: "agent-3", ...MICHELE },
];
