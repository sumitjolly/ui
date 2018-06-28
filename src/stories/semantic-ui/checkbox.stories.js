import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '@infinitecsolutions/semantic-ui-react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const stateOptions = [{ key: 'EN', value: 'EN', text: 'English' }, { key: 'DE', value: 'DE', text: 'German' }];

const stories = storiesOf('Semantic-UI/Checkbox', module);

stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('Checkbox', () => (
  <Checkbox
    toggle={boolean('toggle', false)}
    label={text('label', 'Make my profile visible')}
    disabled={boolean('disabled', false)}
  />
));
