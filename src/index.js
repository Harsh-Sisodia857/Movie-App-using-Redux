import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/index'

// ADDDING STORE TO APPLICATION
//passing reducer to createStore
const store = createStore(rootReducer);
console.log('store :',store.getState());  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

