import React from "react";
import { storiesOf } from "@storybook/react";
import { Search } from "../../src/components";
import { boolean } from "@storybook/addon-knobs/react";

const stories = storiesOf("Search", module);

stories.addWithAddons("Search", () => (
  <Search loading={boolean("isLoading", false)} />
));
