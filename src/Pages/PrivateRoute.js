import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ render, ...rest }) => {
  const user = useSelector((state) => state.curUser);
  return (
    <Route
      {...rest}
      render={(routeProps) => (!!user ? render() : <Redirect to={"/login"} />)}
    />
  );
};

export default PrivateRoute;
