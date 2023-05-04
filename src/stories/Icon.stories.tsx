import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon } from '@components/Icon';
import { SpriteCategories } from '@enums';

export default {
  title: 'Common/Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (props) => (
  <Icon className={'text-zinc-900'} size={'2xl'} {...props} />
);

export const FromAudioSprite = Template.bind({});
FromAudioSprite.args = {
  name: 'loop',
  category: SpriteCategories.AUDIO,
};

export const FromArrowsSprite = Template.bind({});
FromArrowsSprite.args = {
  name: 'chevron-first',
  category: SpriteCategories.ARROWS,
};

export const FromActionsSprite = Template.bind({});
FromActionsSprite.args = {
  name: 'fullscreen',
  category: SpriteCategories.ACTIONS,
};

export const FromCommonSprites = Template.bind({});
FromCommonSprites.args = {
  name: 'list',
  category: SpriteCategories.COMMON,
};

export const FromMenuSprites = Template.bind({});
FromMenuSprites.args = {
  name: 'layers',
  category: SpriteCategories.MENU,
};
