
import React from 'react'
import { useRoutes } from "react-router-dom";
import BlankLayout from '../layout/BlankLayout';
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import WithoutAuthLayout from '../layout/WithoutAuthLayout';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import AuthLayout from '../layout/AuthLayout';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Error404 from '../pages/Error404';

export default function Routes() {
  
     /*
        ************ Current URL Path Finder *******************
        const location = useLocation();
        const currentPath = location.pathname;    
    */

        let routes = useRoutes([
            { 
                path: "/", 
                element: <BlankLayout />, 
                children: [
                    { path: "/", element: <Home /> },
                    { path: "/about", element: <Aboutus /> }                
                ] 
            },  
            {
                path: "/", 
                element: <WithoutAuthLayout />,
                children: [
                    { path: "/login", element: <Login /> },
                    { path: "/signup", element: <Signup /> },
                ]
            },
            {
                path: "/", 
                element: <AuthLayout />,
                children: [
                    { path: "/profile", element: <Profile /> },
                    { path: "/settings", element: <Settings /> },   
                ]
            },        
            { path: "*", element: <Error404 /> },        
          ]);
        
          return routes;     
}
