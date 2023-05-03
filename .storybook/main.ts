import type { StorybookConfig } from "@storybook/nextjs";

import TsconfigPaths from "tsconfig-paths-webpack-plugin";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [
        ...config.resolve.plugins,
        new TsconfigPaths({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
      ],
    },
  }),
};

export default config;
