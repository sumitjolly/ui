import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Popup } from "../../src/components";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Popup", module);

stories.addWithAddons(
  "Basic popup example with text in content (on hover)",
  () => (
    <div style={{ padding: "0 20px" }}>
      <Popup
        trigger={<div>What's cooking?</div>}
        content="Pasta with pizza sauce"
        on="hover"
      />
    </div>
  ),
  { centered: false }
);

stories.addWithAddons(
  "Basic popup example with JSX content as markup (on click)",
  () => (
    <Fragment>
      <Popup
        trigger={<button>Hello</button>}
        on="click"
        children={
          <div>
            <h1>Can you smell what's the Rock is cooking?</h1>
          </div>
        }
        basic="true"
      />
    </Fragment>
  )
);

storiesOf("Popup", module);
