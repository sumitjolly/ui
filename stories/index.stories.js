import React from "react";
import Welcome from "./Welcome";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

storiesOf("Welcome", module).addWithAddons(
  "to Storybook",
  () => (
    <div style={{ padding: "20px 35px" }}>
      <Welcome showApp={linkTo("Semantic-UI/Button")} />
    </div>
  ),
  { addInfo: false, addTests: false, addReadme: false }
);
