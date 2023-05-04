import Image from 'next/image';
import { SpriteCategories } from '@enums';

import { SwitchButton } from '@components/buttons/SwitchButton';
import { PlayButton } from '@components/Footer/partials/PlayButton';
import { Icon } from '@components/Icon';

type Props = {
  artist: string;
  music: string;
  cover: string;
};

export const Footer = ({ artist, music, cover }: Props) => {
  return (
    <footer className="sticky bottom-0 bg-zinc-950 border-t border-t-zinc-700 px-6 py-4 md:flex-row flex-col flex items-center md:justify-between gap-4">
      <section className="flex items-center gap-3">
        <Image
          alt={`${artist} - ${music}`}
          className="rounded-md"
          height={56}
          src={cover}
          width={56}
        />
        <div>
          <p>{music}</p>
          <p className="text-xs text-zinc-400">{artist}</p>
        </div>

        <Icon
          category={SpriteCategories.COMMON}
          className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors ease-in-out duration-300"
          name="heart"
          size="lg"
        />
      </section>
      <section className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <SwitchButton
            defaultState
            icon={{
              name: 'shuffle',
              size: 'xl',
              category: SpriteCategories.AUDIO,
            }}
          />
          <Icon
            category={SpriteCategories.ARROWS}
            className="text-zinc-200"
            name="chevron-first"
            size="xl"
          />

          <PlayButton />

          <Icon
            category={SpriteCategories.ARROWS}
            className="text-zinc-200"
            name="chevron-last"
            size="xl"
          />

          <SwitchButton
            icon={{
              name: 'loop',
              size: 'xl',
              category: SpriteCategories.AUDIO,
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-4 00">0:31</span>

          <progress
            className="h-1 w-48 md:w-72 lg:w-96 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-zinc-200"
            max={100}
            value={20}
          />
          <span className="text-xs text-zinc-4 00">2:14</span>
        </div>
      </section>
      <section className="flex items-center gap-2">
        <Icon
          category={SpriteCategories.COMMON}
          className="cursor-pointer"
          name="list"
          size="lg"
        />
        <Icon
          category={SpriteCategories.COMMON}
          className="cursor-pointer"
          name="computer"
          size="lg"
        />

        <div className="flex items-center gap-1">
          <Icon category={SpriteCategories.AUDIO} name="volume" size="lg" />

          <progress
            className="h-1 w-16 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-zinc-200"
            max={100}
            value={20}
          />
        </div>
        <Icon
          category={SpriteCategories.ACTIONS}
          className="cursor-pointer"
          name="fullscreen"
          size="lg"
        />
      </section>
    </footer>
  );
};
