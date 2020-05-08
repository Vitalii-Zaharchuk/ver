import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store  from './Redux/redux-store';
import { addPostActionCreator, updateNewPostTextActionCreator} from './Redux/profile-reducer'
import {addDialogActionCreator, updateNewDialogTextActionCreator} from './Redux/messages-reducer' 

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
      store={store}
      state={state}
      dispatch={store.dispatch.bind(store)}
      addPostActionCreator={addPostActionCreator}
      updateNewPostTextActionCreato={updateNewPostTextActionCreator}
      addDialogActionCreator={addDialogActionCreator}
      updateNewDialogTextActionCreator={updateNewDialogTextActionCreator}
      />
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




























