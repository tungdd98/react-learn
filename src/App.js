import React, { Suspense, createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import routes from "router";
import firebase from "utils/firebase";

export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => setUser(user));
    return () => {
      unregisterAuthObserver();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <route.layout>
                    <route.component {...props} />
                  </route.layout>
                )}
              />
            ))}
            <Redirect from="/" to="/photos"></Redirect>
          </Switch>
        </Router>
      </Suspense>
    </AuthContext.Provider>
  );
};

export default App;
