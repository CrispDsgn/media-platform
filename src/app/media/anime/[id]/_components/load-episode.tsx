import MediaPlayer from "@/components/media-player";
import { useEffect, useState } from "react";
import { getEpisodeStreams } from "../../_lib/client";

export default function LoadEpisode({ id }: { id: string }) {
  const [link, setLink] = useState("");

  useEffect(() => {
    const fetchLink = async () => {
      const link = (await getEpisodeStreams(id)) as string;
      if (link) setLink(link);
    };

    fetchLink();
  }, [id]);

  return <MediaPlayer source={link} />;
}
