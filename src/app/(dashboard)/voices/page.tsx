import { voicesSearchParamsCache } from "@/features/voices/lib/params";
import { prefetch, trpc, HydrateClient } from "@/trpc/server";
import type { Metadata } from "next";
import type { SearchParams } from "nuqs/server";
import { VoicesView } from "@/features/voices/views/voices-view";

export const metadata: Metadata = {
    title: "Voices",
}

// type VoicePageProps = SearchParams<typeof voices>

export default async function VoicePage({
    searchParams
}: {
    searchParams: Promise<SearchParams>
}) {

    const { query } = await voicesSearchParamsCache.parse(searchParams)
    prefetch(trpc.voices.getAll.queryOptions({ query }))

    return (
        <HydrateClient>
            <VoicesView />
        </HydrateClient>
    )
}