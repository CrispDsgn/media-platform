import * as z from "zod";

export const recentEpisodeSchema = z.object({
  id: z.string(),
  episodeId: z.string(),
  episodeNumber: z.number(),
  title: z.string(),
  image: z.string(),
  url: z.string(),
});
export type RecentEpisode = z.infer<typeof recentEpisodeSchema>;

export const topAiringSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  url: z.string(),
  genres: z.array(z.string()),
});
export type TopAiring = z.infer<typeof topAiringSchema>;

export const animePreviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  image: z.string(),
  releaseDate: z.string().nullable(),
  subOrDub: z.enum(["sub", "dub"]),
});
export type AnimePreview = z.infer<typeof animePreviewSchema>;

export const searchResultsSchema = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  results: z.array(animePreviewSchema),
});

export const listTopAiringSchema = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  results: z.array(topAiringSchema),
});

export const listRecentEpisodeSchema = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  results: z.array(recentEpisodeSchema),
});

export const animeEpisodeSchema = z.object({
  id: z.string(),
  number: z.number(),
  url: z.string(),
});

export const animeSchema = animePreviewSchema.extend({
  description: z.string(),
  genres: z.array(z.string()),
  type: z.string().nullable(),
  status: z.string(),
  otherName: z.string(),
  totalEpisodes: z.number(),
  episodes: z.array(animeEpisodeSchema),
});
export type Anime = z.infer<typeof animeSchema>;

export const sourceLinkSchema = z.object({
  url: z.string(),
  quality: z.string(),
  isM3U8: z.boolean(),
});

export const episodeSourcesSchema = z.object({
  headers: z.object({
    Referer: z.string(),
    watchsb: z.string().optional(),
    "User-Agent": z.string().optional(),
  }),
  sources: z.array(sourceLinkSchema),
});
