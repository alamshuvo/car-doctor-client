import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";

const  router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;