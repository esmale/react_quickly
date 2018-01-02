import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './src/tooltip';

document.addEventListener('DOMContentLoaded', () => {
  const id = 'tooltip',
        rootNode = document.getElementById(id)

  ReactDOM.render(
    <div>
      <Tooltip text="The book you're reading now">React Quickly</Tooltip> was
      published in 2017.  It is awesome!
    </div>,
    rootNode
  );
});
