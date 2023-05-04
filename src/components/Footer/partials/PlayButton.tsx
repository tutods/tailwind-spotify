'use client';

import { ButtonHTMLAttributes, useState } from 'react';
import { SpriteCategories } from '@enums';
import clsx from 'clsx';

import { Icon } from '@components/Icon';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  className?: string;
};

export const PlayButton = ({ className = '', ...props }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button
      {...props}
      onClick={() => setIsPlaying((prev) => !prev)}
      className={clsx([
        'inline-flex items-center justify-center p-2 rounded-full',
        'transition-all ease-in-out duration-300 enabled:hover:text-primary-500 enabled:hover:bg-zinc-100',
        'disabled:bg-black/20 disabled:text-zinc-200/20',
        { 'bg-primary-500 text-white': isPlaying },
        { 'text-zinc-900 bg-zinc-100': !isPlaying },
        className,
      ])}
    >
      <Icon
        category={SpriteCategories.AUDIO}
        name={isPlaying ? 'pause' : 'play'}
        size="2xl"
      />
    </button>
  );
};
