//Create store

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //middleware with thumb

import { authReducer } from '../reducers/authReducer';

//Next line is for using redux dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// const to combine all reducers
const reducers = combineReducers({
    //our individual reducers
    auth: authReducer,
});

export  const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )    
);


