import React from 'react';

import {addDialogActionCreator, updateNewDialogTextActionCreator} from '../../../Redux/messages-reducer' 
import Dialog from './Dialog';
import { connect } from 'react-redux';

   

let mapStateToProps = (state) =>{
    return{
        messagePage: state.messagePage
        
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewDialogTextActionCreator:(text) =>{
            let action = updateNewDialogTextActionCreator(text)
            dispatch(action)
        },
        addDialog:() => {
            dispatch(addDialogActionCreator())
        }
    }
}
let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;