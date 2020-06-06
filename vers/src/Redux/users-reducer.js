const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
const SET_USERSAC = 'SETUSERSAC'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let initialState ={
    users:[
        
    ],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage:1
}
const usersReducer = (state= initialState,action) =>{
    switch (action.type){
        case FOLLOW_AC:
            return{
                ...state,
                users:state.users.map( u =>{
                    if(u.id === action.userId){
                        return{...u,follow:true}
                        
                    }
                    return u;
                  
                })
                
            }
            
        case UNFOLLOW_AC:
            return{...state,
                users:state.users.map(u =>{
                    if (u.id === action.userId){
                        return{...u,follow:false}
                    }
                    return u;
                })
            }
         case SET_USERSAC:{
             return{...state,users:action.users}  
         }
         case SET_CURRENT_PAGE:{
             return{...state,currentPage:action.currentPage}
         }
         case SET_TOTAL_USERS_COUNT:{
             return{...state, totalUsersCount:action.count}
         }
        default:
            return state;  
    }
}
export let FOLLOWAC = (userId) =>{
    return{
        type: 'FOLLOWAC',userId
    }
}
export let UNFOLLOWAC = (userId) =>{
    return{
        type: 'UNFOLLOWAC',userId
    }
}


export let SETUSERSAC = (users) =>({type:'SETUSERSAC',users})
export let setCurrentPageAC = (currentPage) =>({type:'SET_CURRENT_PAGE',currentPage})
export let setUsersTotalCountAC = (totalUsersCount) =>({type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount})
export default usersReducer;