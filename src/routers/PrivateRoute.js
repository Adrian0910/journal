import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //el resto de los componentes
}) => {

    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated )
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
