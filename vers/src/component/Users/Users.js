import React from 'react'
import s from './Users.module.css'
import usersPhoto from '../../image/usersImage.png'
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1 ; i <= pagesCount; i++){
        pages.push(i);
    }
    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => {props.onPageChanged(p); }}
                    >{p}</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id} className={s.users}>
                <div className={s.ava}>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} />
                    {u.follow ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
export default Users;