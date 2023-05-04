'use client';

import { Icon, IconProps } from '@components/Icon';
import { ButtonHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'defaultChecked' | 'defaultValue'
> & {
  icon: IconProps;
  defaultState?: boolean;
};

export const SwitchButton = ({
  icon,
  defaultState = false,
  ...props
}: Props) => {
  const [isActive, setIsActive] = useState(defaultState);

  return (
    <button
      {...props}
      className={clsx([
        'w-6 h-6 text-primary-500 cursor-pointer',
        {
          'text-zinc-500/80 hover:text-zinc-200 transition-colors duration-300 ease-in-out':
            !isActive,
        },
        {
          "relative after:content-[''] after:w-1 after:h-1 after:bg-primary-500 after:block after:rounded-full after:mx-auto after:absolute after:-bottom-2 after:inset-x-0":
            isActive,
        },
      ])}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <Icon {...icon} />
    </button>
  );
};
