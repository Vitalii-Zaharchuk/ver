const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
const SET_USERSAC = 'SETUSERSAC'
let initialState ={
    users:[
        {id: 1,photoAva: 'https://www.maxim.com/.image/t_share/MTU3NzI3MTA3OTM2NDI5MDYx/gettyimages-110307887.jpg',
            firstName: 'Dima',status: 'I am boss', location: {city:'Moskow',country:'Russia'},follow:true},
        {id: 2,photoAva: 'https://www.maxim.com/.image/t_share/MTU3NzI3MTA3OTM2NDI5MDYx/gettyimages-110307887.jpg',
            firstName: 'Sasha',status: 'I like football', location:{city:'Kiev',country:'Ukraine'} ,follow:false},
        {id: 3,photoAva: 'https://www.maxim.com/.image/t_share/MTU3NzI3MTA3OTM2NDI5MDYx/gettyimages-110307887.jpg',
            firstName: 'Igor',status: 'I like travell', location: {city:'Belin',country:'German'},follow:true},
        {id: 4,photoAva: 'https://www.maxim.com/.image/t_share/MTU3NzI3MTA3OTM2NDI5MDYx/gettyimages-110307887.jpg',
            firstName: 'Misha',status: 'I am oss too', location:{city:'Varshawa',coutry:'Poland'} ,follow:false}
    ]
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
         case SET_USERSAC:
             return{...state,users:[...state.users,action.users]}  
            
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

export let SETUSERSAC = (users) =>({type:SETUSERSAC,users})
export default usersReducer;