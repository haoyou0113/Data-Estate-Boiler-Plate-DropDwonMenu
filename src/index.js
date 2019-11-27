import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './app';
import DropDownMenu from './DropDownMenu';

const appContainer = document.getElementById('root');
const store = configureStore({
  appName: 'Data Estate Boiler Plate'
});

render(
  <Provider store={store}>
    <DropDownMenu />
  </Provider>,
  appContainer
);
