import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter } from 'react-router-dom';
import store  from './Redux/redux-store';
import { Provider } from 'react-redux';


export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
          <App  />
      </Provider>    
      </BrowserRouter>    
    </React.StrictMode>,
    document.getElementById('root')
  );

}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  rerenderEntireTree(state)
})

serviceWorker.unregister();




























