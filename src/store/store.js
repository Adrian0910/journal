//Create store

import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';


// const to combine all reducers
const reducers = combineReducers({
    //our individual reducers
    auth: authReducer,
});

export  const store = createStore(
    reducers,
    //Next line is for using redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


