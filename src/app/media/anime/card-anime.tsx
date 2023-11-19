import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

type Anime = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string;
  subOrDub: string;
};

export default function CardAnime({ anime }: { anime: Anime }) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{anime.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <Image
          src={anime.image}
          alt={anime.title}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
      </CardContent>
    </Card>
  );
}
