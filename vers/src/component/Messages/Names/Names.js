import React from 'react';
import s from './Names.module.css'
import { NavLink } from 'react-router-dom';
let Names = (props) =>{
    let state = props.store.getState();
    let NameItem = (props) =>{
        return(
        <NavLink to={'/name/' + props.id}>{props.name}</NavLink>
        )
    }
    let nameElement = state.messagePage.nameData.
    map(name =><NameItem name={name.name} id={name.id}/>)
    return(
        <div className={s.names}>
            {nameElement}
                

        </div>
    )
}
export default Names;