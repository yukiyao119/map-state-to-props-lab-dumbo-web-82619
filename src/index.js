import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
<<<<<<< HEAD
import { createStore } from 'redux'
import { Provider } from 'react-redux'
=======
import { Provider } from 'react-redux';
import { createStore } from 'redux';
>>>>>>> e824459f69c61461757e7baa4ede2dd2b4a30086
import manageUsers from './reducers/manageUsers'


// add imports and code
<<<<<<< HEAD
const store = createStore(manageUsers)
=======
const store = createStore(manageUsers);

>>>>>>> e824459f69c61461757e7baa4ede2dd2b4a30086

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
<<<<<<< HEAD
  <App />
  </Provider>
=======
  <App /></Provider>
>>>>>>> e824459f69c61461757e7baa4ede2dd2b4a30086
  // add imports and code
  ,
  document.getElementById('root')
);
