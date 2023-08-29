import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { App } from 'pages/app';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from 'redux/store';
import 'libs/validators'; // to set default error message
import viewportExtra from 'viewport-extra';

new viewportExtra(375);

// Start the mocking conditionally.
// TODO: add if condition when real API is ready
// if (process.env.NODE_ENV === 'development') {
// https://github.com/mswjs/examples/blob/master/examples/rest-react/src/index.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker } = require('./api/mocks/browser');
worker.start();
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});
// Global state management Added the Redux Toolkit and React-Redux packages to these project
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* NOTE: this will be automatically removed when on production */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
