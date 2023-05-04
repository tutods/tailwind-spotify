'use client';

import { ButtonHTMLAttributes, useState } from 'react';
import { Icon } from '@components/Icon';
import { SpriteCategories } from '@enums';
import clsx from 'clsx';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  className?: string;
};

export const PlayButton = ({ className = '', ...props }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      {...props}
      className={clsx([
        'inline-flex items-center justify-center p-2 rounded-full',
        'transition-all ease-in-out duration-300 enabled:hover:text-primary-500 enabled:hover:bg-zinc-100',
        'disabled:bg-black/20 disabled:text-zinc-200/20',
        { 'bg-primary-500 text-white': isPlaying },
        { 'text-zinc-900 bg-zinc-100': !isPlaying },
        className,
      ])}
      onClick={() => setIsPlaying((prev) => !prev)}
    >
      <Icon
        name={isPlaying ? 'pause' : 'play'}
        category={SpriteCategories.AUDIO}
        size={'2xl'}
      />
    </button>
  );
};
