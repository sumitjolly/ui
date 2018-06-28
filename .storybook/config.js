import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import "../src/semantic/index.js";
import "./styles.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
});

setOptions({
  name: "Infinitec Solutions UI",
  url: "#",
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: true,
  sidebarAnimations: true
});

configure(loadStories, module);
