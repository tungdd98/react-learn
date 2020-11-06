import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
    return (
        <div className="wrapper">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter></BrowserRouter>
            </Suspense>
        </div>
    );
};

export default App;
