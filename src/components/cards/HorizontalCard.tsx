import Image from 'next/image';
import Link from 'next/link';
import { SpriteCategories } from '@enums';

import { Icon } from '@components/Icon';

type Props = {
  artist?: string;
  album: string;
  cover: string;
  href?: string;
};

export const HorizontalCard = ({ cover, artist, album, href = '#' }: Props) => (
  <Link
    className="group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors ease-in-out duration-300 pr-8"
    href={href}
  >
    <Image
      alt={!!artist ? `${artist} - ${album}` : album}
      height={104}
      src={cover}
      width={104}
    />
    <strong>{album}</strong>
    <button className="invisible group-hover:visible inline-flex items-center justify-center p-2 rounded-full text-black bg-primary-500 ml-auto transition-all ease-in-out duration-300">
      <Icon category={SpriteCategories.AUDIO} name="play" size="xl" />
    </button>
  </Link>
);
