"use client";

import Search from "./search";

export default function AnimeSearch() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-b pb-2 flex justify-between items-center gap-4">
        <h2 className="text-4xl font-semibold tracking-tight first:mt-0">
          Anime
        </h2>

        <Search />
      </div>
    </div>
  );
}
