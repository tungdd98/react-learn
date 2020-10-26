import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "components/NotFound";
import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";

export const Photo = (props) => {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={match.url} component={Main}></Route>
                <Route path={`${match.url}/add`} component={AddEdit}></Route>
                <Route path={`${match.url}/:id`} component={AddEdit}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    );
};

export default Photo;
