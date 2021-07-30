import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './pages/Homepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
});