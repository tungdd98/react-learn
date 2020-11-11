import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import routes from "router";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout history={props.history}>
                  <route.component {...props} />
                </route.layout>
              )}
            ></Route>
          ))}
          <Redirect from="/" to="/photos"></Redirect>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
