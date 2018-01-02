import React from 'react';
import ReactDOM from 'react-dom';
import TimerWrapper from './src/timer_wrapper';

document.addEventListener('DOMContentLoaded', () => {
  const id = 'timer',
        rootNode = document.getElementById(id);

  ReactDOM.render(
    <TimerWrapper />, rootNode
  )
});
