import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth.js";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const user = useSelector((state) => state.curUser);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    );
};

export default PrivateRoute