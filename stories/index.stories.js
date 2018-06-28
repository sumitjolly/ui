import React from "react";
import Welcome from "./Welcome";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Semantic-UI/Button")} />
));
