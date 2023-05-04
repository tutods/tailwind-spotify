import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { HorizontalCard } from '@components/cards/HorizontalCard';

export default {
  title: 'Cards/HorizontalCard',
  component: HorizontalCard,
} as Meta<typeof HorizontalCard>;

const Template: StoryFn<typeof HorizontalCard> = (props) => (
  <HorizontalCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  cover: '/assets/media/cover.webp',
  album: 'High Voltage',
  artist: 'AC/DC',
};
