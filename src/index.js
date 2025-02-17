import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import App from './App';


render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
