import React from "react";

const routes = [
    {
        exact: true,
        path: "/photos",
        component: React.lazy(() => import("./features/Photo")),
        layout: "Default",
    },
    {
        path: "/login",
        component: React.lazy(() => import("./features/Login")),
        layout: "Auth",
    },
];

export default routes;
