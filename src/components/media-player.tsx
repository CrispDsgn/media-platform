"use client";

import ReactPlayer from "react-player";

export default function MediaPlayer({ source }: { source: string }) {
  return <ReactPlayer url={source} controls light />;
}
