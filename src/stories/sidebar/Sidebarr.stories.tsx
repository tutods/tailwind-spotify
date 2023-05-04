import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PlayButton } from '@components/Footer/partials/PlayButton';
import { Footer } from '@components/Footer';
import { Sidebar } from '@components/Sidebar';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = () => (
  <main className={'flex h-screen'}>
    <Sidebar />
    <section className="flex-1"></section>
  </main>
);

export const Default = Template.bind({});
Default.args = {};
