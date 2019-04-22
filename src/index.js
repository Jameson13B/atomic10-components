import React from 'react';
import ReactDOM from 'react-dom';

import {
  TextInput,
  PrimaryButton,
  SecondaryButton,
  BWTodo,
  CTodo,
  AdvancedCard,
  SimpleCard,
  CustomDropdown
} from './lib/index';

const App = () => (
  <div
    style={{
      width: 640,
      margin: '15px auto'
    }}
  >
    <h1>
      Atomic<span style={{ color: '#FF9933' }}>10</span> Component Library
    </h1>
    <br />
    <TextInput label='Label Input' placeholder='name@example.com' width='50%' />
    <br />
    <hr />
    <br />
    <TextInput label='Password' placeholder='Enter Password' type='password' />
    <br />
    <hr />
    <CustomDropdown
      name='tester'
      value=''
      // value={this.state.value}
      onChange={e => alert(`Changed to ${e.target.value}`)}
      content={content}
      ftColor='slategray'
      bkColor='#eee'
      width='10em'
    />
    <hr />
    <PrimaryButton value='Click' click={() => alert('Click')} />
    <hr />
    <SecondaryButton value='Click' click={() => alert('Click')} />
    <hr />
    <CTodo
      list={['Item 1', 'Item 2', 'Item 3']}
      title='Color Todo'
      placeholder='New Item...'
    />
    <hr />
    <BWTodo list={['Item 1', 'Item 2', 'Item 3']} title='B&W Todo' />
    <hr />
    <AdvancedCard
      title='Simple Card'
      subTitle='Subtitle'
      paragraph='Advanced card that has an image and a button. This is a paragraph.'
      click={() => alert('Card Click')}
      btnClick={() => alert('Button Click')}
      btnValue='Click'
      image='https://goo.gl/2QuCc5'
      width='50%'
    />
    <hr />
    <SimpleCard
      title='Simple Card'
      subTitle='Subtitle'
      paragraph="Simple card that doesn't have an image and a button. This is a paragraph."
      click={() => alert('Card Click')}
    />
  </div>
);

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

ReactDOM.render(<App />, document.getElementById('root'));
