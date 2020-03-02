import React from 'react'
import { render } from 'react-dom'
import MainContainer from '../../../../client/containers/MainContainer/MainContainer'

describe('<MainContainer />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<MainContainer children={<div />}/>, div)
  });
});