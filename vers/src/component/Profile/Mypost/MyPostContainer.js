import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import Mypost from './Mypost'

let MyPostContainer = (props) => {
   let state = props.store.getState();
   
    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }
    let addPost = () =>{
        
        props.store.dispatch(addPostActionCreator());
    }
    
    
    
    
    return (
        <Mypost 
        newPostText={state.profilePage.newPostText}
        postData={state.profilePage.postData}
        addPost={addPost}
        updateNewPostTextActionCreator={onPostChange}/>
    )
        
    
}
export default MyPostContainer;