import React from "react";

const routes = [
    {
        path: "/photos",
        component: React.lazy(() => import("./features/Photo/Photo")),
        layout: "/admin",
    },
    {
        path: "/login",
        component: React.lazy(() => import("./features/Login/Login")),
        layout: "/auth",
    },
];

export default routes;
