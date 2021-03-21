import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import Destination from '../Destination/Destination';


const PrivateRoute = (props, {children, ...rest}) => {

const {user}=props;
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };


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