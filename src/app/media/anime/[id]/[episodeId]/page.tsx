import { ANIME } from "@consumet/extensions";
import EpisodePlayer from "./player";

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
  const gogoanime = new ANIME.Gogoanime();
  const episodeInfo = (await gogoanime.fetchEpisodeSources(
    params.episodeId
  )) as EpisodeInfo;

  return <EpisodePlayer data={episodeInfo} />;
}
