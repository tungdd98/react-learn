import React from "react";

const routes = [
    {
        path: "/photos",
        component: React.lazy(() => import("./views/Photo/Photo")),
        layout: "/admin",
    },
    {
        path: "/login",
        component: React.lazy(() => import("./views/Login/Login")),
        layout: "/auth",
    },
];

export default routes;
