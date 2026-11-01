import { Suspense } from "react";
import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { getListings } from "@/lib/listings";

export const metadata: Metadata = { title: "Search Homes for Sale", description: "Search homes, farms and land for sale in Washington County and the Battenkill Valley." };

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient listings={getListings()} />
    </Suspense>
  );
}
