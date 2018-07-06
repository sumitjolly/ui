import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../../src/components";

const stories = storiesOf("Checkbox", module);

stories.addWithAddons("Checkbox", () => (
  <Checkbox label={"Make my profile visible"} />
));
