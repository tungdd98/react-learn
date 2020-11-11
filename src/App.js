import React, { Suspense, useEffect, useState } from "react";
import firebase from "firebase";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import routes from "router";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_APP_DOMAIN,
};
firebase.initializeApp(config);

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("Not sign in");
          return;
        }
        const token = await user.getIdToken();
        window.localStorage.setItem("firebase-token", token);
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);
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
