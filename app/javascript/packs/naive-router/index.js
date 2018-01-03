import React from 'react';
import ReactDOM from 'react-dom';
import Router from './src/router';

document.addEventListener('DOMContentLoaded', () => {
  const id = 'naive-router',
        rootNode = document.getElementById(id),
        mapping = {
          '#profile': <div>Profile (<a href="#">home</a>)</div>,
          '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
          '*': <div>Dashboard<br />
            <a href="#profile">Profile</a>
            <br />
            <a href="#accounts">Accounts</a>
          </div>
        }

  ReactDOM.render(
    <Router mapping={mapping} />, rootNode
  )
});
