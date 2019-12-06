import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './components/Display';
import DataFetch from './components/DataFetch';
import { render, fireEvent } from '@testing-library/react'


test('renders without crashing Display', () => {
  render(<Display />);
});

test('renders without crashing DataFetch', () => {
  render(<DataFetch />);
});

test('render Womens World Cup', () => {
  const wrapper = rtl.render(
    <span>Women's World Cup</span>
  );
  const element = wrapper.queryByText(/WomensWorldCup/i);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

