import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Button } from "../../src/components";
import { select, text, boolean } from "@storybook/addon-knobs/react";

const stories = storiesOf("Button", module);

stories.addWithAddons("Button", () => {
  const GROUP_IDS = {
    TYPES: "TYPES",
    VARIATIONS: "VARIATIONS",
    STATES: "STATES"
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid.Column>
          <Button
            primary={boolean("primary", true, GROUP_IDS.VARIATIONS)}
            secondary={boolean("secondary", false, GROUP_IDS.VARIATIONS)}
            loading={boolean("loading", false, GROUP_IDS.STATES)}
            disabled={boolean("disabled", false, GROUP_IDS.STATES)}
            loading={boolean("loading", false, GROUP_IDS.STATES)}
            size={select(
              "size",
              [
                "mini",
                "tiny",
                "small",
                "medium",
                "large",
                "big",
                "huge",
                "massive"
              ],
              "medium",
              GROUP_IDS.VARIATIONS
            )}
            floated={select(
              "floated",
              ["left", "right"],
              "left",
              GROUP_IDS.VARIATIONS
            )}
            content={text("content", "Hello, button!")}
            fluid={boolean("fluid", false, GROUP_IDS.VARIATIONS)}
          />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
});
