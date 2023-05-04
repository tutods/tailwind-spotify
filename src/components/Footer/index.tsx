import Image from 'next/image';
import { SwitchButton } from '@components/buttons/SwitchButton';
import { SpriteCategories } from '@enums';
import { Icon } from '@components/Icon';
import { PlayButton } from '@components/Footer/partials/PlayButton';

type Props = {
  artist: string;
  music: string;
  cover: string;
};

export const Footer = ({ artist, music, cover }: Props) => {
  return (
    <footer
      className={
        'sticky bottom-0 bg-zinc-950 border-t border-t-zinc-700 px-6 py-4 md:flex-row flex-col flex items-center md:justify-between gap-4'
      }
    >
      <section className={'flex items-center gap-3'}>
        <Image
          width={56}
          height={56}
          className={'rounded-md'}
          src={cover}
          alt={`${artist} - ${music}`}
        />
        <div>
          <p>{music}</p>
          <p className={'text-xs text-zinc-400'}>{artist}</p>
        </div>

        <Icon
          name={'heart'}
          category={SpriteCategories.COMMON}
          size={'lg'}
          className={
            'text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors ease-in-out duration-300'
          }
        />
      </section>
      <section className={'flex flex-col items-center gap-2'}>
        <div className={'flex items-center gap-4'}>
          <SwitchButton
            defaultState={true}
            icon={{
              name: 'shuffle',
              size: 'xl',
              category: SpriteCategories.AUDIO,
            }}
          />
          <Icon
            className={'text-zinc-200'}
            size={'xl'}
            name={'chevron-first'}
            category={SpriteCategories.ARROWS}
          />

          <PlayButton />

          <Icon
            className={'text-zinc-200'}
            size={'xl'}
            name={'chevron-last'}
            category={SpriteCategories.ARROWS}
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
      <section className={'flex items-center gap-2'}>
        <Icon
          className={'cursor-pointer'}
          size={'lg'}
          name={'list'}
          category={SpriteCategories.COMMON}
        />
        <Icon
          className={'cursor-pointer'}
          size={'lg'}
          name={'computer'}
          category={SpriteCategories.COMMON}
        />

        <div className="flex items-center gap-1">
          <Icon size={'lg'} name={'volume'} category={SpriteCategories.AUDIO} />

          <progress
            className="h-1 w-16 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-zinc-600 [&::-webkit-progress-value]:bg-zinc-200"
            max={100}
            value={20}
          />
        </div>
        <Icon
          className={'cursor-pointer'}
          size={'lg'}
          name={'fullscreen'}
          category={SpriteCategories.ACTIONS}
        />
      </section>
    </footer>
  );
};
