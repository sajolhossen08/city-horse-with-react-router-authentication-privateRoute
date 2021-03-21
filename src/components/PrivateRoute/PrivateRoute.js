import React from 'react';
import { Redirect, Route } from 'react-router';
import Destination from '../Destination/Destination';


const PrivateRoute = (props, {children, ...rest}) => {

const {user}=props;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    <Destination/>
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;