import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SwitchButton } from "@components/buttons/SwitchButton";
import { SpriteCategories } from "@enums";

export default {
  title: "Buttons/SwitchButton",
  component: SwitchButton,
} as Meta<typeof SwitchButton>;

const Template: StoryFn<typeof SwitchButton> = (props) => (
  <SwitchButton {...props} />
);

export const ActiveByDefault = Template.bind({});
ActiveByDefault.args = {
  icon: {
    name: "loop",
    size: "xl",
    category: SpriteCategories.AUDIO,
  },
  defaultState: true,
};

export const Unactive = Template.bind({});
Unactive.args = {
  icon: {
    name: "loop",
    size: "xl",
    category: SpriteCategories.AUDIO,
  },
  defaultState: false,
};
