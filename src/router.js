import React from "react";

import Default from "layouts/Default";
import Auth from "layouts/Auth";

const routes = [
  {
    exact: false,
    path: "/photos",
    component: React.lazy(() => import("./views/Photo/Photo")),
    layout: Default,
  },
  {
    exact: false,
    path: "/videos",
    component: React.lazy(() => import("./views/Video/Video")),
    layout: Default,
  },
  {
    exact: true,
    path: "/login",
    component: React.lazy(() => import("./views/Auth/pages/Login")),
    layout: Auth,
  },
  {
    exact: true,
    path: "/register",
    component: React.lazy(() => import("./views/Auth/pages/Register")),
    layout: Auth,
  },
];

export default routes;
