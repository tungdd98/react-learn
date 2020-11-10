import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "router";

const switchRoutes = (
    <Switch>
        {routes.map((route, i) => {
            if (route.layout === "/auth") {
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
        <Redirect from="/auth" to="/auth/login"></Redirect>
    </Switch>
);

const Default = () => {
    return (
        <div className="wrapper">
            <h1>Admin layout</h1>
            {switchRoutes}
        </div>
    );
};

export default Default;
