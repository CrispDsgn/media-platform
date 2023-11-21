import "server-only";
import { gogoanime } from "./providers";
import {
  listRecentEpisodeSchema,
  listTopAiringSchema,
} from "@/lib/types/anime";

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
