
/*  state 
    notes: [],
    active: null,
    active: {
        id: 'SDFSFFSSNNHB68161',
        title: '',
        body: '',
        imgUrl: '',
        date: 27/10/2021
    }
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.notesActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            console.log(action.payload);
            return {
                ...state,
                notes: [...action.payload]
            }
        default:
            return state;
    }

}




