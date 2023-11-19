import { ANIME } from "@consumet/extensions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type AnimeEpisode = {
  id: string;
  number: number;
  url: string;
};

type AnimeInfo = {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  episodes: AnimeEpisode[];
};

export default async function AnimeInfo({
  params,
}: {
  params: { id: string };
}) {
  const gogoanime = new ANIME.Gogoanime();
  const animeInfo = (await gogoanime.fetchAnimeInfo(params.id)) as AnimeInfo;

  return (
    <div className="flex flex-col gap-4">
      <Link href={"/media/anime"}>
        <Button variant={"link"}>Back to list</Button>
      </Link>

      <Image
        src={animeInfo.image}
        width={100}
        height={300}
        alt={animeInfo.title}
        style={{ width: "100%", height: "400px" }}
      />

      <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="episodes">Episodes</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <div className="grid grid-cols-2 gap-4">
            <span>Genres:</span>
            <div className="flex flex-wrap gap-2">
              {animeInfo.genres.map((genre, index) => (
                <span key={index}>{genre},</span>
              ))}
            </div>

            <span>Total episodes:</span>
            <span>{animeInfo.totalEpisodes}</span>

            <span>Release date:</span>
            <span>{animeInfo.releaseDate}</span>

            <span>Sub/Dub:</span>
            <span>{animeInfo.subOrDub}</span>

            <span>Status:</span>
            <span>{animeInfo.status}</span>

            <span>Other name:</span>
            <span>{animeInfo.otherName}</span>

            <span>Description:</span>
            <span>{animeInfo.description}</span>
          </div>
        </TabsContent>
        <TabsContent value="episodes">
          <div className="flex flex-col gap-2">
            {animeInfo.episodes.map((episode: AnimeEpisode, index) => (
              <Link
                key={index}
                href={`/media/anime/${animeInfo.id}/${episode.id}`}
              >
                Episode {episode.number}
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
