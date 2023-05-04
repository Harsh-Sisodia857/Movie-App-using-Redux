import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/index'

// middleware function logger(obj,next,action). obj consist of dispatch and getState
//redux internally called logger as logger(obj),(next)(action)

const logger = ({ dispatch, getState }) => (next) => (action) => {
      // middleware code 
      console.log("ACTION_TYPE = ", action.type);
      next(action);
}

// ADDDING STORE TO APPLICATION
//passing reducer to createStore
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('store :',store.getState());  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

