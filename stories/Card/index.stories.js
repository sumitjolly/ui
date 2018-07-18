import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../../src/components';
import { Icon } from '@infinitecsolutions/semantic-ui-react';

const stories = storiesOf(Card.displayName, module);

stories.addWithAddons(
  Card,
  () => {
    return (
      <Card>
        <Card.Content header="About Amy" />
        <Card.Content description="Amy is a violinist with 2 years experience in the wedding industry" />
        <Card.Content extra>
          <Icon name="user" />
          4 Friends
        </Card.Content>
      </Card>
    );
  },
  {
    infoProps: {
      propTablesExclude: [ Card.Content, Icon],
    },
  }
);
