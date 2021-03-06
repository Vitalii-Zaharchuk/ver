import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import {FOLLOWAC, UNFOLLOWAC,SETUSERSAC, setCurrentPageAC, setUsersTotalCountAC, togoleIsFetchingAC} from '../../Redux/users-reducer';
import krutilka from '../../image/krutilka.gif'
import Preloder from '../common/Preloder/Preloder';
class UsersContainer extends React.Component {
  
    componentDidMount(){
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{ 
            this.props.togleIsFetching(false)
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{ 
            this.props.togleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <>
        {this.props.isFetching ? <Preloder/> : null}
        <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        unfollow ={this.props.unfollow}
        follow ={this.props.follow}

        />
      </>  
    }
   
    
       
    
}

let mapStateToProps = (state) =>{
    return{
        users: state. usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
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
        },
        setCurrentPage:(pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        },
        togleIsFetching:(isFetching) =>{
            dispatch(togoleIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(UsersContainer);
