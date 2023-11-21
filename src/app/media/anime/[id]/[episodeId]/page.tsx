import EpisodePlayer from "./player";
import { gogoanime } from "@/lib/services/server/providers";

type Source = {
  url: string;
  isM3U8: boolean;
  quality: "360p" | "480p" | "720p" | "1080p";
};

export type EpisodeInfo = {
  sources: Source[];
};

export default async function AnimeEpisodePlayer({
  params,
}: {
  params: { episodeId: string };
}) {
  const episodeInfo = (await gogoanime.fetchEpisodeSources(
    params.episodeId
  )) as EpisodeInfo;

  return <EpisodePlayer data={episodeInfo} />;
}
