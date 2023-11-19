"use client";

import { getAnimeList } from "@/lib/services/anime";
import { useQuery } from "@tanstack/react-query";
import CardAnime from "./card-anime";

export default function FilteredList({ searchValue }: { searchValue: string }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["anime", searchValue],
    queryFn: () => getAnimeList(searchValue),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item: any, index: number) => (
        <CardAnime anime={item} key={index} />
      ))}
    </div>
  );
}
