import React from "react";
import { configure, addDecorator, setAddon } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import jestTestResults from "../.jest-test-results.json";
import withTests from "storybook-addon-jest";
import "../src/semantic/index.js";
import "./styles.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const stylesDecorator = story => {
  const styles = {
    background: "#e1ecfa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px"
  };
  return <div style={styles}>{story}</div>;
};

setAddon({
  addWithAddons(storyName, storyFn, opts) {
    const options = {
      addInfo: true,
      addTests: true,
      centered: true,
      ...opts
    };
    this.add(storyName, context => {
      let storyResult = storyFn();
      storyResult = stylesDecorator(storyResult);
      if (options.addTests) {
        storyResult = withTests(jestTestResults, {
          filesExt: ".test.js"
        })(storyName)(() => storyResult, context);
      }
      if (options.centered) {
        storyResult = <div style={{ textAlign: "center" }}>{storyResult}</div>;
      }
      if (options.addInfo) {
        storyResult = withInfo()(() => storyResult, context);
      }
      return storyResult;
    });
  }
});

addDecorator(withKnobs);

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
