import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";

const  router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;