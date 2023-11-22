"use client";

import { Suspense, useState } from "react";
import { Anime } from "../../_lib/schema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import LoadEpisode from "./load-episode";

export default function AnimeEpisodes({ anime }: { anime: Anime }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(anime.episodes[0].id);

  const episodesList = anime.episodes.map((episode) => {
    const name = "Ep. " + episode.number + ", " + anime.title;
    return { value: episode.id, label: name };
  });

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between"
          >
            <h5 className="text-ellipsis overflow-hidden">
              {value
                ? episodesList.find((episode) => episode.value === value)?.label
                : "Select framework..."}
            </h5>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {episodesList.map((episode) => (
                <CommandItem
                  key={episode.value}
                  value={episode.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === episode.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {episode.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      <LoadEpisode id={value} />
    </div>
  );
}
