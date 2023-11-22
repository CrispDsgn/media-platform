import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAnimeInfoById } from "../_lib/server";
import { notFound } from "next/navigation";
import Banner from "./_components/banner";
import AnimeDetails from "./_components/anime-details";
import AnimeEpisodes from "./_components/anime-episodes";

export default async function AnimeInfo({
  params,
}: {
  params: { id: string };
}) {
  const animeInfo = await getAnimeInfoById(params.id);
  if (!animeInfo) return notFound();

  return (
    <div className="flex flex-col gap-8">
      <Banner anime={animeInfo} />

      <Tabs defaultValue="about">
        <TabsList className="mb-4">
          <TabsTrigger value="about">Details</TabsTrigger>
          <TabsTrigger value="episodes">Episodes</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <AnimeDetails anime={animeInfo} />
        </TabsContent>

        <TabsContent value="episodes">
          <AnimeEpisodes anime={animeInfo} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
