
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
    Navigate
} from 'react-router-dom'
import * as React from "react"
import { Suspense } from 'react'
import { mainRoutes } from "./routes"
import Tab from "../components/tab/tab"
import Login from "../page/login/login";
import Index from "../page/index/index";
const RouterIndex = () => {


    return (

        <Router>
            <Tab title="啦啦啦">
               <Routes>
                    <Route path="/" component={Index} />
                    <Route path="/login" component={Login} />
                    </Routes>
            </Tab>

        </Router >




    )
}
export default RouterIndex

