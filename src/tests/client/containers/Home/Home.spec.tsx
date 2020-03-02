import React from 'react'
import { render } from 'react-dom'
import Home from '../../../../client/containers/Home/Home'

describe('<Home />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<Home />, div)
  });
});