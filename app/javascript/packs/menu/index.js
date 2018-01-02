import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './src/menu';

document.addEventListener('DOMContentLoaded', () => {
  const id = 'menu',
        rootNode = document.getElementById(id)

  ReactDOM.render(
    <Menu />, rootNode
  )
});
