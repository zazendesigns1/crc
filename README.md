# Charlotte Realty Group

Website for Charlotte Realty Group, built with Next.js (App Router) and hosted on Vercel by Zazen Designs.

## Status: design preview

Listings are **sample data** in `lib/listings.ts`, and every listing uses `public/placeholder-home.webp`.

## Connecting the MLS / IDX feed

1. Michele signs her MLS's IDX agreement and approves Zazen Designs as her website vendor.
2. Get RESO Web API credentials (direct from the MLS, or through a provider such as SimplyRETS or Repliers).
3. Add the credentials as Vercel environment variables.
4. Replace `getListings()` / `getListing()` in `lib/listings.ts` with API calls, mapping feed fields onto the `Listing` type (the RESO field names are noted next to each field).
5. Swap the illustrative `ValleyMap` for a real map using Latitude/Longitude, and update the IDX disclaimer text to match the MLS's display rules.

## Still to fill in

- Michele's last name, phone, email, office address and bio (`BROKERAGE` in `lib/listings.ts`, `app/about`)
- Lead forms currently show a confirmation only; wire them to email (e.g. Resend) via an API route.

## Develop

```bash
npm install
npm run dev
```
