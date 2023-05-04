import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { VerticalCard } from '@components/cards/VerticalCard';

export default {
  title: 'Cards/VerticalCard',
  component: VerticalCard,
} as Meta<typeof VerticalCard>;

const Template: StoryFn<typeof VerticalCard> = (props) => (
  <VerticalCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  cover: '/assets/media/cover.webp',
  album: 'High Voltage',
  artist: 'AC/DC',
};
