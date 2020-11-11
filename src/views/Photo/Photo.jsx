import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PhotoMain from "./pages/Main/Main";
import PhotoAddEdit from "./pages/AddEdit/AddEdit";

const Photo = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url} component={PhotoMain}></Route>
        <Route path={`${match.url}/add`} component={PhotoAddEdit}></Route>
      </Switch>
    </>
  );
};

export default Photo;
