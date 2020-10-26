import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

const Photo = React.lazy(() => import("./features/Photo"));

const App = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/photos"></Redirect>
                        <Route path="/photos" component={Photo}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
};

export default App;
