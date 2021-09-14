import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  //Our <App /> component is now a child of the <Provider> component. We've also passed the Redux store in as a prop to <Provider> as well.
  document.getElementById('root')
  //We won't need to explicitly pass store as a prop through the other components in our tree - it's already being inherited by <App /> and all of its children by way of the <Provider> component
);

serviceWorker.unregister();
