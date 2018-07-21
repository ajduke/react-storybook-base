import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'

import Button from './Button';

storiesOf('Button', module)
  .add(
    'with background', 
    withInfo({
      styles: {
        button: {
          color: 'red'
        }
      },
      text:'Simple button to take care of stuff'})(() => <Button bgColor="palegoldenrod">Hello world</Button>)
  )
  // .add('with background 2', () => <Button bgColor="green">Hello world2</Button>)
  // .add('with background 3', () => <Button bgColor="yellow">Hello world2</Button>);