import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";



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
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/our-shop",
          element: <OurShop />
        }
      ]
    },
  ]);
  