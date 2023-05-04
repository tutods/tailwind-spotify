import Image from 'next/image';
import Link from 'next/link';
import { SpriteCategories } from '@enums';

import { Icon } from '@components/Icon';

type Props = {
  artist: string;
  album: string;
  cover: string;
  href?: string;
};

export const VerticalCard = ({ artist, album, cover, href = '#' }: Props) => (
  <Link
    className="bg-white/5 flex flex-col gap-2 p-3 group rounded-md hover:bg-white/10 transition-colors ease-in-out"
    href={href}
  >
    <figure className="relative overflow-hidden rounded-md w-full aspect-square">
      <Image
        fill
        alt={`${artist} - ${album}`}
        className="object-center object-cover"
        src={cover}
      />
      <figcaption className="sr-only">
        {artist} - {album}
      </figcaption>
      <button className="hidden group-hover:inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 transition-all ease-in-out duration-300 absolute bottom-2 right-2">
        <Icon category={SpriteCategories.AUDIO} name="play" size="xl" />
      </button>
    </figure>
    <strong className="font-semibold">{album}</strong>
    <span className="text-sm text-zinc-500">{artist}</span>
  </Link>
);
