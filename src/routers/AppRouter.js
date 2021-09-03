import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import firebase from 'firebase/compat/app';

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsloggedIn] = useState(false);

    // auth state 
    useEffect(() => {

        //observable
        firebase.auth().onAuthStateChanged( (user) => {
            
            if( user?.uid ){
                dispatch(login( user.displayName, user.displayName ));
                setIsloggedIn(true);
            }else {
                setIsloggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsloggedIn]);

    if( checking ){
        return(
            <h1>loading...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect to='/auth/login' />

                </Switch>
            </div>
        </Router>
    )
}
