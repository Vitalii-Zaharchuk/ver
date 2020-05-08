import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import Mypost from './Mypost'
import { connect } from 'react-redux';
import { updateNewDialogTextActionCreator } from '../../../Redux/messages-reducer';


let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostTextActionCreator:(text) =>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost:() =>{
            dispatch(addPostActionCreator());
        }
    }
}
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps )(Mypost);
export default MyPostContainer;