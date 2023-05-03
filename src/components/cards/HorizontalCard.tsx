import Image from "next/image";
import { Icon } from "@components/Icon";
import { SpriteCategories } from "@enums";
import Link from "next/link";

type Props = {
  artist?: string;
  album: string;
  cover: string;
  href?: string;
};

export const HorizontalCard = ({ cover, artist, album, href = "#" }: Props) => (
  <Link
    href={href}
    className={
      "group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out duration-300 pr-8"
    }
  >
    <Image
      width={104}
      height={104}
      src={"/assets/media/cover.webp"}
      alt={!!artist ? `${artist} - ${album}` : album}
    />
    <strong>{album}</strong>
    <button
      className={
        "invisible group-hover:visible inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 ml-auto transition-all ease-in-out duration-300"
      }
    >
      <Icon name={"play"} category={SpriteCategories.AUDIO} size={"xl"} />
    </button>
  </Link>
);
