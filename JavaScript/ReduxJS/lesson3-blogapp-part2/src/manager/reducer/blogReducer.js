const initialState = [];

export const blogReducer = (state=initialState,action)=>{
            switch (action.type) {
                case "ADD_BLOG":
                    return [...state,action.value];
                case "REMOVE_BLOG":
                    return state.filter(blog=>{
                        return blog.id !== action.myid
                    })
                default:
                    return state
            }
}