import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
        children: [
          {path: '/', element: <Home/>}
      ]
    },

    //dashboard
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: []
    },

    //authentication
    {path: '/sign_up', element: <Registration/>},
    {path: '/login', element: <Login/>},
  ]);