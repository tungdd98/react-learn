import React from "react";

const routes = [
    {
        exact: true,
        path: "/photos",
        name: "photos",
        component: React.lazy(() => import("./features/Photo")),
        layout: "Default",
        meta: {
            hiddenBanner: true,
        },
    },
    {
        path: "/login",
        name: "login",
        component: React.lazy(() => import("./features/Login")),
        layout: "Auth",
    },
];

export default routes;
