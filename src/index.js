import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import DefaultLayout from "layouts/Default";
import AuthLayout from "layouts/Auth";

import "./assets/scss/main.scss";

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/admin" component={DefaultLayout}></Route>
                <Route path="/auth" component={AuthLayout}></Route>
                <Redirect from="/" to="/admin/photos"></Redirect>
            </Switch>
        </Suspense>
    </Router>,
    document.getElementById("root")
);
