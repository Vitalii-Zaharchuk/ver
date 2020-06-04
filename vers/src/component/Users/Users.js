import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import usersPhoto from '../../image/usersImage.png'
class Users extends React.Component {
    constructor(props){
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{ 
        
            this.props.setUsers(response.data.items)
        })
    }
    render() {
     
        return (

            <div>
                
                {this.props.users.map(u => <div key={u.id} className={s.users}>
                    <div className={s.ava}>
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto} />
                        {u.follow ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => {this.props.follow(u.id) }}>Follow</button>}
                    </div>

                    <div className={s.about}>
                        <div className={s.name}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={'s.local'}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>

                        </div>


                    </div>





                </div>)}
            </div>
        )
    }
}



export default Users;