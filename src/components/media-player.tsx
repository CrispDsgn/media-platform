"use client";

import ReactPlayer from "react-player";
import { AspectRatio } from "./ui/aspect-ratio";

export default function MediaPlayer({ source }: { source: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayer url={source} controls width={"100%"} height={"auto"} />
    </AspectRatio>
  );
}
