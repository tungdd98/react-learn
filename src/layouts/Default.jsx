import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "router";

const switchRoutes = (
    <Switch>
        {routes.map((route, i) => {
            if (route.layout === "/admin") {
                return (
                    <Route
                        key={i}
                        path={route.layout + route.path}
                        component={route.component}
                    ></Route>
                );
            }
            return null;
        })}
        <Redirect from="/" to="/photos"></Redirect>
    </Switch>
);

const Default = () => {
    return <div className="wrapper">{switchRoutes}</div>;
};

export default Default;
