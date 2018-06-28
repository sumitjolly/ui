import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Checkbox } from '@infinitecsolutions/semantic-ui-react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '@infinitecsolutions/semantic-ui-react';

const stateOptions = [
  {
    value: 'EN',
    text: 'English',
  },
  {
    value: 'DE',
    text: 'German',
  },
];
const stories = storiesOf('Semantic-UI/Dropdown', module);
stories.addDecorator((story, context) => withInfo()(story)(context));

stories.add('Dropdown', () => <Dropdown placeholder="Language" selection options={stateOptions} />);
