const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState={
    postData: [
        { id: 1, post: 'Good' },
        { id: 2, post: 'Fine' },
        { id: 3, post: 'Bad' }
    ],
    newPostText: '123'
}
const profileReducer = (state = initialState,action) =>{
        switch (action.type){
            case ADD_POST:
                    let newPost = {
                        id: 4,
                        post: state.newPostText,
                    };
                return  {...state,
                postData:[...state.postData,newPost],
                    
                }
            case  UPDATE_NEW_POST_TEXT:
               return {...state,
                newPostText: action.newText
                }
            default:
                return state;
        }
                      

            
    
}
export let addPostActionCreator = () =>{
    return{
        type: 'ADD-POST'
    }
}
export let updateNewPostTextActionCreator = (text) =>{
    return{
        type: 'UPDATE-NEW-POST-TEXT',
        newText:text
    }
}

export default profileReducer;