import Search from "./_components/search";
import Slider from "./_components/slider";
import { getRecentEpisodes, getTopAiring } from "./_lib/server";

export default async function AnimeSearch() {
  const topAiring = await getTopAiring();
  const recentEpisodes = await getRecentEpisodes();

  return (
    <div className="flex flex-col gap-16">
      <div className="border-b pb-2 flex justify-between items-center gap-4">
        <h2 className="text-4xl font-semibold tracking-tight first:mt-0">
          Anime
        </h2>

        <Search />
      </div>

      <Slider title="Top airing" list={topAiring} />

      <Slider title="Recent episodes" list={recentEpisodes} />
    </div>
  );
}
