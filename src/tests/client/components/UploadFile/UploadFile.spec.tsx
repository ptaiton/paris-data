import React from 'react'
import { render } from 'react-dom'
import UploadFile from '../../../../client/components/UploadFile/UploadFile'

describe('<UploadFile />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<UploadFile />, div)
  });
});