import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

// Polyfill
import 'svgxuse';

render(
  <Root />,
  document.querySelector('.app')
);
