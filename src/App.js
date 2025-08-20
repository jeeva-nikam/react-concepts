import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { Items } from "./components/Items";
// Below is the functional Component
//Definition - functional component is the normal js function which returns react element


const AppRoot = ()=>{
    return (
        <div className="app-root">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppRoot />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <CardContainer />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/restaurant/:resId',
                    element: <Restaurant />
                },
                {
                    path: '/items',
                    element: <Items list="listString"/>
                }
            ]
        }
        
    ]);

const container = document.getElementById("demo");
const root = createRoot(container);
// console.log("root", root)
root.render(<RouterProvider router={appRouter} />);
