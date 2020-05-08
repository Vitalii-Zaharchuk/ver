import React from 'react';
import s from './Messages.module.css'
import Names from './Names/Names';
import DialogContainer from './Dialog/DialogContainer';
let Messages = (props) =>{
    
    return(
        <div className={s.messages}>
           <Names store={props.store}/>
            <DialogContainer
            store={props.store}
            />

        </div>
    )
}
export default Messages;