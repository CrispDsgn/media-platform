"use client";

import Image from "next/image";
import { Card } from "../../../components/ui/card";
import Link from "next/link";
import { AnimePreview, RecentEpisode, TopAiring } from "@/lib/types/anime";
import { usePathname } from "next/navigation";

export default function CardAnime({
  anime,
}: {
  anime: AnimePreview | RecentEpisode | TopAiring;
}) {
  const pathname = usePathname();
  return (
    <Link href={`${pathname}/${anime.id}`}>
      <Card className="relative h-96 overflow-hidden">
        <Image
          src={anime.image}
          alt={anime.title}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </Card>
    </Link>
  );
}
