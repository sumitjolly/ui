import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../../src/components";
import { text, boolean, number } from "@storybook/addon-knobs/react";

const stories = storiesOf("Checkbox", module);

stories.addWithAddons("Checkbox", () => (
  <Checkbox
    toggle={boolean("toggle", false)}
    label={text("label", "Make my profile visible")}
    disabled={boolean("disabled", false)}
  />
));
