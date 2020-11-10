import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/Loading/Loading";
import routes from "router";
import { useSelector } from "react-redux";

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
    const isDisplayLoading = useSelector((state) => state.loading.display);
    console.log(isDisplayLoading);
    return (
        <div className="wrapper">
            {isDisplayLoading && <Loading />}
            {switchRoutes}
        </div>
    );
};

export default Default;
