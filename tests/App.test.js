import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/Components/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it ('should work', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it ('should still work', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome!');
  });
});