"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardAnime from "./card-anime";
import { AnimePreview, RecentEpisode, TopAiring } from "../_lib/schema";

export default function Slider({
  title,
  list,
}: {
  title?: string;
  list: AnimePreview[] | RecentEpisode[] | TopAiring[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {title && <span className="text-2xl font-bold">{title}</span>}

      <Swiper spaceBetween={30} slidesPerView={"auto"} className="w-full">
        {list.map((anime) => (
          <SwiperSlide key={anime.id} className="max-w-xs">
            <CardAnime anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
