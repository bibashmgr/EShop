import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

// custom-styling
import './index.scss';

// redux-store
import store from './app/store';

import reportWebVitals from './reportWebVitals';

import theme from './theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
