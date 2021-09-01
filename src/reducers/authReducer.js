import { types } from "../types/types";

//Actions that are going to be dispatched to the reducer
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case types.logout:
            return{
                //void obj  
            }
    
        default:
            //state it's a void obj
            return state;
    }

}

