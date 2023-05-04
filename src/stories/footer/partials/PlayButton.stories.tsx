import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PlayButton } from '@components/Footer/partials/PlayButton';

export default {
  title: 'Layout/Footer/Partials/PlayButton',
  component: PlayButton,
} as Meta<typeof PlayButton>;

const Template: StoryFn<typeof PlayButton> = (props) => (
  <PlayButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
