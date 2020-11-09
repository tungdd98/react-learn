import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import routes from "router";
import Router from "components/Router";

const App = () => {
    return (
        <div className="wrapper">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, i) => (
                            <Router key={i} {...route}></Router>
                        ))}
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
};

export default App;
