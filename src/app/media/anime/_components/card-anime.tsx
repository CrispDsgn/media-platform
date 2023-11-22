"use client";

import Image from "next/image";
import { Card } from "../../../../components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimePreview, RecentEpisode, TopAiring } from "../_lib/schema";

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
