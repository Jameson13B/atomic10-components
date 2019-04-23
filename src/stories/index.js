import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
  Dropdown,
  AdvancedCard,
  SimpleCard,
  BWTodo,
  CTodo
} from '../lib/index.js';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Buttons')} />
));

storiesOf('Buttons', module)
  .add('Primary Button', () => (
    <PrimaryButton value='Click Me' click={action('clicked')} />
  ))
  .add('Secondary Button', () => (
    <SecondaryButton value='Click Me' click={action('clicked')} />
  ));

storiesOf('TextInputs', module)
  .add('Text Input', () => (
    <TextInput label='Label Input' placeholder='name@example.com' width='50%' />
  ))
  .add('Password Input', () => (
    <TextInput label='Password' placeholder='Enter Password' type='password' />
  ));

storiesOf('Dropdowns', module)
  .add('Dropdown default', () => (
    <Dropdown
      name='tester'
      value=''
      onChange={action('changed')}
      content={content}
      width='10em'
    />
  ))
  .add('Dropdown with color', () => (
    <Dropdown
      name='tester'
      value=''
      onChange={action('changed')}
      content={content}
      ftColor='whitesmoke'
      bkColor='tomato'
      width='10em'
    />
  ));

storiesOf('Cards', module)
  .add('Advanced Card', () => (
    <AdvancedCard
      title='Simple Card'
      subTitle='Subtitle'
      paragraph='Advanced card that has an image and a button. This is a paragraph.'
      onClick={() => alert('Card Click')}
      btnClick={() => alert('Button Click')}
      btnValue='Click'
      image='https://goo.gl/2QuCc5'
    />
  ))
  .add('Simple Card', () => (
    <SimpleCard
      title='Simple Card'
      subTitle='Subtitle'
      paragraph="Simple card that doesn't have an image and a button. This is a paragraph."
      onClick={() => alert('Card Click')}
    />
  ));

storiesOf('Todos', module)
  .add('Todo with black and white', () => (
    <BWTodo list={['Item 1', 'Item 2', 'Item 3']} title='B&W Todo' />
  ))
  .add('Todo with color', () => (
    <CTodo
      list={['Item 1', 'Item 2', 'Item 3']}
      title='Color Todo'
      placeholder='New Item...'
    />
  ));

const content = [
  {
    text: 'Item One',
    value: 'one'
  },
  {
    text: 'Item Two',
    value: 'two'
  },
  {
    text: 'Item Three',
    value: 'three'
  },
  {
    text: 'Item Four',
    value: 'four'
  },
  {
    text: 'Item Five',
    value: 'five'
  }
];
