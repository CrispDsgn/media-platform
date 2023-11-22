import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Anime } from "../../_lib/schema";
import { Badge } from "@/components/ui/badge";

export default function AnimeDetails({ anime }: { anime: Anime }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-col gap-4 lg:basis-full">
        <h4 className="text-xl sm:text-3xl font-bold">Description</h4>

        <p className="text-sm sm:text-base">{anime.description}</p>
      </div>

      <Card className="w-fit lg:basis-full lg:max-w-md">
        <CardHeader className="text-xl sm:text-2xl font-bold">
          Info about show
        </CardHeader>
        <CardContent className="grid grid-cols-[100px_auto] gap-4">
          <span>Genres:</span>
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((genre) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </div>

          <span>Release date:</span>
          <span className="font-bold">{anime.releaseDate}</span>

          <span>Type:</span>
          <span className="font-bold">{anime.type}</span>

          <span>Nr. episodes:</span>
          <span className="font-bold">{anime.totalEpisodes}</span>

          <span>Status:</span>
          <span className="font-bold">{anime.status}</span>

          <span>Sub or Dub:</span>
          <span className="font-bold">{anime.subOrDub}</span>

          <span>Other names:</span>
          <span className="font-bold">
            {anime.otherName === "" ? "-" : anime.otherName}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
