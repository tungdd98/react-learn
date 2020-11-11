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
    exact: false,
    path: "/login",
    component: React.lazy(() => import("./views/Login/Login")),
    layout: Auth,
  },
];

export default routes;
