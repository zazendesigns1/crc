/**
 * SAMPLE DATA — placeholder listings for the design preview.
 *
 * When Charlotte Realty Group's IDX feed is approved, replace `getListings()`
 * with a fetch to the RESO Web API (or an IDX provider such as SimplyRETS / Repliers)
 * and map the feed's fields onto the `Listing` type below. The rest of the site
 * only talks to these functions, so nothing else has to change.
 */

export type ListingStatus = "New" | "Active" | "Pending" | "Price reduced";
export type ListingType = "House" | "Farm" | "Land" | "Multi-family";

export interface Listing {
  id: string;
  mls: string; // RESO: ListingId
  addr: string; // RESO: UnparsedAddress
  town: string; // RESO: City
  zip: string; // RESO: PostalCode
  price: number; // RESO: ListPrice
  beds: number; // RESO: BedroomsTotal
  baths: number; // RESO: BathroomsTotalDecimal
  sqft: number; // RESO: LivingArea
  acres: number; // RESO: LotSizeAcres
  type: ListingType; // RESO: PropertyType
  status: ListingStatus; // RESO: StandardStatus (+ price-change flag)
  dom: number; // RESO: DaysOnMarket
  year: number | null; // RESO: YearBuilt
  ours: boolean; // ListOfficeMlsId === CRG office id
  office?: string; // RESO: ListOfficeName
  feat: string[];
  heat: string;
  water: string;
  sewer: string;
  school: string;
  tax: number; // RESO: TaxAnnualAmount
  desc: string; // RESO: PublicRemarks
  photos: string[]; // RESO: Media[].MediaURL
  x: number; // preview map position — real listings use Latitude/Longitude
  y: number;
}

export const BROKERAGE = {
  name: "Charlotte Realty Group",
  agent: "Michele Anderson",
  title: "Broker/Owner",
  phone: "(518) 555-0142",
  phoneHref: "tel:+15185550142",
  email: "michele@charlotterealtygroup.com",
  office: "[Office address], NY",
  mlsName: "[Regional MLS]",
  dataUpdated: "Nov 1, 2026 8:00 AM",
};

export const TOWNS = ["Argyle", "Cambridge", "Easton", "Greenwich", "Hoosick Falls", "Salem", "Schuylerville", "Shushan"];
export const TYPES: ListingType[] = ["House", "Farm", "Land", "Multi-family"];

/** Placeholder photo used for every sample listing until real MLS media is available. */
export const PLACEHOLDER_PHOTO = "/placeholder-home.webp";

const LISTINGS: Listing[] = ([
  { id: "crg101", mls: "S1561201", addr: "412 County Route 61", town: "Shushan", zip: "12873", price: 649000, beds: 4, baths: 2.5, sqft: 2860, acres: 38.2, type: "Farm", status: "New", dom: 2, year: 1858, ours: true, x: 640, y: 250,
    feat: ["Bank barn", "Battenkill frontage", "Stone walls", "Wood stove", "Mountain views"], heat: "Oil, wood stove", water: "Drilled well", sewer: "Septic", school: "Salem CSD", tax: 7480,
    desc: "An 1858 farmhouse on 38 rolling acres with roughly 900 feet along the Battenkill. The original bank barn is sound and ready for animals, equipment or a studio. Inside: wide-plank pine floors, a big eat-in kitchen with a wood stove, and four bedrooms upstairs. Hayfields are leased to a neighboring farmer through 2027." },
  { id: "crg102", mls: "S1561188", addr: "27 West Main Street", town: "Cambridge", zip: "12816", price: 389000, beds: 3, baths: 2, sqft: 1940, acres: 0.4, type: "House", status: "Active", dom: 11, year: 1890, ours: true, x: 560, y: 395,
    feat: ["Wraparound porch", "Walk to village", "Original woodwork", "Detached garage"], heat: "Natural gas", water: "Public", sewer: "Public", school: "Cambridge CSD", tax: 6120,
    desc: "A Queen Anne Victorian two blocks from Hubbard Hall and the Cambridge co-op. Pocket doors, the original staircase and a deep wraparound porch. The kitchen was updated in 2021 and the roof was replaced in 2019. Detached garage with a loft." },
  { id: "crg103", mls: "S1560975", addr: "0 Dutch Hill Road (Lot 4)", town: "Argyle", zip: "12809", price: 129000, beds: 0, baths: 0, sqft: 0, acres: 22.5, type: "Land", status: "Active", dom: 34, year: null, ours: true, x: 420, y: 120,
    feat: ["Surveyed", "Perc tested", "Southern exposure", "Road frontage"], heat: "", water: "", sewer: "", school: "Argyle CSD", tax: 1180,
    desc: "Twenty-two and a half surveyed acres of open meadow and hardwoods with 600 feet of road frontage. The perc test is done, and there are a few building sites that look south across the valley. Electric is at the road." },
  { id: "crg104", mls: "S1561044", addr: "8 Academy Street", town: "Salem", zip: "12865", price: 274900, beds: 3, baths: 1.5, sqft: 1620, acres: 0.3, type: "House", status: "Price reduced", dom: 41, year: 1948, ours: true, x: 760, y: 150,
    feat: ["Hardwood floors", "Full basement", "Fenced yard", "New furnace"], heat: "Oil, forced air", water: "Public", sewer: "Septic", school: "Salem CSD", tax: 4310,
    desc: "A tidy Cape Cod on a quiet village street, steps from the Salem Courthouse and the Wednesday farmers market. Hardwood floors throughout, a first-floor bedroom, and two dormered bedrooms upstairs. The furnace was replaced in 2024." },
  { id: "m201", mls: "S1561310", addr: "155 State Route 29", town: "Greenwich", zip: "12834", price: 459000, beds: 4, baths: 2, sqft: 2400, acres: 3.1, type: "House", status: "New", dom: 1, year: 1820, ours: false, x: 300, y: 300, office: "Hudson Valley Homes",
    feat: ["Federal-style", "Two fireplaces", "Carriage house", "In-ground pool"], heat: "Oil, hot water", water: "Drilled well", sewer: "Septic", school: "Greenwich CSD", tax: 8040,
    desc: "A Federal-era center-hall colonial on just over three acres with a carriage house and pool. Two working fireplaces, nine-foot ceilings and a renovated primary bath." },
  { id: "m202", mls: "S1561102", addr: "61 Ferry Street", town: "Schuylerville", zip: "12871", price: 239000, beds: 3, baths: 1, sqft: 1380, acres: 0.2, type: "House", status: "Active", dom: 19, year: 1900, ours: false, x: 120, y: 230, office: "Saratoga Realty Partners",
    feat: ["Near canal trail", "Front porch", "Updated electric"], heat: "Natural gas", water: "Public", sewer: "Public", school: "Schuylerville CSD", tax: 3920,
    desc: "A village farmhouse a short walk from the Champlain Canal trail and Broadway's shops. Updated electric, a deep backyard and a covered front porch." },
  { id: "m203", mls: "S1560890", addr: "1290 County Route 74", town: "Shushan", zip: "12873", price: 315000, beds: 2, baths: 1, sqft: 1100, acres: 6.8, type: "House", status: "Pending", dom: 27, year: 1978, ours: false, x: 700, y: 285, office: "Battenkill Country Realty",
    feat: ["Pond", "Screened porch", "Workshop"], heat: "Propane, wood stove", water: "Drilled well", sewer: "Septic", school: "Cambridge CSD", tax: 3650,
    desc: "A cedar-sided cabin with a spring-fed pond, a screened porch and a heated workshop. A quiet four-season retreat near the Vermont line." },
  { id: "m204", mls: "S1561255", addr: "34 Bunker Hill Road", town: "Easton", zip: "12834", price: 875000, beds: 5, baths: 3.5, sqft: 3900, acres: 52, type: "Farm", status: "Active", dom: 8, year: 1795, ours: false, x: 250, y: 400, office: "Upstate Land & Farm",
    feat: ["Horse barn", "Riding ring", "Hudson views", "Guest cottage"], heat: "Geothermal", water: "Drilled well", sewer: "Septic", school: "Greenwich CSD", tax: 14200,
    desc: "A restored 1795 colonial on 52 acres with an eight-stall horse barn, fenced paddocks, a riding ring and a guest cottage. Long views west to the Hudson." },
  { id: "m205", mls: "S1561019", addr: "9 Elm Street", town: "Hoosick Falls", zip: "12090", price: 199500, beds: 3, baths: 1.5, sqft: 1460, acres: 0.25, type: "House", status: "Active", dom: 22, year: 1962, ours: false, x: 610, y: 500, office: "Rensselaer County Realty",
    feat: ["One-level living", "Attached garage", "Patio"], heat: "Oil, baseboard", water: "Public", sewer: "Public", school: "Hoosick Falls CSD", tax: 4020,
    desc: "A one-level ranch on a level lot with an attached garage and back patio. Close to schools and downtown." },
  { id: "m206", mls: "S1561277", addr: "720 Lick Springs Road", town: "Argyle", zip: "12809", price: 549000, beds: 4, baths: 3, sqft: 2750, acres: 14, type: "House", status: "New", dom: 3, year: 2006, ours: false, x: 470, y: 90, office: "Lakes Region Realty",
    feat: ["Open floor plan", "Two-car garage", "Pole barn", "Generator"], heat: "Propane, radiant", water: "Drilled well", sewer: "Septic", school: "Argyle CSD", tax: 7650,
    desc: "A newer farmhouse-style home on fourteen acres with an open plan, radiant floors, a whole-house generator and a 30×40 pole barn." },
  { id: "m207", mls: "S1560812", addr: "0 Camden Valley Road", town: "Salem", zip: "12865", price: 89000, beds: 0, baths: 0, sqft: 0, acres: 11.4, type: "Land", status: "Active", dom: 66, year: null, ours: false, x: 820, y: 200, office: "Battenkill Country Realty",
    feat: ["Wooded", "Stream", "Hunting"], heat: "", water: "", sewer: "", school: "Salem CSD", tax: 690,
    desc: "Eleven wooded acres with a seasonal stream. Good for hunting, a camp, or a future homesite." },
  { id: "m208", mls: "S1561150", addr: "18 Gilbert Street", town: "Cambridge", zip: "12816", price: 329000, beds: 3, baths: 2, sqft: 1780, acres: 0.5, type: "House", status: "Active", dom: 15, year: 1925, ours: false, x: 530, y: 420, office: "Village Real Estate Co.",
    feat: ["Sunroom", "Walk to school", "Updated kitchen"], heat: "Natural gas", water: "Public", sewer: "Public", school: "Cambridge CSD", tax: 5480,
    desc: "A 1920s colonial with a bright sunroom, an updated kitchen and a big yard, a short walk to the school and village." },
  { id: "m209", mls: "S1561333", addr: "402 County Route 113", town: "Greenwich", zip: "12834", price: 415000, beds: 3, baths: 2, sqft: 2100, acres: 9.6, type: "House", status: "Active", dom: 6, year: 1988, ours: false, x: 340, y: 340, office: "Hudson Valley Homes",
    feat: ["Battenkill access", "Barn", "Finished basement"], heat: "Propane", water: "Drilled well", sewer: "Septic", school: "Greenwich CSD", tax: 6290,
    desc: "An expanded Cape on nearly ten acres with a small barn, a finished basement and a footpath down to the Battenkill for fishing and tubing." },
  { id: "m210", mls: "S1560944", addr: "55 Pearl Street", town: "Schuylerville", zip: "12871", price: 285000, beds: 4, baths: 2, sqft: 1950, acres: 0.3, type: "Multi-family", status: "Active", dom: 38, year: 1880, ours: false, x: 100, y: 255, office: "Saratoga Realty Partners",
    feat: ["Two units", "Separate meters", "Off-street parking"], heat: "Natural gas", water: "Public", sewer: "Public", school: "Schuylerville CSD", tax: 5110,
    desc: "An up/down two-family, each unit with two bedrooms and separate utilities. Live in one and rent the other." },
] as Omit<Listing, "photos">[]).map((l) => ({ ...l, photos: [PLACEHOLDER_PHOTO, PLACEHOLDER_PHOTO, PLACEHOLDER_PHOTO, PLACEHOLDER_PHOTO] }));

export function getListings(): Listing[] {
  return LISTINGS;
}

export function getListing(id: string): Listing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export const money = (n: number) => "$" + n.toLocaleString("en-US");
export const bathTxt = (b: number) => (b % 1 ? b.toFixed(1) : String(b));
export const statusClass = (s: ListingStatus) => ({ New: "new", Pending: "pending", "Price reduced": "reduced", Active: "" })[s];
export const courtesyOf = (l: Listing) => (l.ours ? BROKERAGE.name : l.office ?? "");
