import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '@components/Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (props) => (
  <main className="flex flex-col h-screen">
    <section className="flex-1"></section>
    <Footer {...props} />
  </main>
);

export const Default = Template.bind({});
Default.args = {
  cover: '/assets/media/cover.webp',
  music: 'Music',
  artist: 'Band or Artist',
};
