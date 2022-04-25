import { lazy } from "react"
// import Login from "../page/login/login";

const Hellow = lazy(() => import("../page/hellow/hellow"))
const Err = lazy(() => import("../page/err/err"))
const Login = lazy(() => import('../page/login/login'))
const Index = lazy(() => import('../page/index/index'))
export const mainRoutes = [
    {
        to: "/",
        component:Index
    },
    {
        to: "/*",
        component: Err
    },
    {
        to: '/hellow',
        component: Hellow
    }, {
        to: '/login',
        component: Login
    },
   
]
