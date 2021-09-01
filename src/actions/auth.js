import {types} from '../types/types';


// action called when user logs in
export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName,
        }
});


