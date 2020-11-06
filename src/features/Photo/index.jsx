import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PhotoMain from "./pages/Main";
import PhotoAddEdit from "./pages/AddEdit";

const Photo = () => {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={PhotoMain}></Route>
                <Route
                    path={`${match.url}/add`}
                    component={PhotoAddEdit}
                ></Route>
            </Switch>
        </div>
    );
};

export default Photo;
