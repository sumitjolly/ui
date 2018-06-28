import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Popup } from '@infinitecsolutions/semantic-ui-react';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Semantic-UI/Popup', module);

//stories.addDecorator(withKnobs);

stories.add(
  'Basic popup example with text in content (on hover)',
  withInfo('A Popup displays additional information on top of a page.')(() => (
    <Fragment>
      <Popup trigger={<div>What's cooking?</div>} content="Pasta with pizza sauce" on="hover" />
    </Fragment>
  ))
);

stories.add(
  'Basic popup example with JSX content as markup (on click)',
  withInfo('A Popup displays additional information on top of a page.')(() => (
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
  ))
);

storiesOf('Popup', module);
