import "server-only";
import { gogoanime } from "@/app/_lib/providers";
import {
  animeSchema,
  listRecentEpisodeSchema,
  listTopAiringSchema,
} from "./schema";

export async function getTopAiring() {
  try {
    const result = await gogoanime.fetchTopAiring();
    const list = listTopAiringSchema.safeParse(result);

    if (!list.success) {
      console.log(list.error);
      return [];
    } else {
      return list.data.results;
    }
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getRecentEpisodes() {
  try {
    const result = await gogoanime.fetchRecentEpisodes();
    const list = listRecentEpisodeSchema.safeParse(result);

    if (!list.success) {
      console.log(list.error);
      return [];
    } else {
      return list.data.results;
    }
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getAnimeInfoById(id: string) {
  try {
    const result = await gogoanime.fetchAnimeInfo(id);
    const anime = animeSchema.safeParse(result);

    if (!anime.success) {
      console.log(anime.error);
      return null;
    } else {
      return anime.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}
