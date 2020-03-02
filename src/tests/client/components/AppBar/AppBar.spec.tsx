import React from 'react'
import { render } from 'react-dom'
import AppBar from '../../../../client/components/AppBar/AppBar'

describe('<AppBar />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<AppBar />, div)
  });
});