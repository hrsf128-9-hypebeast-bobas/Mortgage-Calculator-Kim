/* eslint-disable react/jsx-filename-extension */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import 'mocha';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { renderHook, act } from '@testing-library/react-hooks';

import HomePrice from '../client/src/Components/HomePrice';

afterEach(cleanup);

describe('App component', () => {
  const wrapper = shallow(<HomePrice />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a home price input tag', () => {
    expect(wrapper.find('input[id="homePriceInput"]').exists()).toBe(true);
  });

  it('the default value for input field should be empty', () => {
    expect(wrapper.find('input[id="homePriceInput"]').prop('value')).toBe();
  });
});
