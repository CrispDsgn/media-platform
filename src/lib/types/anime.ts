import * as z from "zod";

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

export const sourceLinkSchema = z.object({
  url: z.string(),
  quality: z.string(),
  isM3U8: z.boolean(),
});

export const episodeSourcesSchema = z.object({
  headers: z.object({
    Referer: z.string(),
    watchsb: z.string(),
    "User-Agent": z.string(),
  }),
  sources: z.array(sourceLinkSchema),
});
