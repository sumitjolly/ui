import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Divider, Grid, Button } from "../../src/components";
import { withInfo } from "@storybook/addon-info";
import { select, text, boolean } from "@storybook/addon-knobs/react";

const stories = storiesOf("Button", module);

stories.addWithAddons("Button", () => (
  <Fragment>
    <Grid>
      <Grid.Column>
        <Button size="mini">Mini</Button>
        <Button size="tiny">Tiny</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="big">Big</Button>
        <Button size="huge">Huge</Button>
        <Button size="massive">Massive</Button>

        <Divider />

        <Button primary size="mini">
          Mini
        </Button>
        <Button primary size="tiny">
          Tiny
        </Button>
        <Button primary size="small">
          Small
        </Button>
        <Button primary size="medium">
          Medium
        </Button>
        <Button primary size="large">
          Large
        </Button>
        <Button primary size="big">
          Big
        </Button>
        <Button primary size="huge">
          Huge
        </Button>
        <Button primary size="massive">
          Massive
        </Button>

        <Divider />

        <Button secondary size="mini">
          Mini
        </Button>
        <Button secondary size="tiny">
          Tiny
        </Button>
        <Button secondary size="small">
          Small
        </Button>
        <Button secondary size="medium">
          Medium
        </Button>
        <Button secondary size="large">
          Large
        </Button>
        <Button secondary size="big">
          Big
        </Button>
        <Button secondary size="huge">
          Huge
        </Button>
        <Button secondary size="massive">
          Massive
        </Button>

        <Divider />
        <div style={{ padding: "40px" }}>
          <Button primary fluid>
            Fit to container
          </Button>
        </div>
      </Grid.Column>
    </Grid>
  </Fragment>
));

stories.addWithAddons("Buttons Props", () => {
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
            fluid={boolean("fluid", false, GROUP_IDS.VARIATIONS)}
          >
            Default
          </Button>
          <Button
            primary
            disabled={boolean("disabled", false, GROUP_IDS.STATES, "test")}
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
            fluid={boolean("fluid", false, GROUP_IDS.VARIATIONS)}
            compact={boolean("compact", false, GROUP_IDS.VARIATIONS)}
          >
            Primary
          </Button>
          <Button
            secondary
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
            fluid={boolean("fluid", false, GROUP_IDS.VARIATIONS)}
          >
            Secondary
          </Button>
          <Divider />
          <div style={{ padding: "0 40px" }}>
            <Button
              primary
              floated={select(
                "floated",
                ["left", "right"],
                "left",
                GROUP_IDS.VARIATIONS
              )}
              content={text("content", "Long long long Text")}
            />
          </div>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
});
