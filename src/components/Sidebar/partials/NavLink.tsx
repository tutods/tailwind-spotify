import { ReactNode } from 'react';
import Link from 'next/link';

import { Icon, IconProps } from '@components/Icon';

type Props = {
  href: string;
  icon: Omit<IconProps, 'onClick' | 'size' | 'className'>;
  children: ReactNode;
};

export const NavLink = ({ href, icon, children }: Props) => (
  <Link
    className="flex items-center gap-4 text-xs font-semibold text-zinc-200 hover:text-primary-500 transition-colors ease-in-out cursor-pointer"
    href={href}
  >
    <Icon size="xl" {...icon} />
    {children}
  </Link>
);
