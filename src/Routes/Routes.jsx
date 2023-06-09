import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            
        },
        {
          path: "menu",
          element: <Menu/>
        },
      
        {
          path: "our-shop/:category",
          element: <OurShop />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "my-cart",
          element: <MyCart />

        }
      ]
    }
  ]);
  