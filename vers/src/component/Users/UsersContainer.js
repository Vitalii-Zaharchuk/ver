import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import {FOLLOWAC, UNFOLLOWAC,SETUSERSAC} from '../../Redux/users-reducer';


let mapStateToProps = (state) =>{
    return{
        users: state. usersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId) =>{
            dispatch(FOLLOWAC(userId))
        },
        unfollow:(userId) =>{
            dispatch(UNFOLLOWAC(userId));
        },
        setUsers:(users) =>{
            dispatch(SETUSERSAC(users))
        }
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps )(Users);
export default UsersContainer;