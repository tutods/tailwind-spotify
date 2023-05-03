import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { PlayButton } from "@components/Footer/partials/PlayButton";
import { Footer } from "@components/Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (props) => (
  <main className={"flex flex-col h-screen"}>
    <section className="flex-1"></section>
    <Footer />
  </main>
);

export const Default = Template.bind({});
Default.args = {};