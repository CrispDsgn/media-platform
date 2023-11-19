"use client";

import { Command, CommandInput } from "@/components/ui/command";
import { useEffect, useState } from "react";
import FilteredList from "./filtered-list";
import { useDebounce } from "@/lib/hooks/use-debounce";

export default function AnimeSearch() {
  const [search, setSearch] = useState<string>("");
  const searchQuery = useDebounce(search, 1500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) return;
    setSearch(searchValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Anime List
      </h2>

      <Command
        className="rounded-lg border shadow-md max-w-md"
        onChange={handleSearch}
      >
        <CommandInput placeholder="Search..." />
      </Command>

      <FilteredList searchValue={searchQuery} />
    </div>
  );
}
