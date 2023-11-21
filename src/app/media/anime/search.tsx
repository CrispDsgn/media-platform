"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { getAnimeList } from "@/lib/services/anime";
import { AnimePreview } from "@/lib/types/anime";
import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const searchQuery = useDebounce(search, 1000);

  const { data } = useQuery({
    queryKey: ["anime", searchQuery],
    queryFn: () => getAnimeList(searchQuery),
    placeholderData: [],
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) return;
    setSearch(searchValue);
  };

  return (
    <>
      <Button variant="link" size="icon" onClick={() => setOpen(true)}>
        <SearchIcon className="h-4 w-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command shouldFilter={false} onChange={handleSearch}>
          <CommandInput placeholder="Search..." />

          <CommandList>
            <CommandEmpty>No results</CommandEmpty>
            {data &&
              data.map((item, index) => (
                <CommandItem key={index}>
                  <PreviewAnime anime={item} />
                </CommandItem>
              ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

const PreviewAnime = ({ anime }: { anime: AnimePreview }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${anime.id}`}
      className="flex items-center gap-4 w-full"
    >
      <div className="relative h-16 w-10">
        <Image
          src={anime.image}
          fill
          style={{ objectFit: "cover" }}
          alt={anime.title}
          sizes="100%"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-bold">{anime.title}</span>
        <span>{anime.releaseDate}</span>
      </div>
    </Link>
  );
};
