import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import {types} from '../types/types';

//async action
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch( login(123, 'Pedro') );
        }, 3500);

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });   
    }
}

// action called when user logs in
export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName,
        }
});


