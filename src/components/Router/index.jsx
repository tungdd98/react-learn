import React from "react";
import { Route } from "react-router-dom";

const Router = (route) => {
    return (
        <Route
            path={route.path}
            render={(props) => (
                <route.component
                    {...props}
                    routes={route.routes}
                ></route.component>
            )}
        ></Route>
    );
};

export default Router;
