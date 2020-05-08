import React from 'react';
import s from './Dialog.module.css'
import {addDialogActionCreator, updateNewDialogTextActionCreator} from '../../../Redux/messages-reducer' 
let Dialog = (props) =>{

   
    let onDialogChange= () =>{
        let text = newDialogElement.current.value;
        let action = updateNewDialogTextActionCreator(text)
        props.dispatch(action);
    }
    let addDialog = () =>{
       
        props.dispatch(addDialogActionCreator());
    }
    let newDialogElement = React.createRef();

    
    let DialogItem = (props) =>{
        return(
        <div to={'/dialog/' + props.id}>{props.dialog}</div>
        )
    }
    let dialogElement = props.dialogData.
    map(dialog =><DialogItem dialog={dialog.dialog} id={dialog.id}/>)
    return(
        <div className={s.dialog}>
               {dialogElement}
            <textarea ref={newDialogElement} onChange={onDialogChange} value={props.newDialogText}></textarea>
            <button onClick={addDialog}>Send</button>
                

         </div>
    )
}
export default Dialog;