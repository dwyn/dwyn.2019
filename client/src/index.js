
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/App';
import store from './store';

const app = (
  <Provider store={store}>
    <App />
  </Provider >
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
