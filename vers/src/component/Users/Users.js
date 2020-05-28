import React from 'react';
import s from './Users.module.css'
let Users = (props) =>{

    return(
        <div>
            {props.users.map(u =><div key={u.id} className={s.users}>
                <div className={s.ava}>
                    <img src={u.photoAva}/>
                    {u.follow? <button onClick={() =>{props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
                
                <div className={s.about}>
                    <div className={s.name}>
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.local}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </div>
                

                </div>





            </div> )}
        </div>
    )
}
export default Users;