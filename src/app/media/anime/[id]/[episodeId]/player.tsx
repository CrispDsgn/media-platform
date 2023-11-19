"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";
import { EpisodeInfo } from "./page";

export default function EpisodePlayer({ data }: { data: EpisodeInfo }) {
  const router = useRouter();
  const handleReturn = () => router.back();

  const fullHDSource = data.sources.find(
    (source) => source.quality === "1080p"
  );

  return (
    <div className="flex flex-col gap-2">
      <Button variant={"link"} onClick={handleReturn}>
        Back to list
      </Button>

      {fullHDSource && <ReactPlayer url={fullHDSource.url} controls />}
    </div>
  );
}
