"use client";

import Image from "next/image";
import { Anime } from "../../_lib/schema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function Banner({ anime }: { anime: Anime }) {
  const router = useRouter();

  return (
    <div className="relative w-full h-[420px] md:h-[640px]">
      <Image
        src={anime.image}
        alt={anime.title}
        fill
        sizes="100%"
        className="rounded-md"
        style={{ objectFit: "cover" }}
      />

      <div className="absolute left-0 right-0 bottom-0 h-48 bg-gradient-to-t from-primary-foreground to-transparent px-6 pt-10">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold line-clamp-2 text-ellipsis uppercase max-w-[32ch]">
          {anime.title}
        </h2>
      </div>

      <div className="absolute left-0 right-0 top-0 p-6 flex flex-wrap gap-y-8 gap-x-4 justify-between items-center bg-gradient-to-b from-primary-foreground to-transparent">
        <Button onClick={() => router.back()}>Back to search</Button>

        <Badge className="text-lg">Episodes: {anime.totalEpisodes}</Badge>
      </div>
    </div>
  );
}
