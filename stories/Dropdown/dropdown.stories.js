import React from "react";
import { storiesOf } from "@storybook/react";
import { Dropdown } from "../../src/components";

const stateOptions = [
  {
    value: "EN",
    text: "English"
  },
  {
    value: "DE",
    text: "German"
  }
];
const stories = storiesOf("Dropdown", module);

stories.addWithAddons(
  "Dropdown",
  () => <Dropdown placeholder="Language" selection options={stateOptions} />,
  { addReadme: false }
);
